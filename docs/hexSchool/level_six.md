# 第六關：邏輯運算子

美式餐廳的櫃檯收銀員，他的名字叫做小杰，雖然他不懂為什麼老闆不給他買一台收銀機，但還是繼續打開 Chrome console 幫店員們結帳。

但別忘了老闆總是有想不完的花招，希望公司賺更多的錢，於是他告訴小杰，店裡即將要有加入會員 VIP 的活動，於是要求他在活動前，在今天先把下面的教學連結先學會，明天正式釋出活動內容…等等，今天學完？？？小杰好可憐，快來幫幫小杰！

## 教學連結

* [MDN 官網教學](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E9%82%8F%E8%BC%AF%E9%81%8B%E7%AE%97%E5%AD%90)
* [JavaScript 基礎知識-邏輯運算子 &&，||](https://ithelp.ithome.com.tw/articles/10191343)

## 第一題 布林與比較運算子練習

成為 VIP 會員的條件，只要購買滿 200 元，就可無條件成為會員，Bob 買了 2 個漢堡，2 個 薯條，是否有滿足條件？

[複製題目](https://codepen.io/liao/pen/zYrvWeN)

<img src="https://i.imgur.com/a6AipOO.png" />

::: tip 答：
``` js
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;
var isVIP;

// 請透過比較運算子，將比較結果寫在 isVip 上
// 請利用 VIPTotal、hamburgerPrice、friesPrice 的變數進行比較
// isVIP 的型別必須為布林值 (true or false)

// 計算總消費額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

isVIP = consumptionTotal(2, 2) >= VIPTotal;

console.log("Bob 的 VIP 條件為" + isVIP); // false
```
:::

::: warning 說明：
計算的函示與五關一模一樣，只要把參數帶入購買的數量就好<br />
所以會變成 isVIP = 160 >= 200，160 是小於 200 不是大於，所以 isVIP = false (條件不成立)
:::

## 第二題 三心二意的老闆希望用邏輯運算子 &&

老闆發現大家都只買薯條衝 VIP 資格，導致大家都不買漢堡，老闆好生氣，他認為他的美味蟹堡是全美最好吃的，小杰也不知道他的自信從哪裡來的。

所以他跟小杰說，從今天起，VIP 條件必須同時符合以下兩點，才能成為 VIP 資格。

1. 一次消費滿 200 元
2. 一定要買 1 個漢堡

這時又來了兩位顧客，Mary 與 Mark，來看看他們有沒有符合條件吧！

[複製題目](https://codepen.io/liao/pen/wvMKmRZ)

<img src="https://i.imgur.com/gYYAIz8.png" />

::: tip 答：
``` js
// 此變數不可更改
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;

var markHamburgerNum = 2;
var markfriesNum = 4;
var markIsVIP;

// 如上面新增的變數，馬克買了 2 個漢堡，與 4 個薯條
// 請同時運用比較運算子與邏輯運算子，將比較結果寫在 markIsVIP 上
// markIsVIP 的型別必須為布林值 (true or false)

// 計算總消費額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

markIsVIP = 
  markHamburgerNum >= 1 &&
  consumptionTotal(markHamburgerNum, markfriesNum) >= VIPTotal;

console.log("mark 的 VIP 條件為" + markIsVIP); // true

var maryHamburgerNum = 0;
var maryfriesNum = 10;
var maryIsVIP;

// 如上面新增的變數，Mary 買了 0 個漢堡，與 10 個薯條
// 請同時運用比較運算子與邏輯運算子，將比較結果寫在 markIsVIP 上
// maryIsVIP 的型別必須為布林值 (true or false)

maryIsVIP =
  maryHamburgerNum >= 1 &&
  consumptionTotal(maryHamburgerNum, maryfriesNum) >= VIPTotal;

console.log("mary 的 VIP 條件為" + maryIsVIP); // false
```
:::

::: warning 說明：
1. 計算的函示與五關一模一樣，只要把參數帶入購買的數量就好<br />
所以會變成 markIsVIP = 2 >= 1 && (50 * 2 + 30 * 4) >= 200;<br />
故馬克買超過 1 個漢堡與消費滿 200，VIP 條件成立 true<br />
2. 因為上面已經有寫函示了所以可以共用，不用重複寫<br />
所以會變成 maryIsVIP = 0 >= 1 && (50 * 0 + 30 * 10) >= 200<br />
雖然消費金額有超過 200，但是低消要買 1 個漢堡 Mary 沒買，故 VIP 條件不成立 false
:::

## 第三題 Mary 很生氣，他覺得現在的 VIP 資格吃人夠夠，希望用 || 邏輯運算子

Mary 說：「老闆我好歹是忠實老客戶欸，我買了你八年的薯條，而且遠遠超過 200 元，竟然還不算我是 VIP，你有沒有搞錯！」

老闆怕了，他很擔心會上台灣的老天鵝娛樂被當作笑柄，所以他立馬將 VIP 條件改成，<b>只要符合以下任一點消費條件，就能成為 VIP 資格</b>。

1. 一次消費滿 200 元
2. 一定要買 1 個漢堡

我們再看看 Mary 有沒有符合條件吧！

[複製題目](https://codepen.io/liao/pen/GRopxPY)

<img src="https://i.imgur.com/xqK3dXz.png" />

::: tip 答：
``` js
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;

var maryHamburgerNum = 0;
var maryfriesNum = 10;
var maryIsVIP;

// 如上面新增的變數，Mary 買了 0 個漢堡，與 10 個薯條
// 請同時運用比較運算子與邏輯運算子，將比較結果寫在 markIsVIP 上
// maryIsVIP 的型別必須為布林值 (true or false)

// 計算總消費額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

maryIsVIP =
  maryHamburgerNum >= 1 ||
  consumptionTotal(maryHamburgerNum, maryfriesNum) >= VIPTotal;

console.log("mary 的 VIP 條件為" + maryIsVIP); // true
```
:::

::: warning 說明：
1. 只要有買 1 個漢堡或(||)是有消費 200 塊以上其中一個有符合條件就成立
2. 計算的函示與五關一模一樣，只要把參數帶入購買的數量就好<br />
所以會變成 maryIsVIP = 0 >= 1 || (50 * 0 + 30 * 10) >= 200<br />
消費金額有超過 200，雖然漢堡 Mary 沒買，但其中一個有符合條件就可以了，故 VIP 條件成立 true
:::