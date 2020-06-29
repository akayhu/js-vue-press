# AJAX 與資料處理

## JSON 資料

什麼是 JSON?

JavaScript Object Notation (JSON) 為將結構化資料 (structured data) 呈現為 JavaScript 物件的標準格式，常用於網站上的資料呈現、傳輸 (例如將資料從伺服器送至用戶端，以利顯示網頁)

JSON 可能是物件或字串。當你想從 JSON 中讀取資料時，JSON 可作為物件；當要跨網路傳送 JSON 時，就會是字串。

**「JSON 物件基本上就是 JavaScript 物件」**

舉例如下：

``` js
{
  "squadName" : "Super hero squad",
  "homeTown" : "Metro City",
  "formed" : 2016,
  "secretBase" : "Super tower",
  "active" : true,
  "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    }
  ]
}
```

只要在宣告一個變數等於這個 JSON，基本上就是一個物件了！

## 什麼是 AJAX ?

AJAX 是「Asynchronous JavaScript and XML」（非同步的 JavaScript 與 XML 技術）的縮寫，簡單說就是網頁不用重新整理，就能即時地透過瀏覽器去跟伺服器溝通，撈出資料。

伺服器對 AJAX 資料請求回應通常是以三種資料格式其中之一（HTML、XML、JSON），最常與 Javascript 做搭配就是 **JSON**。

## 什麼是 API ?

我們前端網頁要取得後台資料庫，前端網頁是無法透過任合方式直接去操作資料庫的內容，因此中間一定都會有後端的伺服器，那前端網頁跟伺服器怎麼溝通呢？用 **API** 的方法去溝通，API 本身是一個網址，可對 API 進行各種操作，例如我要取得資料(get)、新增資料(posr)、更新資料(patch)、刪除資料(delete) ...等等

<img src="/js-vue-press/image/api_1.png" />

## 其他教學網址

[AJAX 筆記](https://medium.com/%E9%A6%AC%E6%A0%BC%E8%95%BE%E7%89%B9%E7%9A%84%E5%86%92%E9%9A%AA%E8%80%85%E6%97%A5%E8%AA%8C/js-ajax-%E7%AD%86%E8%A8%98-b9a57976fa60)