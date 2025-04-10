import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 3001;
const TOKEN = "232a2524232a2524232a25240b2004e9092232a232a252444d9d321a5b2a0f0e1abbdf1";

app.get("/api/news", async (req, res) => {
  try {
    const vkRes = await fetch(
      `https://api.vk.com/method/wall.get?owner_id=-230030577&count=6&access_token=${TOKEN}&v=5.131`
    );
    const data = await vkRes.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Ошибка прокси-сервера" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Прокси работает на http://localhost:${PORT}`);
});