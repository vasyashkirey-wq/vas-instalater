// Netlify Function: POST /api/lead
// Sends each website request to Telegram. Needs two environment variables
// in Netlify → Site configuration → Environment variables:
//   TG_BOT_TOKEN  — token from @BotFather
//   TG_CHAT_ID    — your chat id (see README)
// If they are not set, it answers 501 and the site falls back to email only.
// (functions/api/lead.js is the same thing for Cloudflare Pages.)

const FIELDS = [
  ["jmeno", "👤 Jméno"],
  ["telefon", "📞 Telefon"],
  ["problem", "🔧 Problém"],
  ["adresa", "📍 Adresa"],
  ["popis", "📝 Popis"],
  ["stranka", "🌐 Stránka"]
];

const clean = (v, max) => String(v ?? "").replace(/[<>&]/g, "").trim().slice(0, max);

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

export default async (request) => {
  if (request.method !== "POST") return json({ success: false, reason: "method" }, 405);

  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;
  if (!token || !chatId) return json({ success: false, reason: "not-configured" }, 501);

  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ success: false, reason: "bad-request" }, 400);
  }

  // Honeypot: bots tick the hidden checkbox. Pretend success, send nothing.
  if (form.get("botcheck")) return json({ success: true });

  const phone = clean(form.get("telefon"), 40);
  if (!/\d{6,}/.test(phone.replace(/\D/g, ""))) return json({ success: false, reason: "phone" }, 400);

  const lines = [`<b>${clean(form.get("subject"), 120) || "Nová poptávka"}</b>`];
  for (const [key, label] of FIELDS) {
    const v = clean(form.get(key), key === "popis" ? 1500 : 200);
    if (v) lines.push(`${label}: ${v}`);
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: lines.join("\n"), parse_mode: "HTML", disable_web_page_preview: true })
  });

  return res.ok ? json({ success: true }) : json({ success: false, reason: "telegram" }, 502);
};

export const config = { path: "/api/lead" };
