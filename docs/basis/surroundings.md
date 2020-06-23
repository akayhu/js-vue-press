# 環境

## 前言

學 Javascript 跟學 CSS 完全是兩碼子事，Javascript 比較偏邏輯概念，人腦知道怎麼思考，我們要自己寫程式，寫的程式要讓電腦可以看得懂，需自己創意出開發流程

## 載入 Javascript 檔案

在 `<head></head>`，裡面寫入`<script src="檔案位置"></script>` 就可以引入<br />
假設檔案叫 `all.js`，則寫法如下：

``` html {7}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="all.js"></script>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

all.js 內容打上
``` js
alert("Hello World");
```

開啟網頁就會彈出 `Hello World` 視窗，有出現視就窗代表已載入 js 環境。

當然也可以直接寫在 Html 裡面，寫法如下：
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script>
    alert("Hello World");
  </script>
</head>
<body>
  
</body>
</html>
```

寫在 `<head>` 標籤裡面或是 `<body>` 標籤裡面都可以！

## Javascript 主要目的

1. 可以控制瀏覽器網頁內容
2. 可以透過 js，來去跟外部伺服器要資料，或者是更新資料