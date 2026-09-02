"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import {
  getSynapseEmbedSrc,
  isSynapseMessageOrigin,
  SYNAPSE_REQUIRED_EMBED_ORIGINS,
} from "@/lib/synapse";
import {
  type WidgetAppearance,
  readCachedWidgetAppearance,
  writeCachedWidgetAppearance,
  WIDGET_APPEARANCE_FALLBACK,
  normalizeWidgetAppearance,
} from "@/lib/synapse-widget-appearance";

const EMBED_SRC = getSynapseEmbedSrc();
/** Height of Synapse's embedded header (title, more, close, privacy line). */
const EMBED_HEADER_PX = 69;

const TEASER_MESSAGES = [
  "Need a doctor? 👋",
  "Book with your doctor without waiting on hold.",
  "Not sure who to see? We'll help you find the right doctor.",
  "Check availability. Pick your doctor. Book your visit.",
];

function readInitialAppearance(): WidgetAppearance {
  return readCachedWidgetAppearance() ?? WIDGET_APPEARANCE_FALLBACK;
}

function isEmbedLoadBlocked(iframe: HTMLIFrameElement): boolean {
  try {
    const href = iframe.contentWindow?.location.href ?? "";
    return !href || href === "about:blank" || /chromewebdata|chrome-error/.test(href);
  } catch {
    return false;
  }
}

export function SynapseChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaserIndex, setTeaserIndex] = useState(0);
  const [look, setLook] = useState<WidgetAppearance>(readInitialAppearance);
  const [embedBlocked, setEmbedBlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/synapse-widget-config")
      .then((r) => r.json())
      .then((data: Partial<WidgetAppearance>) => {
        if (cancelled) return;
        setLook((prev) => {
          const next = normalizeWidgetAppearance({
            ...data,
            avatarUrl: data.avatarUrl || prev.avatarUrl,
          });
          writeCachedWidgetAppearance(next);
          return next;
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (open) return;
    const tick = window.setInterval(
      () => setTeaserIndex((i) => (i + 1) % TEASER_MESSAGES.length),
      5000,
    );
    return () => window.clearInterval(tick);
  }, [open]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isSynapseMessageOrigin(event.origin)) return;
      const payload = event.data;
      const type = typeof payload === "string" ? payload : payload?.type || payload?.action;
      if (type === "close" || type === "synapse:close" || type === "widget-close") {
        setOpen(false);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    if (!open) return;
    setEmbedBlocked(false);
    const iframe = iframeRef.current;
    if (!iframe) return;

    const checkBlocked = () => {
      if (isEmbedLoadBlocked(iframe)) setEmbedBlocked(true);
    };

    iframe.addEventListener("load", checkBlocked);
    const timeout = window.setTimeout(checkBlocked, 3500);

    return () => {
      iframe.removeEventListener("load", checkBlocked);
      window.clearTimeout(timeout);
    };
  }, [open]);

  const teaser = TEASER_MESSAGES[teaserIndex];
  const radius = look.cornerRadius;
  const avatarSrc = look.avatarUrl || WIDGET_APPEARANCE_FALLBACK.avatarUrl;
  const assistantTitle = `${look.clinicName} Assistant`;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999998] flex flex-col items-end gap-3 p-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:p-0">
      <div
        id="synapse-panel"
        hidden={!open}
        className="pointer-events-auto relative flex flex-col overflow-hidden bg-white"
        style={{
          width: "min(540px, calc(100vw - 1.5rem))",
          height: "min(720px, calc(100dvh - 5.5rem))",
          borderRadius: radius,
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 40px -16px rgba(15,23,42,0.22)",
        }}
      >
        <div
          className="relative z-20 flex shrink-0 items-center gap-2.5 border-b border-slate-200/80 px-3.5 py-3"
          style={{ background: look.primaryColor }}
        >
          {/* Backend avatar is often a data URL — next/image cannot optimize it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            alt=""
            className="size-9 shrink-0 rounded-full bg-white object-cover ring-2 ring-white/40"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-tight" style={{ color: look.textColor }}>
              {assistantTitle}
            </p>
            <p
              className="mt-0.5 truncate text-xs leading-tight opacity-85"
              style={{ color: look.textColor }}
            >
              {look.greeting}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors"
            style={{ color: look.textColor }}
          >
            <X className="size-6" strokeWidth={2.5} />
          </button>
        </div>
        <div className="relative z-0 min-h-0 flex-1 overflow-hidden bg-white">
          <iframe
            ref={iframeRef}
            src={EMBED_SRC}
            title={assistantTitle}
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-x-0 bottom-0 w-full border-0"
            style={{ top: -EMBED_HEADER_PX, height: `calc(100% + ${EMBED_HEADER_PX}px)` }}
          />
          {embedBlocked ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white px-6 text-center">
              <p className="text-sm font-semibold text-slate-900">Assistant couldn&apos;t load</p>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-600">
                Synapse is blocking this site from embedding the chat. Add this site to Synapse
                Widget → Allowed origins, and set{" "}
                <code className="rounded bg-slate-100 px-1">NEXT_PUBLIC_API_BASE_URL</code> on the
                Synapse Vercel project, then redeploy.
              </p>
              <p className="mt-3 text-[11px] text-slate-500">
                Required origins: {SYNAPSE_REQUIRED_EMBED_ORIGINS.join(", ")}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${teaser} — open chat`}
          className="pointer-events-auto max-w-[260px] rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-left text-[15px] font-medium leading-snug text-slate-800 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)] transition-colors hover:border-slate-300"
        >
          <span key={teaserIndex} className="block">
            {teaser}
          </span>
        </button>
      ) : null}

      <button
        type="button"
        id="synapse-chat-launcher"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-controls="synapse-panel"
        onClick={() => setOpen((next) => !next)}
        className="pointer-events-auto flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-lg ring-2 ring-black/10"
        style={{ background: look.primaryColor, color: look.textColor }}
      >
        {open ? (
          <X className="size-7" strokeWidth={2.5} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarSrc} alt="" className="size-full object-cover" />
        )}
      </button>
    </div>
  );
}
