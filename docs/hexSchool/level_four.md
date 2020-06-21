# 第四關：比較運算子

> 請依序告知以下 console.log 會顯示什麼值，若不知道答案，可將 code 貼在 chrome console 來顯示後，再回頭補知識點。

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

> 補充<br />
> (f != e) 裡面的 != 是不等於的意思，所以這個判斷式的問法是『 f 是不是不等於 e 』