# Moodflix - React Movie Search App

Moodflix 是一個使用 React、Vite、Tailwind CSS、Appwrite 與 TMDB API 打造的電影搜尋與推薦網站。用戶可以即時搜尋電影、瀏覽熱門趨勢電影，並享受流暢的 UI 體驗。

## 特色功能

- 🔍 **電影搜尋**：即時查詢數千部電影，並自動去抖動減少 API 請求。
- 📈 **熱門趨勢**：根據用戶搜尋次數，顯示最受歡迎的電影。
- 🖼️ **精美卡片**：每部電影以卡片方式呈現，包含封面、評分、語言與年份。
- ⚡ **快速體驗**：採用 Vite 打包，開發與部署速度極快。
- ☁️ **Appwrite 數據庫**：記錄搜尋次數與熱門電影資料。

## 技術棧

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- [react-use](https://github.com/streamich/react-use)（用於 useDebounce）

## 專案結構

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   ├── Spinner.jsx
│   │   └── search.css
│   ├── App.jsx
│   ├── appwrite.js
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 環境變數

請於根目錄建立 `.env` 檔案，並填入以下內容：

```
VITE_TMDB_API_KEY=你的TMDB_API_KEY
VITE_APPWRITE_PROJECT_ID=你的Appwrite專案ID
VITE_APPWRITE_DATABASE_ID=你的Appwrite資料庫ID
VITE_APPWRITE_COLLECTION_ID=你的Appwrite集合ID
```

## 安裝與啟動

1. 安裝依賴
   ```sh
   npm install
   ```
2. 啟動開發伺服器
   ```sh
   npm run dev
   ```
3. 打包專案
   ```sh
   npm run build
   ```

## 部署

本專案支援 GitHub Pages 部署，請執行：
```sh
npm run deploy
```

## 資料來源

- 電影資料來自 [TMDB](https://www.themoviedb.org/)
- 搜尋紀錄與熱門趨勢由 [Appwrite](https://appwrite.io/) 提供

## 參考來源

本專案參考自 [這部教學影片](https://youtu.be/dCLhUialKPQ?si=85sq0yQ5JnxnYeTp)。
