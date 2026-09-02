"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SYNAPSE_APP_URL, SYNAPSE_CLINIC_SLUG } from "@/lib/site";

const EMBED_SRC = `${SYNAPSE_APP_URL.replace(/\/$/, "")}/embed/${encodeURIComponent(SYNAPSE_CLINIC_SLUG)}`;
const FALLBACK_AVATAR = "/images/logo-mark.webp";
/** Height of Synapse's embedded header (title, more, close, privacy line). */
const EMBED_HEADER_PX = 69;

const TEASER_MESSAGES = [
  "Need a doctor? 👋",
  "Book with your doctor without waiting on hold.",
  "Not sure who to see? We'll help you find the right doctor.",
  "Check availability. Pick your doctor. Book your visit.",
];

type WidgetAppearance = {
  clinicName: string;
  greeting: string;
  primaryColor: string;
  textColor: string;
  avatarUrl: string;
  cornerRadius: number;
};

const FALLBACK: WidgetAppearance = {
  clinicName: "Umbrella Health",
  greeting: "Hi! How can I help you today?",
  primaryColor: "#3b82f6",
  textColor: "#ffffff",
  avatarUrl: FALLBACK_AVATAR,
  cornerRadius: 18,
};

export function SynapseChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaserIndex, setTeaserIndex] = useState(0);
  const [look, setLook] = useState<WidgetAppearance>(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/synapse-widget-config")
      .then((r) => r.json())
      .then((data: Partial<WidgetAppearance>) => {
        if (cancelled) return;
        setLook({
          clinicName: data.clinicName || FALLBACK.clinicName,
          greeting: data.greeting || FALLBACK.greeting,
          primaryColor: data.primaryColor || FALLBACK.primaryColor,
          textColor: data.textColor || FALLBACK.textColor,
          avatarUrl: data.avatarUrl || FALLBACK_AVATAR,
          cornerRadius: data.cornerRadius ?? FALLBACK.cornerRadius,
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
      if (event.origin !== SYNAPSE_APP_URL) return;
      const payload = event.data;
      const type = typeof payload === "string" ? payload : payload?.type || payload?.action;
      if (type === "close" || type === "synapse:close" || type === "widget-close") {
        setOpen(false);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const teaser = TEASER_MESSAGES[teaserIndex];
  const radius = look.cornerRadius;
  const avatarSrc = look.avatarUrl || FALLBACK_AVATAR;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999998] flex flex-col items-end gap-3 p-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:p-0">
      {open ? (
        <div
          id="synapse-panel"
          className="pointer-events-auto relative flex flex-col overflow-hidden bg-white"
          style={{
            width: "min(540px, calc(100vw - 1.5rem))",
            height: "min(640px, calc(100dvh - 7.5rem))",
            borderRadius: radius,
            border: "1px solid rgba(15,23,42,0.08)",
            boxShadow: "0 12px 40px -16px rgba(15,23,42,0.22)",
          }}
        >
          <div
            className="flex shrink-0 items-center gap-2.5 border-b border-slate-200/80 px-3.5 py-2.5"
            style={{ background: look.primaryColor }}
          >
            {/* Backend avatar is often a data URL — next/image cannot optimize it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              alt=""
              className="size-8 shrink-0 rounded-full bg-white object-cover ring-2 ring-white/40"
            />
            <p
              className="min-w-0 flex-1 truncate text-sm font-semibold"
              style={{ color: look.textColor }}
            >
              {look.clinicName} Assistant
            </p>
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
          <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
            <iframe
              src={EMBED_SRC}
              title="Umbrella Health AI Assistant"
              allow="clipboard-write"
              className="absolute inset-x-0 bottom-0 w-full border-0"
              style={{ top: -EMBED_HEADER_PX, height: `calc(100% + ${EMBED_HEADER_PX}px)` }}
            />
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${teaser} — open chat`}
          className="pointer-events-auto max-w-[280px] rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-left text-[15px] font-medium leading-snug text-slate-800 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)] transition-colors hover:border-slate-300"
        >
          <span key={teaserIndex} className="block">
            {teaser}
          </span>
        </button>
      )}

      <button
        type="button"
        id="synapse-chat-launcher"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-controls="synapse-panel"
        onClick={() => setOpen((next) => !next)}
        className="pointer-events-auto flex size-[4.25rem] shrink-0 items-center justify-center overflow-hidden rounded-full shadow-lg ring-2 ring-black/10"
        style={{ background: look.primaryColor, color: look.textColor }}
      >
        {open ? (
          <X className="size-8" strokeWidth={2.5} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarSrc} alt="" className="size-full object-cover" />
        )}
      </button>
    </div>
  );
}
