# 第三十八關：let 與 const 觀念複習

::: theorem 情境：
小杰為了想學好 let 與 const，所以到網路上找了很多題目，結果竟然一題都答不出來！快來幫幫小杰來回覆題目
:::

## 問題

請在 Slack 回覆以下的解答，以及解釋為什麼？
同時附上你找到的文章，條列在最下方

### 問題一

請問下面會出現的 console 是？

```
console.log(a); //ReferenceError
let a = 10;
```

### 問題二

以下是否會正常執行？若不會，會顯示什麼紅字錯誤？
```
let a = 1;
a = 3;
```

```
let b = 1;
let b = 2;
```

```
const c = 3;
c = 4
```

### 問題三：此為熱門面試題目(選答)

請問 var、let、const 的區別是？

## 附上您的心得文章

* [JS 筆記 - 認識 ES6](https://hsuchihting.github.io/javascript/20200713/2533085867/)
* [JS 筆記 - ES6 let 與 const 特性](https://hsuchihting.github.io/javascript/20200713/1088942586/)

::: tip 參考解答

問題一:
```
console.log(a); //ReferenceError
let a = 10;
```

問題二:
```
let a = 1;
a = 3; // 會
let b = 1;
let b = 2; // 不會，b is declared
const c = 3;
c = 4  // c 無法變更值
```

問題三:
```
var 會有 hoisting 的特性，作用域為 function 內，let、const 沒有 hoisting 特性，const 為常數，定義值後無法再變更值，let 則為一般變數，作用域為 scope 內
```
:::