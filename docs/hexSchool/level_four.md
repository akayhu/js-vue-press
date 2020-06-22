# 第四關：比較運算子

請依序告知以下 console.log 會顯示什麼值，若不知道答案，可將 code 貼在 chrome console 來顯示後，再回頭補知識點。

## 第一題
``` js
var a = 2;
var b = 1;
console.log(a > 0); 
console.log((a + b) > 1);

var c = 4;
var d = 3;
console.log(c == d);

var e = 8;
var f = 5;
console.log(f >= e);
console.log(f != e);
console.log(f == e);
```

::: tip 答：
第一個 console.log 為 true<br />
第二個 console.log 為 true<br />
第三個 console.log 為 false<br />
第四個 console.log 為 false<br />
第五個 console.log 為 true<br />
第六個 console.log 為 false<br />
:::

::: warning 說明：
第一個 a = 2，2 > 0，所以條件式成立為 true<br />
第二個 a = 2，b = 1，(2 + 1) > 1，所以條件式成立為 true<br />
第三個 c = 4，d = 3，4 不等於 3，所以條件式不成立為 false<br />
第四個 e = 8，f = 5，5 是小於 8，所以條件式不成立為 false<br />
第五個 f = 5，e = 8，此問題是問 f 是不是不等於 e，是不等於沒錯，所以條件式成立為 true<br />
第六個 f = 5，e = 8，5 不等於 8，所以條件式不成立為 false
:::

> 補充說明：<br />
> (f != e) 裡面的 != 是不等於的意思，所以這個判斷式的問法是『 f 是不是不等於 e 』<br />
> 另一個記法，等號是等於(=)，前面加上驚嘆號就是不等於的意思(!=)<br />
> 註：驚嘆號後面只有一個等號(!=)，不會檢查型別

## 第二題 搭配型別自動轉型

``` js
var a = 3; 
var b = "3";
console.log(a == 1);
console.log(a == b);

var c = 2;
var d = "5";
// 請解釋為什麼
console.log((c * d) >= 5);
```

::: tip 答：
第一個 console.log 為 true<br />
第二個 console.log 為 true<br />
第三個 console.log 為 true
:::

::: warning 說明：
第二個 a 為數字 1，b 為字串 1，在雙等號的判斷裡，型別不會去判斷，所以條件式成立為 true<br />
第三個 js 會先把字串 3 自動轉型為數字，所以 (2 * 3) = 6，6 >= 5，所以條件式成立為 true
:::

> 補充說明：<br />
> 雙等號 == 判斷是不會檢查型別，所以 1 == "1" 會成立為 true<br />
> 若是三等號 === 判斷則會檢查型別，所以 1 === "1" 不會成立，因為數字 1 不等於字串 1，所以不成立為 false

## 第三題 嚴謹模式

``` js
var a = 1;
var b = "1";
console.log(a == 1);
console.log(a == b);
console.log(a === b);
console.log(a !== b);
```

::: tip 答：
第一個 console.log 為 true<br />
第二個 console.log 為 true<br />
第三個 console.log 為 false<br />
第四個 console.log 為 true
:::

::: warning 說明：
第一個到第三個，請看第二題說明與第二題補充說明<br />
第四個如同第一題補充說明一樣，問的是 a 是不是不等於 b，是不等於沒錯，所以條件式成立為 true
:::

> 補充說明：<br />
> (a !== b) 裡面的 !== 是不等於的意思，所以這個判斷式的問法是『 f 是不是不等於 e 』<br />
> 與第一題補充說明很像，但驚嘆號後面有兩個等號(!==)，所以型別會一起檢查是不是一樣，一樣才會成立，不一樣不會成立