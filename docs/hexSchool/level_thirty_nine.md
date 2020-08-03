# 第三十九關：箭頭函式(arrow function)

::: theorem 情境：
技術主管看到小杰[第 18 關](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/https%3A%2F%2Fhackmd.io%2FjXltRFJ4SEufv6LyFZZ4zQ)的 Code 後，覺得非常吐血。

他說現在公司都用所謂的**箭頭函式(arrow function)**，所以希望小杰也將 18 關的程式碼的 forEach 改為箭頭函式寫法，但小杰從來沒寫過什麼箭頭寫法，一起來幫幫小杰尋找資源吧！
:::

## 問題

1. 如果你是初學者，請回傳第 18 關的 forEach ，改用箭頭函式的寫法來撰寫
2. 假使你已經會箭頭函式，請分享 arrow function 會如何影響到 `this`

## 文章分享

請將你紀錄的 HackMD 筆記，以及你找的技術文章分享到此，讓其他參賽者有更多資源可以參考

* [JavaScript ES6 Arrow Functions 箭頭函數](https://www.fooish.com/javascript/ES6/arrow-functions.html)
* [鐵人賽：箭頭函式 (Arrow functions)](https://wcc723.github.io/javascript/2017/12/21/javascript-es6-arrow-function/)
* [this是甚麼?](https://grantliblog.wordpress.com/2020/01/23/this-%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F-%E8%AB%87%E8%AB%87javascript%E7%9A%84this/)
* [談談 JavaScript 中的 "this" 和它的問題](https://pjchender.blogspot.com/2016/03/javascriptthisbug.html)
* [ JavaScript ES6 中的箭頭函數（arrow function）及對 this 的影響](https://pjchender.blogspot.com/2017/01/es6-arrow-function.html)
* [鐵人賽：JavaScript 的 this 到底是誰？](https://wcc723.github.io/javascript/2017/12/12/javascript-this/)
* [重新認識 JavaScript: Day 20 What's "THIS" in JavaScript (鐵人精華版)](https://ithelp.ithome.com.tw/articles/10193193)
* [Function 內的 this 到底是哪個 this](https://www.spreered.com/arrow-function-this/)

::: tip 參考解答
``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
  <title>Document</title>
</head>

<body>
  <ul class="list2">
    <li class="list-card">
      <h2></h2>
      <p></p>
    </li>
    <li class="list-card">
      <h2></h2>
      <p></p>
    </li>
  </ul>
</body>

</html>
```

``` css
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: "Lato", "Noto Sans TC", sans-serif;
}
h2,
p {
  line-height: 2em;
  letter-spacing: 0.1em;
}
.list2 {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-card {
  background: orangered;
  width: 300px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
}

.red {
  color: black;
  font-weight: bold;
  font-size: 20px;
}
```

``` js
let list2 = document.querySelector(".list2");
let data = [];
data.push({
  name: "廖洧杰",
  height: 178,
  weight: 70,
  BMI: 20.09,
  status: "體重正常"
});
data.push({
  name: "小乖",
  height: 120,
  weight: 46,
  BMI: 31.94,
  status: "重度肥胖"
});
data.push({
  name: "小麗",
  height: 140,
  weight: 50,
  BMI: 25.15,
  status: "體重過重"
});
data.push({
  name: "小新",
  height: 175,
  weight: 56,
  BMI: 18.29,
  status: "體重過輕"
});
data.push({
  name: "小華",
  height: 173,
  weight: 69,
  BMI: 23.5,
  status: "體重正常"
});

var str = "";
// data.forEach(function(item))
// arrow function 限制
// arrow function
data.forEach((item) => {
  let content = `<li class="list-card">
<h2>${item.name}</h2>
<p>你的身高是 ${item.height} 公分</p>
<p>你的體重是 ${item.weight} 公斤</p>
<p>BMI為 ${item.BMI}</p>
<p>狀態為 <span class = red>${item.status}</span></p>
</li>`;

  str += content;
});

list2.innerHTML = str;
```
:::