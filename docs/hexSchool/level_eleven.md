# 第十一關：函式參數再練習

## 第一題 老闆想要隨時扣你的薪水

老闆：「今天是發薪日，先發給你薪資 23500 元(遞給小杰」<br />
老闆：「以下三步驟動作請寫成程式」<br />
老闆：「步驟一：昨天你上廁所太久了，我要扣你 1000 元」<br />
老闆：「步驟二：小黑說不喜歡你煮的狗食，我要再扣你 3500 元 (再次取走」<br />
老闆：「步驟三：我今天心情不太好，扣個 500 元意思一下」<br />
小杰：「屁啦！心情不太好關我啥事！」<br />
老闆：「這不是重點，快點算！將之前的寫法換成函式，並增加一個參數，讓我方便何時扣你多少都沒問題」<br />
老闆：「最後你寫的函式，要執行三次，每次都要回報你的總薪水剩下多少。」

[複製題目](https://codepen.io/liao/pen/dyGGxMJ)

<img src="https://i.imgur.com/LwAK0KL.png" />

::: tip 參考解答：
``` js
var salary = 23500;

// 請依照上面的武功秘笈 Codepen，依序實現兩步驟，算出小杰被扣了多少錢

function payCut(money) {
  salary -= money;
  console.log("小杰目前還剩下" + salary + "元");
}

payCut(1000); // 小杰目前還剩下22500元
payCut(3500); // 小杰目前還剩下19000元
payCut(500); // 小杰目前還剩下18500元
```
:::

::: warning 說明：
基本的減法運算式
:::

## 第二題 if + 指派運算子

老闆：「好了，現在我要告訴你贈品條件！」<br />

* 目前小杰手上有 3 個贈品
* 消費滿 100 元就送對方贈品

<b>下圖為第八關截圖，請依照以下邏輯進行改寫：</b><br />

現在來了三個客人，並依序有消費，A顧客消費 150、B 顧客消費 99、C 顧客消費 110。<br />
請設計一個函式，裡面代入一個參數為顧客消費金額，確認該客戶是否符合贈品條件，若符合就讓 `giftNum` 變數減少數量。<br />
並依序執行三次函式，每次函式皆會 return 目前贈品數量剩下多少。

[複製題目](https://codepen.io/liao/pen/KKVVOMK)

<img src="https://i.imgur.com/8Y4pkef.png" />

::: tip 參考解答：
``` js
var giftNum = 3;     // 贈品數量
var customerA = 150; // 顧客 A 消費金額
var customerB = 99;  // 顧客 B 消費金額
var customerC = 110; // 顧客 C 消費金額

function checkConsumption(money) {
  if (money >= 100 && giftNum > 0) {
    giftNum -= 1;
  }
  console.log("目前贈品剩下" + giftNum + "個");
}

checkConsumption(customerA); // 目前贈品剩下2個
checkConsumption(customerB); // 目前贈品剩下2個 (消費未達到 100)
checkConsumption(customerC); // 目前贈品剩下1個
```
:::

## 第三題 if + 指派運算子

老闆：「我現在補齊給你總計 200 個贈品！」<br />
老闆：「然後我覺得現在贈品門檻太高了，我決定大放送，<b>只要滿 50 元就送一個！以此類推，他買 500 元就送 10 個贈品！</b>」<br />
小杰：「老闆你竟然利用我的特休，我跟你沒完啦。」<br />
老闆：「別廢話，客人來了快點！他買完後告訴我贈品還夠不夠！」<br />

<b>下圖為第八關截圖，giftNum 已改為 200 份，請依照以下邏輯進行改寫：</b><br />

1. 請用函式改寫，同時來了三組客人，請用你寫的函式連續執行三次，來幫助顧客是否有符合贈品條件。<br />
2. 另外每次執行函式時，都必須告訴老闆一次目前贈品數量。<br />

第一組客人：Mary 買了 10 份薯條，10 份漢堡<br />
第二組客人：Bob 買了 1 份薯條<br />
第三組客人：Tim 買了 20 份薯條，15 份漢堡

[複製題目](https://codepen.io/liao/pen/rNxxXMM)

<img src="https://i.imgur.com/76390tl.png" >

::: tip 參考解答：
``` js
var giftNum = 200; // 贈品數量
var friesPrice = 30; // 薯條單價
var hamburgerPrice = 50; // 漢堡單價

// 計算總消費額函式
function consumptionTotal(name, friesNumber, hamburgerNumber) {
  var total = (friesPrice * friesNumber) + (hamburgerPrice * hamburgerNumber);
  giftNum = giftNum - Math.floor(total / 50); // 消費 50 送一個

  if (giftNum <= 0) {
    console.log("老闆贈品賣光啦~");
  } else {
    console.log("老闆！贈品還夠！剩下" + giftNum + "個~");
  }
}

consumptionTotal("Mary", 10, 10); // 老闆！贈品還夠！剩下184個~
consumptionTotal("Bob", 1, 0); // 老闆！贈品還夠！剩下184個~ (消費未滿 50 元，所以贈品沒變)
consumptionTotal("Tim", 20, 15); // 老闆！贈品還夠！剩下157個~
```
:::

::: warning 說明：
Math.floor() 函式會回傳小於等於所給數字的最大整數。
[參考教學網址](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
:::