"use client";

import { useState } from "react";
import { SYNAPSE_APP_URL, SYNAPSE_CLINIC_SLUG } from "@/lib/site";

const EMBED_SRC = `${SYNAPSE_APP_URL.replace(/\/$/, "")}/embed/${encodeURIComponent(SYNAPSE_CLINIC_SLUG)}`;

/**
 * Option A floating chat. Clinic connection is the iframe URL slug only.
 * Guest config + /widget/chat/guest run on the Synapse origin, not this site.
 */
export function SynapseChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="synapse-panel"
        aria-hidden={!open}
        style={{
          display: open ? "block" : "none",
          position: "fixed",
          bottom: "5.5rem",
          right: "1rem",
          zIndex: 999998,
          width: "min(400px, calc(100vw - 2rem))",
          height: "min(640px, calc(100dvh - 7rem))",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 18px 50px -18px rgba(11,14,46,0.35)",
          border: "1px solid rgba(15,23,42,0.08)",
          background: "#fff",
        }}
      >
        <iframe
          src={EMBED_SRC}
          title="Umbrella Health AI Assistant"
          allow="clipboard-write"
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        />
      </div>
      <button
        type="button"
        id="synapse-chat-launcher"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-controls="synapse-panel"
        onClick={() => setOpen((next) => !next)}
        style={{
          position: "fixed",
          bottom: "1.25rem",
          right: "1.25rem",
          zIndex: 999999,
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: 9999,
          border: "none",
          cursor: "pointer",
          background: "#5b21b6",
          color: "#fff",
          fontSize: "0.875rem",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 30px -8px rgba(91,33,182,0.55)",
        }}
      >
        {open ? "×" : "Chat"}
      </button>
    </>
  );
}
