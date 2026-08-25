self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // 保持最簡單狀態，唔強制快取網頁，確保你每次打開都讀到最新代碼
});
