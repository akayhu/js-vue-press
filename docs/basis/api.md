# API

API 是什麼東西？

我們前端網頁要取得後台資料庫，前端網頁是無法透過任合方式直接去操作資料庫的內容，因此中間一定都會有後端的伺服器，那前端網頁跟伺服器怎麼溝通呢？用 **API** 的方法去溝通，API 本身是一個網址，可對 API 進行各種操作，例如我要取得資料(get)、新增資料(posr)、更新資料(patch)、刪除資料(delete) ...等等

<img src="/js-vue-press/image/api_1.png" />

## 練習說明

登入六角的後台可取得 `API 路徑(UUID)` 與 `Token`，每個人的 UUID 都不同，Token 是驗證登入的狀態

<img src="/js-vue-press/image/api_2.png" />
