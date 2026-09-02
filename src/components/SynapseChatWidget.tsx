"use client";

import { useState } from "react";
import { SYNAPSE_APP_URL, SYNAPSE_CLINIC_SLUG } from "@/lib/site";
import { cn } from "@/lib/utils";

const EMBED_SRC = `${SYNAPSE_APP_URL}/embed/${encodeURIComponent(SYNAPSE_CLINIC_SLUG)}`;

/**
 * Floating Synapse assistant. Clinic sites never call the API directly —
 * the iframe talks to Synapse from the app origin.
 */
export function SynapseChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="synapse-chat-panel"
        aria-hidden={!open}
        className={cn(
          "fixed bottom-[5.5rem] right-4 z-[999998] h-[min(640px,calc(100dvh-7rem))] w-[min(400px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-[0_18px_50px_-18px_rgba(11,14,46,0.35)]",
          open ? "block" : "hidden",
        )}
      >
        <iframe
          src={EMBED_SRC}
          title="Clinic assistant chat"
          allow="clipboard-write"
          className="block size-full border-0"
        />
      </div>
      <button
        type="button"
        id="synapse-chat-launcher"
        aria-label={open ? "Close clinic chat" : "Open clinic chat"}
        aria-expanded={open}
        aria-controls="synapse-chat-panel"
        onClick={() => setOpen((next) => !next)}
        className="fixed bottom-5 right-5 z-[999999] flex size-14 cursor-pointer items-center justify-center rounded-full border-0 bg-[#5b21b6] text-[1.35rem] leading-none text-white shadow-[0_10px_30px_-8px_rgba(91,33,182,0.55)]"
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
