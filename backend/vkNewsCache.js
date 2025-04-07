// vkNewsCache.js
const fetch = require("node-fetch");
const fs = require("fs");

const CACHE_TTL = 10 * 60 * 1000; // 10 минут
let cachedData = null;
let lastFetched = 0;

const VK_API_URL = "https://api.vk.com/method/wall.get";
const GROUP_ID = "-230030577";
const ACCESS_TOKEN = "232a2524232a2524232a25240b2004e9092232a232a252444d9d321a5b2a0f0e1abbdf1";
const API_VERSION = "5.199";

async function fetchVKNews() {
  const url = `${VK_API_URL}?owner_id=${GROUP_ID}&count=10&access_token=${ACCESS_TOKEN}&v=${API_VERSION}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getNews() {
  const now = Date.now();

  if (cachedData && now - lastFetched < CACHE_TTL) {
    return cachedData;
  }

  const data = await fetchVKNews();

  if (data.response) {
    cachedData = data;
    lastFetched = now;

    // optionally сохраняем на диск
    fs.writeFileSync("newsCache.json", JSON.stringify(data, null, 2));
  }

  return data;
}

module.exports = {
  getNews,
};
