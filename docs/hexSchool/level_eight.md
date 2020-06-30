# 第八關：if 與指派運算子

::: theorem 情境：
老闆：「我現在決定要送客戶贈品，你現在立馬新增一個贈品變數到 Chrome console，紀錄目前只剩下 3 個贈品名額，以免你忘記！」<br />
小杰：「蛤？？太少了吧！」<br />
老闆：「你別管那麼多，少了我會再補給你！」<br />
小杰：「但是我只會針對變數賦予值進去，要怎麼把既有變數來做加減，再重新賦予啊？」<br />
老闆：「我早知道你會問這問題，這本[武功秘笈](https://codepen.io/liao/pen/QWyyMRG?editors=0011)拿去看下！(遞上」
:::

## 教學文件

* [武功秘笈](https://codepen.io/liao/pen/QWyyMRG?editors=0011)
* [MDN 指派運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%B3%A6%E5%80%BC%E9%81%8B%E7%AE%97%E5%AD%90)
* [重新認識 JavaScript: Day 08 Boolean 的真假判斷](https://ithelp.ithome.com.tw/articles/10191343)

## 第一題 老闆考考你指派運算子

老闆：「我其實很懷疑你是不是真的會了，我考考你！」<br />
老闆：「剛好今天是發薪日，先發給你薪資 23500 元(遞給小杰」<br />
小杰：「謝謝腦闆，但你怎麼把我的薪資告訴大家了…」<br />
老闆：「這不是重點，以下兩步驟動作請寫成程式」<br />
**老闆：「步驟一：因為你遲到一次，我要扣你 1000 元(取走小杰手上的 1000 元」**<br />
**老闆：「步驟二：然後你又偷吃 Pizza，我要再扣你 2500 元 (再次取走」**<br />
小杰：「不是啊！那明明是小黑吃…」<br />
老闆：「這不是重點，快點算！算出你還剩下多少錢！」

[複製題目](https://codepen.io/liao/pen/dyGGxMJ)

<img src="https://i.imgur.com/LwAK0KL.png" />

::: tip 參考解答：
``` js
var salary = 23500;

salary -= 1000;
salary -= 2500;

console.log("小杰目前還剩下" + salary + "元"); // 20000 元
```
:::

::: warning 說明：
salary -= 1000;<br />
寫法也等於<br />
salary = salary - 1000;
:::

## 第二題 if + 指派運算子

老闆：「好了，現在我要告訴你贈品條件！」
* 目前小杰手上有 3 個贈品
* 消費滿 100 元就送對方贈品

而現在來了兩個客人，並依序有消費，請問現在他還剩下多少個贈品？

[複製題目](https://codepen.io/liao/pen/KKVVOMK)

<img src="https://i.imgur.com/8Y4pkef.png" />

::: tip 參考解答：
``` js
var giftNum = 3;     // 贈品數量
var customerA = 150; // 顧客 A 消費金額
var customerB = 99;  // 顧客 B 消費金額

if (customerA >= 100) {
  giftNum -= 1;
}

if(customerB >= 100) {
  giftNum -= 1;
}

console.log("目前贈品剩下" + giftNum + "個"); // 剩 2 個
```
:::

::: warning 說明：
因為只有顧客 A (customerA)消費滿 100，所以只贈送 1 個贈品，故剩下 2 個
:::

## 第三題 if + 指派運算子

老闆：「我現在補齊給你總計 50 個贈品！」<br />
老闆：「然後我覺得現在贈品門檻太高了，我決定大放送，**只要滿 50 元就送一個！以此類推，他買 500 元就送 10 個贈品！**」<br />
小杰：「老闆你今天這麼慷慨，那我的薪..」<br />
老闆：「別廢話，客人來了快點！他買完後告訴我贈品還夠不夠！」

[複製題目](https://codepen.io/liao/pen/rNxxXMM)

<img src="https://i.imgur.com/SjYPwbj.png" />

::: tip 參考解答：
``` js
var giftNum = 50; // 贈品數量
var friesPrice = 30; // 薯條單價
var hamburgerPrice = 50; // 漢堡單價

// 以下是題目
// mary 買了 10 份薯條，10 份漢堡
// 請計算完贈品規則後，善用指派運算子去計算目前剩下的贈品有幾個
// 並用下面的 if 回報給老闆

// 計算總消費額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

var maryGift = consumptionTotal(10, 10) / 50; // 宣告 maryGift 取得送了多少贈品
giftNum -= maryGift;

if (giftNum > 0) {
  console.log("老闆！贈品還夠！剩下" + giftNum + "個~"); // 剩 34 個
} else {
  console.log("老闆贈品賣光啦~")
}
```
:::

::: warning 說明：
1. 計算的函示與五關一模一樣，只要把參數帶入購買的數量就好<br />
2. 得知消費後除 50 (var maryGift = consumptionTotal(10, 10) / 50)，可得到要送消費多少送幾個贈品<br />
3. 在讓原本的贈品數減掉送的贈品(giftNum -= maryGift)，所以得知剩下的贈品 34 個
:::