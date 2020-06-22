# 第十關：函式參數設計

## 教學影片
[函式教學影片](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/%2F6zQ3SasRR2GR-F3FW8SYVw)

## 第一題 客戶詢價函式，來更多個客人也不怕

下面截圖，請改設計一個詢價用的函式，並新增三個參數，依序為客戶姓名、薯條數量，漢堡數量

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