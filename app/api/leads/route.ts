export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    if (!name || !phone || name.length > 80 || phone.length > 30) {
      return Response.json({ error: "Ma’lumotlar noto‘g‘ri." }, { status: 400 });
    }
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!sheetsUrl) return Response.json({ error: "Qabul xizmati sozlanmagan." }, { status: 503 });
    const sheetResponse = await fetch(sheetsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, source: "Gofurov Academy", submittedAt: new Date().toISOString() }),
      redirect: "follow",
    });
    if (!sheetResponse.ok) throw new Error("Google Sheets webhook failed");
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (token && chatId) {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: `🎓 Yangi ariza\n\n👤 Ism: ${name}\n📞 Telefon: ${phone}` }),
      });
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Arizani yuborib bo‘lmadi." }, { status: 500 });
  }
}
