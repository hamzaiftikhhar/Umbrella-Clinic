/**
 * Standalone Synapse clinic assistant embed (iframe only).
 * Synapse handles guest chat inside the iframe — do not call /chat/message/staff from the client site.
 *
 * Required Synapse setup:
 * - Vercel: NEXT_PUBLIC_API_BASE_URL=https://synapse-hamzaiftikhhar.vercel.app/api/v1
 * - Dashboard → Widget → Allowed origins: this site's origin (no trailing slash)
 */
(function () {
  var SYNAPSE_APP_URL = "https://synapse-hamzaiftikhhar.vercel.app";
  var CLINIC_SLUG = "umbrella-health";
  var embedSrc =
    SYNAPSE_APP_URL.replace(/\/$/, "") + "/embed/" + encodeURIComponent(CLINIC_SLUG);

  var panel = document.createElement("div");
  panel.id = "synapse-chat-panel";
  panel.style.cssText =
    "display:none;position:fixed;bottom:5.5rem;right:1rem;" +
    "width:min(540px,calc(100vw - 2rem));height:min(720px,calc(100dvh - 7rem));" +
    "border-radius:18px;overflow:hidden;box-shadow:0 12px 40px -16px rgba(15,23,42,0.22);" +
    "border:1px solid rgba(15,23,42,0.08);z-index:999998;background:#fff;";

  var iframe = document.createElement("iframe");
  iframe.src = embedSrc;
  iframe.title = "Umbrella Health assistant";
  iframe.allow = "clipboard-write";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.style.cssText = "width:100%;height:100%;border:0;display:block;";
  panel.appendChild(iframe);

  var btn = document.createElement("button");
  btn.type = "button";
  btn.setAttribute("aria-label", "Open chat");
  btn.style.cssText =
    "position:fixed;bottom:1.25rem;right:1.25rem;z-index:999999;" +
    "width:4rem;height:4rem;border-radius:9999px;border:none;cursor:pointer;" +
    "background:#3b82f6;color:#fff;font-size:1.35rem;" +
    "box-shadow:0 10px 30px -8px rgba(59,130,246,0.45);";
  btn.innerHTML = "&#128172;";

  var open = false;
  btn.onclick = function () {
    open = !open;
    panel.style.display = open ? "block" : "none";
    btn.innerHTML = open ? "&#10005;" : "&#128172;";
    btn.setAttribute("aria-label", open ? "Close chat" : "Open chat");
  };

  document.body.appendChild(panel);
  document.body.appendChild(btn);
})();
