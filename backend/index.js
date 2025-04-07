require("dotenv").config();
// index.js
const express = require("express");
const cors = require("cors");
const { getNews } = require("./vkNewsCache");

const app = express();
const PORT = 3001;

// Разрешаем запросы с любого домена (или задай конкретный origin)
app.use(cors());

// Роут для новостей
app.get("/api/news", async (req, res) => {
  try {
    const news = await getNews();
    res.json(news);
  } catch (error) {
    console.error("Ошибка получения новостей:", error);
    res.status(500).json({ error: "Не удалось загрузить новости" });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});

