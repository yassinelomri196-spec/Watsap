export default async function handler(req, res) {
  try {
    const token = process.env.TELEGRAM_TOKEN;
    const r = await fetch('https://api.telegram.org/bot' + token + '/getUpdates');
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
