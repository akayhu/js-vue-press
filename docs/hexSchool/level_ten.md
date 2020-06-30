# 第十關：函式參數設計

::: theorem 情境：
隔日早晨，小杰前往老先生家裡的路上，心裡越想越不對。

為什麼老闆會准特休，放他去一個素未謀面的老先生家裡去特訓。早知道就不要跟老先生打賭，說什麼只要老闆允許請假，就答應特訓的請求！浪費了僅有的特休，小杰感到懊惱又無奈，只能安慰自己走一步算一步。

過沒半晌，小杰來到了老先生家裡，外牆上的招牌上寫著「**Java Script 補習班**」，等等..「Java Script」？為什麼中間會有空白，難不成我一直搞錯「JavaScript」的真正拼法..？


進入大廳有個圓形長桌，同時擺放了許多 Windows 老舊筆電，桌面上相當雜亂，有著刻意排出金字塔的玻璃能量飲料，而且還有各種明顯過時的書籍，例如「**Java 實戰 - 王者歸來**」、「**Java 之你不可不學的一百零八式**」，裡面還夾了些讓人匪夷所思的照片，例如下張。

<img src="https://i.imgur.com/8tioepp.png" />

最後小杰目光看到了一幅相框，是 2 人在餐廳的合照，手上共同拿著「鴻圖大展」的匾額。左邊明顯是年輕時的老先生，右邊的男性越看越眼熟，但卻一直無法聯想起來。

老先生：「少年，你來了，那我們就開始吧！」

小杰嚇了一跳，老先生不知何時已經坐在旁邊，並已經開啟電腦準備待續。

老先生：「我看過你第五關寫的 code 了，雖然比不上我當年，但還算差強人意！」<br />
小杰：「謝謝讚美...咦老先生為什麼你看過—」<br />
老先生：「叫我師父！特訓已經開始了，來吧！」
:::

## 教學影片
[函式教學影片](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/%2F6zQ3SasRR2GR-F3FW8SYVw)

## 第一題 客戶詢價函式，來更多個客人也不怕

觀看下面截圖，請改設計一個詢價用的函式，並新增三個參數，依序為客戶姓名、薯條數量，漢堡數量

同時來了三個客戶，請執行三次函式回報結果。

<img src="https://i.imgur.com/CmHOgT3.png" />

::: tip 參考解答：
``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var bobTotal; 

// 函式
function consumptionTotal(name, friesNumber, hamburgerNumber) {
  var total = (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber); // 消費金額
  console.log(`${name} 您好，您詢問的金額總計為 ${total} 元`);
}

consumptionTotal("Bob", 10, 10);
consumptionTotal("Coc", 50, 20);
consumptionTotal("Doc", 30, 30);

// 顯示結果：
// Bob 您好，您詢問的金額總計為 900 元
// Coc 您好，您詢問的金額總計為 3000 元
// Doc 您好，您詢問的金額總計為 2700 元
```
:::

::: warning 說明：
寫法沒有唯一，函式執行結果是正確的即可
:::

## 第二題 好多客戶都在問小杰，他們錢包剩下多少錢，小杰表示無言

下面截圖，請改設計一個查詢客戶錢包餘額用的函式，並新增四個參數，依序為客戶姓名、客戶錢包總額、薯條數量，漢堡數量。

同時來了三個客戶，請執行三次函式回報結果。

<img src="https://i.imgur.com/dHRMz5v.png" />

::: tip 參考解答：
``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var markWallet = 200;
var markTotal;

// 函式
function consumptionTotal(name, wallet, friesNumber, hamburgerNumber) {
  var spendTotal = (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber); // 消費錢
  markTotal = wallet - spendTotal; // 剩下的錢 = 皮包錢 - 消費錢
  console.log(`${name}買完東西後，錢包剩下 ${markTotal} 元`);
}

consumptionTotal("馬克", markWallet, 2, 1);
consumptionTotal("羊克", 5000, 50, 20);
consumptionTotal("猴克", 3000, 30, 30);

// 顯示結果：
// 馬克買完東西後，錢包剩下 70 元
// 羊克買完東西後，錢包剩下 2000 元
// 猴克買完東西後，錢包剩下 300 元
```
:::

::: warning 說明：
寫法沒有唯一，函式執行結果是正確的即可
:::

## 第三題 好多人都擁有九折優惠券

這一題，換您來設計函式與參數看看。

突然間同時來了三個客戶，請執行三次函式回報結果。

<img src="https://i.imgur.com/su5ZNi5.png" />

::: tip 參考解答：
``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var sale = 0.9;
var maryWallet = 5000;
var maryTotal;

// 函式
function consumptionTotal(name, wallet, friesNumber, hamburgerNumber) {
  var spendTotal = (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber); // 消費錢
  maryTotal = spendTotal * sale; // 剩下的錢 = 消費錢 * 9 折
  console.log(`${name}買完東西後，錢包剩下 ${maryTotal} 元`);
}

consumptionTotal("大雞", maryWallet, 10, 10);
consumptionTotal("中雞", maryWallet, 5, 5);
consumptionTotal("小雞", maryWallet, 5, 10);

// 顯示結果：
// 大雞買完東西後，錢包剩下 810 元
// 中雞買完東西後，錢包剩下 405 元
// 小雞買完東西後，錢包剩下 630 元
```
:::

::: warning 說明：
寫法沒有唯一，函式執行結果是正確的即可
:::