# 第七關：if

昨天老闆說他收到客訴，客戶們都一致反應小杰的態度不好，這讓小杰感到黑人問號。

後來發現的原因是，在之前 VIP 活動，小杰 都是這樣回覆客戶

`console.log("Bob 的 VIP 條件為 true")`

客戶A：「true 什麼鬼…可以說中文嗎？」
客戶B：「是瞧不起我嗎？老闆我好歹跟你有五年交情，我兒子都來你這邊吃飯欸！」

於是老闆斥責小杰，要求他講中文，於是給了他以下資源，要他好好學 if 這個工具。

## 教學連結

* [重新認識 JavaScript: Day 09 流程判斷與迴圈](https://ithelp.ithome.com.tw/articles/10191453)
* [菜鳥教學 - if else(用 Chrome 翻譯繁體)](https://www.runoob.com/js/js-if-else.html)
* [JS 判斷筆記](https://medium.com/%E9%A6%AC%E6%A0%BC%E8%95%BE%E7%89%B9%E7%9A%84%E5%86%92%E9%9A%AA%E8%80%85%E6%97%A5%E8%AA%8C/js-%E5%88%A4%E6%96%B7%E7%AD%86%E8%A8%98-%E9%81%8B%E7%AE%97%E5%AD%90-if-switch-a9f5e535835b)
* [if 簡報教學](https://courses.hexschool.com/courses/670042/lectures/11952274)
* [if 程式碼教學](https://courses.hexschool.com/courses/670042/lectures/11952275)
* [else if 簡報教學](https://courses.hexschool.com/courses/670042/lectures/11952278)
* [else if 程式碼教學](https://courses.hexschool.com/courses/670042/lectures/11952282)

## 第一題 if 的練習

老闆說現在要來驗收 if 成果，
成為 VIP 會員的條件，只要購買滿 200 元，
現在 會員 A 購買了 350 元，請用 if 判斷是否要給他 VIP 卡。

``` js
var VIPTotal = 200;
var memberPrice = 350;

// 請透過 if 來設計回覆，如果對方滿足門檻
// 就回覆 console.log("您好，您有達到 VIP 門檻。這裡給您 VIP 會員卡(遞上")
```

::: tip 答：
``` js
var VIPTotal = 200;
var memberPrice = 350;

if (memberPrice >= VIPTotal) {
  console.log("您好，您有達到 VIP 門檻。這裡給您 VIP 會員卡(遞上");
}
```
:::

## 第二題 if else 的練習

又有人來申請 VIP 活動了！
成為 VIP 會員的條件，只要購買滿 200 元，就可無條件成為會員，Mark 買了 2 個漢堡，2 個 薯條，是否有滿足條件？

這次要記得用 if，以及注意你的語氣啊~ (小杰覺得人生好難

``` js
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;

// 請透過 if else 來去設計對方是否有達到條件，有或沒有都需要回覆對方
// 如果有，請顯示 console.log("尊敬的客戶您好，您有達到 VIP 條件")
// 如果沒有達到條件，便用 else 顯示 console.log("尊敬的客戶您好，您還差 xx 元，才有符合 VIP 條件哦~")
```

::: tip 答：
``` js
var VIPTotal = 200;
var hamburgerPrice = 50;
var friesPrice = 30;

// 計算總消費額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

var buyTotal = consumptionTotal(2, 2);

if (buyTotal >= VIPTotal) {
  console.log("尊敬的客戶您好，您有達到 VIP 條件");
} else {
  console.log("尊敬的客戶您好，您還差 " + (VIPTotal - buyTotal) + " 元，才有符合 VIP 條件哦~");
}
```
:::

::: warning 說明：
1. 計算的函示與五關一模一樣，只要把參數帶入購買的數量就好<br />
2. 宣告一個變數來紀錄 Mark 購買的金額 var buyTotal = consumptionTotal(2, 2);<br />
3. 舊`模版字符串`寫法:<br />
   console.log("尊敬的客戶您好，您還差 " + (VIPTotal - buyTotal) + " 元，才有符合 VIP 條件哦~");<br />
   ES6`模版字符串`寫法:<br />
   console.log("尊敬的客戶您好，您還差 ${VIPTotal - buyTotal} 元，才有符合 VIP 條件哦~");<br />
:::

> 補充說明：<br />
> [模版字符串教學](https://pjchender.blogspot.com/2017/01/javascript-es6-template-literalstagged.html)

## 第三題 if、else if、else 練習

工作一整天，小杰累到懷疑人生，累歸累，但還是得吃東西，小杰吃東西有自己的 SOP，來幫幫小杰看看他該吃什麼食物。

小杰都用飢餓度 1~100 來計算，100 就是代表最飢餓，數值皆為整數，不會有小數點

小杰飢餓度 0~20 時，都吃飯糰

小杰飢餓度在 21~40 時，都吃肉燥飯+貢丸湯

小杰飢餓度在 41~60 時，都吃麥當勞

小杰飢餓度在 61~100 時，都吃 99 元火鍋吃到飽

今天小杰的飢餓度是 53，請引導小杰去指定地點用餐

``` js
var hungryNum = 53;

if(條件式){
  console.log();
}else if{
  console.log();
}

// 請用 if、else if 去判斷主人公該吃什麼
// 各區塊回覆內容請顯示 console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃麥當勞")
```

::: tip 答：
``` js
var hungryNum = 53;

if (hungryNum > 60) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃 99 元火鍋吃到飽`);
} else if (hungryNum > 40) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃麥當勞`);
} else if (hungryNum > 20) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃肉燥飯+貢丸湯`);
} else if (hungryNum >= 0) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃飯糰`);
}
```
:::

::: warning 說明：
寫法可從`大判斷到小`或`小判斷到大`，本題解答用大判斷到小，若是用小開始判斷為：
``` js
var hungryNum = 53;

if (hungryNum <= 20) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃飯糰`);
} else if (hungryNum <= 40) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃肉燥飯+貢丸湯`);
} else if (hungryNum <= 60) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃麥當勞`);
} else if (hungryNum <= 100) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃 99 元火鍋吃到飽`);
}
```
:::

::: danger 注意：
若判斷式有順序性的判斷，最好是照順序判斷，因為程式是從最上面開始判斷到最下面的，如果沒照順序判斷有可能會出錯<br />
舉例：<br />
``` js
var hungryNum = 53;

if (hungryNum <= 20) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃飯糰`);
} else if (hungryNum <= 100) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃 99 元火鍋吃到飽`);
} else if (hungryNum <= 40) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃肉燥飯+貢丸湯`);
} else if (hungryNum <= 60) {
  console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃麥當勞`);
}

```
假設順序沒照順序，最後結果會是第 2 項成立顯示，因為 53 <= 100<br />
會顯示 console.log(`主人公因為飢餓度在${hungryNum}，所以他決定去吃 99 元火鍋吃到飽`);
:::