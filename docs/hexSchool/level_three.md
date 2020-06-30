---
tags: 
  - 型別
  - 變數型別
  - 弱型別
---

# 第三關：變數型別判斷與弱型別轉型

請觀看此[文章](https://ithelp.ithome.com.tw/articles/10190873)後，解答以下題目。

## 第一題

請依序告知以下 console.log 會顯示什麼值。

``` js
var a = 1;
console.log(typeof(a));

var b = "hello";
console.log(typeof(b));

var c = 1 + "hello";
console.log(typeof(c));

var d = 1 + "11";
console.log(d);
console.log(typeof(d));
```

::: tip 參考解答：
第一個 console.log 顯示為 number<br />
第二個 console.log 顯示為 string<br />
第三個 console.log 顯示為 string<br />
第四個 console.log 顯示為 111 (字串)<br />
第五個 console.log 顯示為 string
:::

::: warning 說明：
第三個為數字與字串相加，後面因為是字串，所以會把前面數字轉為字串做處理<br />
第四個原因同第三個，字串加字串顯示會是合併顯示，而不是相加，數字加數字才會顯示 12<br />
第五個原因同第四個，因為轉成字串處理了，所以型態是字串
:::

> 補充說明：<br />
> typeof() 運算子會回傳回一個字串值，回傳值代表的是此值的型別<br />
> 參考網址： [typeof](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof)

## 第二題

``` js
var a;
a = a + "hello";
console.log(a);
console.log(typeof(a));

var b = 3;
console.log(b * "hello");
```

::: tip 參考解答：
第一個 console.log 顯示為 undefinedhello<br />
第二個 console.log 顯示為 string<br />
第三個 console.log 顯示為 NaN
:::

::: warning 說明：
第一個 宣告了變數 a，但是 a 未賦予任何值，所以 a 值會是 undefined，然後字串 undefined 與 hello 合併，就會顯示 undefinedhello<br />
第三個 宣告了變數 b 賦予值為數字 3，但是 hello 是字串，數字無法與字串相乘，所以顯示 NaN
:::

> 補充說明：<br />
> NaN 全名為「Not a Number」，不是一個數字的意思

## 第三題

``` js
var a = 9;
console.log(a + 9);
console.log(a + '9');

var b = "9";
console.log(b * b);
console.log(typeof(b * b));
```

::: tip 參考解答：
第一個 console.log 顯示為 18 (數字)<br />
第二個 console.log 顯示為 99 (字串)<br />
第三個 console.log 顯示為 81 (數字)<br />
第四個 console.log 顯示為 number
:::

::: warning 說明：
第一個 console.log 宣告了變數 a 並賦予值為數字 9，9 + 9 = 18<br />
第二個 console.log 數字 9 加字串 9，原因跟第一題一樣，會把前面數字轉為字串做處理，所以會合併處理顯示 99<br />
第三個 console.log 宣告了變數 b 並與與值為字串 9，當遇到運算值符號會(+-*/)會讓字串轉為字元做運算(前提是字串內容是數字)，所以 9 * 9 = 81<br />
第四個 console.log 因第三個的關係，所以型態是 number
:::