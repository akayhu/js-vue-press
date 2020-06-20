# 第一關：JS 環境與變數環境

## 第一題

``` js
// 1.產生 console.log 從上到下的值為？
// 2.出現幾個變數、型別、記憶體物件?
var a;
a = 1;
a = "hello";
console.log(a);
```

::: tip 答：
1. console.log(a) 印出來的值會是 hello
2. 1個變數、2個型別、3個記憶體物件
:::

::: warning 說明：
1. 執行時從上到下為 undefined -> 1 -> "hello"，最後印出來的是 hello
2. 1 個變數為 a<br />
   2 個型別分別為 number(字元、數字)、string(字串)<br />
   3 個記憶體物件為：<br />
      `undefined`  // 宣告變數 var a;<br />
      `1`  // a 賦予值為 1<br />
      `"hello";` // a 賦予值為 "hello"
:::

## 第二題

``` js
// 1.產生 console.log 從上到下的值為？
// 2.出現幾個變數、型別、記憶體物件?
var b = 3 ;
var c = 4;
console.log(d);
var d = b + c;
console.log(d);
```

::: tip 答：
1. 第 1 個 console.log(d) 印出來的值會是 undefined<br />
   第 2 個 console.log(d) 印出來的值會是 7
2. 3 個變數、1 個型別、6 個記憶體物件
:::

::: warning 說明：
1. 執行時從上到下，因為印出第一個 console.log 時，還沒有宣告到 d 變數，所以第一個 console.log 印出來會是 undefined<br />
   接著往下跑因為有宣告 d 變數且 b 與 c 相加，故 console.log 印出來值為 7
2. 3 個變數分別為 b、c、d<br />
   1 個型別分別為 number(字元、數字)<br />
   6 個記憶體物件為：<br />
      `undefined`  // 在瀏覽器編譯時，宣告變數都會往上搬不會賦予值，會變成只宣告變數 var b;<br />
      `undefined`  // 同上，會變成 var c;<br />
      `undefined`  // 同上，會變成 var d;<br />
      `3`  // b 賦予值為 3<br />
      `4` // c 賦予值為 4<br />
      `7` // d 賦予值為 7
:::

## 第三題

``` js
// 1.產生 console.log 從上到下的值為？
// 2.出現幾個變數、型別、記憶體物件?
console.log(e);
var e;
e = 5;
e = "hello";
e = true;
console.log(e);
```

::: tip 答：
1. 第 1 個 console.log(e) 印出來的值會是 undefined<br />
   第 2 個 console.log(e) 印出來的值會是 true
2. 1 個變數、3 個型別、4 個記憶體物件
:::

::: warning 說明：
1. 執行時從上到下，因為印出第一個 console.log 時，還沒有宣告到 e 變數，所以第一個 console.log 印出來會是 undefined<br />
   接著往下跑因為有宣告 e 變數且賦予值從上到下為 5 -> "hello" -> true，故 console.log 印出來值為 true
2. 1 個變數為 e<br />
   3 個型別分別為 number(字元、數字)、string(字串)、boolean(布林)<br />
   4 個記憶體物件為：<br />
      `undefined`  // 宣告變數 var e;<br />
      `5`  // e 賦予值為 5<br />
      `"hello"` // e 賦予值為 "hello"<br />
      `true` // e 賦予值為 true
:::