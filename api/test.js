export default async function handler(req, res) {
  try {
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const r = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: 'رسالة اختبار' })
    });
    const data = await r.json();
    res.status(200).json({
      tokenLooksOk: !!token && token.includes(':'),
      chatIdValue: chatId,
      telegramReply: data
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
