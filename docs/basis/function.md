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

## 如何選取 DOM？

上圖所示，最上面的結構叫 `document`，假設我要抓 document 裡面的 `<body>` 該如何抓呢？

寫法如下：

``` html
<div id="idContent" class="content">內容</div>
```

``` js
// 選取網頁文件，裡面的 .content 的 DOM
document.querySelector(".content"); // 取 class
document.querySelector("#idContent"); // 取 id

// 修改文字節點
document.querySelector(".content").textContent = "hello";
document.querySelector("#idContent").textContent = "hello"

// 以下前面的 document.querySelector("選擇器") 都簡稱 element;
var element = document.querySelector(".element");

// 新增刪除切換 class 名稱
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');

// 增加屬性
element.setAttribute("alt", "這是一張圖片"); // 新增一個 alt 屬性

// 取得文字節點
var str = element.textContent;

// 取得 HTML 結構
var HTMLContent = element.innerHTML;

// 取得 input 裡面的 value
var str = element.value;

// 賦予值
element.textContent = "hello";
element.innerHTML = "<p>一個段落</p>";

// 變更 CSS 設計
element.style.background = "#000";
```

::: tip 提醒
value 裡面的內容是字串，要把它變成數字，請用 [parseInt()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 轉成數字型別
:::

## 函式 function

所謂函示就是可以處理很多指令的意思，像是要新增好多個變數去計算，就可以用函示去解決

::: warning 名言：
程式語言被發明，為了解決人工重複性的工作
:::

一般寫法

``` js
// 命名一個函式名稱，叫做 sum
// 裡面有一個參數(arguments)，叫做 number
function sum(number) {
  return number + number;
}

sum(10); // 10 + 10 = 20
sum(20); // 20 + 20 = 40
sum(30); // 30 + 30 = 60
```

ES6 寫法

``` js
var sum = number => {
  return number + number;
};

sum(10); // 10 + 10 = 20
sum(20); // 20 + 20 = 40
sum(30); // 30 + 30 = 60
```

也可以不用下參數，下指令，寫法如下：

``` js
// 命名一個函式名稱，叫做 sum
function sum() {
  console.log("沒有參數");
}

sum(); // 顯示 沒有參數
```

ES6 寫法

``` js
var sum = () => {
  console.log("沒有參數");
};

sum(); // 顯示 沒有參數
```

## 參數

哪些內容是會變來變去的，內容會變的就用參數

``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var bobTotal;

function sum(myName, friesNum, hamburgerNum) {
  bobTotal = friesNum * friesPrice + hamburgerNum + friesPrice;
  return `${myName} 花了 ${bobTotal} 元`;
}

sum("Bob", 4, 5); // 顯示 Bob 花了 205 元
```
## 練習題目

[第五關：變數實作情境題](/hexSchool/level_fives.html)<br />
[第六關：邏輯運算子](/hexSchool/level_six.html)<br />
[第七關：if](/hexSchool/level_seven.html)