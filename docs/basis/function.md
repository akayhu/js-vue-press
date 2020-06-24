# DOM 與 函式

## 何謂 DOM

文件物件模型 (Document Object Model，縮寫 DOM)

如圖：

<img src="/js-vue-press/image/1200px-DOM-model.svg.png" style="width: 80%;" />

當網頁在產生的時候，會先產生 `document` 的文件，<br />
然後再往下解析最根目錄的元素是 `<html>`，<br />
然後裡面有兩個元素是 `<head>` 與 `<body>`，<br />
然後再往下也有原素是 `<title>` 、 `<h1>` 、 `<a>` ，<br />
`h1` 與 `a` 裡面可以帶文字內容(Text)，<br />
也可以帶屬性 `href` (Attrible)

所以它會產生出類似一個**結構樹**出來，因為方便 js 可以選取到像是 `<h1>` 或是 `<a>` 的 html 標籤，或是方便 css **渲染**到對應標籤

方便 css **渲染**到對應標籤是什麼意思呢？如下圖：

``` html
<a href="https://www.youtube.com">Youtube</a>
```

``` css
a {
  color: red;
}
```

當瀏覽器把 html 畫面顯示完時，就會去檢查 css 裡面有沒有樣式是有對應到的標籤或是 class，若有，會在結構樹對應的標籤給畫出來，所以上面的例子會把 `Element` 的 `<a>` 標籤的文字變成紅色

所以網頁一定會產生 DOM，程式才方便選取到標籤

## 如何用 js 去抓到 DOM 標籤

上圖所示，最上面的結構叫 `document`，假設我要抓 document 裡面的 `<head>` 該如何抓呢？

寫法如下：

``` html
<head class="header">內容</head>
```

``` js
document.querySelector(".header").textContent = "我抓到 head 了";

// 選取該網頁文件，找到裡面的 .header，新增文字，賦予它叫做我抓到 head 了
// 也可解讀成
// 選取該網頁文件.找到裡面的(".header").新增文字 = 我抓到 head 了
```

中間需要有一個點(.)，代表要抓裡面的東西，裡面有一個功能叫 `querySelector`，我要選取它它叫 `.header`，選取到後在賦予它文字為`我抓到 head 了`
