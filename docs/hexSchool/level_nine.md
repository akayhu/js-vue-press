# 第九關：觀念總整理

請回覆以下的 console.log 內容

## 第一題 變數型別之呼吸

``` js
var a = 1;
a += 1;
a += 5;
var b = 5;
console.log(a + b);

var c = 3;
var d = "hello";
console.log(c * d);

var e = 8 + 2 * "9";
console.log(e);

var f = 1;
var g = "2";
var h = 3;
console.log(typeof(f + g + h));
```

::: tip 參考解答：
1. console.log(a + b) 顯示為 12
2. console.log(c * d) 顯示為 NaN
3. console.log(e) 顯示為 26
4. console.log(typeof(f + g + h)) 顯示為 string
:::

::: warning 說明：
1. a = 7, b = 5，a + b = 12
2. d 不是數字，是字串，所以會噴 NaN
3. 乘法在計算時某一個值非數字時，會以 Number() 將其轉換為數值再進行計算，<br />
   故為 e = 8 + 2 * 9，先乘除後加減，所以是 26<br />
4. 相加時其中一方是字串，另一方會被自動轉型為字串後接在一起，故為 string
:::

## 第二題 運算子之呼吸

``` js
var total = 200;
var isVip = true;
console.log(total >= 200 && isVip);

var a = true;
var b = false;
console.log(a && b);
console.log(a || b);

var c = 10;
var d = 20;
var e = 30;
console.log(c == 10 && d >= 5 && e !== 20);
console.log(c == 10 || d >= 5 || e !== 20);
console.log(c == 5 || d >= 40 || e !== 30);
```

::: tip 參考解答：
1. console.log(total >= 200 && isVip) 顯示為 true
2. console.log(a && b) 顯示為 false
3. console.log(a || b) 顯示為 true
4. console.log(c == 10 && d >= 5 && e !== 20) 顯示為 true
5. console.log(c == 10 || d >= 5 || e !== 20) 顯示為 true
6. console.log(c == 5 || d >= 40 || e !== 30) 顯示為 false
:::

::: warning 說明：
1. 200 >= 200 成立，isVip = true 是 isVip 成立的意思，(true && true) 兩個判斷式都是 true，故顯示為 true
2. b = false 是 b 不成立的意思，(true && false) 只要有一個是 false 就會是 false，故顯示為 false
3. (true || false) 只要其中一個成立就是 true，故顯示為 true
4. (c == 10 && d >= 5 && e !== 20) 對應為 (true && true && true)，故顯示為 true
5. (c == 10 || d >= 5 || e !== 20) 對應為 (true || true || true)，故顯示為 true
6. (c == 5 || d >= 40 || e !== 30) 對應為 (false || false || false)，故顯示為 false
:::

## 第三題 運算子之呼吸

如果你很閒，試試看改一下布林值。

``` js
var maryIsVIP = true;

if (maryIsVIP) {
  console.log("哇貴婦餒！");
} else {
  console.log("你一定搞錯了，叫你們店長出來！");
}

var momSwim = false;
var girlfriendSwim = true;

if (momSwim && girlfriendSwim) {
  console.log("都不救，因為他們都會游泳");
} else {
  console.log("小杰大喊：「你們誰不會游泳啊？？」");

  if (girlfriendSwim) {
    console.log("那你自己游上來！");
  } else {
    console.log("我先問我阿母會不會游泳！");
  }

  if (momSwim) {
    console.log("媽妳先自己游上來！");
  } else {
    console.log("媽我去救你！");
  }
}
```

::: tip 參考解答：
判斷依順序顯示為 `哇貴婦餒！` -> `小杰大喊：「你們誰不會游泳啊？？」` -> `那你自己游上來！` -> `媽我去救你！`
:::

::: warning 說明：
1. maryIsVIP = true，所以第一個條件式 if (maryIsVIP)成立，執行 console.log("哇貴婦餒！");
2. momSwim = false，girlfriendSwim = true，if (momSwim && girlfriendSwim) 不成立，執行 else 後面的程式 console.log("小杰大喊：「你們誰不會游泳啊？？」");
3. 程式接著繼續往下跑，if (girlfriendSwim) 成立，執行 console.log("那你自己游上來！");
4. 程式接著繼續往下跑，if (momSwim) 不成立，執行 console.log("媽我去救你！");
:::