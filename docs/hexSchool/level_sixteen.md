# 第十六關：forEach 與 HTML 字串累加

::: theorem 情境：
護理師邊看小杰的 Code 邊回覆：「嗯..你還算有點資質嘛。」

小杰：「謝謝護理師傳授招數，但下次可不可以早點幫我..」<br />
護理師：「天下沒白吃的午餐，願意給你提示就不錯了，還有，你這個 Code 還是有點問題。」<br />
護理師：「因為病人反應說，**他想要測試自己週一到週五的 BMI 指數，所以這介面需要紀錄五筆資料**，所以你要想一下怎麼做。」<br />
小杰：「有沒有提示啊... T_T，是說為什麼換我在寫這 BMI 計算機啊？」<br />
護理師：「那你到底想不想讓你師傅出院，你知道在醫院裡住一天要多少錢嗎？他多住一天，你的荷包就...」<br />
小杰：「好好！我做我做！但是直接做太困難了，我先試試看陣列寫法吧！」
:::

## 題目

小杰一時間還不知道怎麼寫，所以先寫了陣列 + forEach 的方式來累加 HTML 字串，再來顯示介面出來。

[範例程式碼](https://codepen.io/liao/pen/rNxmMGv?editors=1010)

請你依照這邏輯，試著改寫物件格式，呈現的格式如下程式碼。

設計好物件後，依序 push 五筆資料到陣列裡，最後整理完字串資料，再 innerHTML 到 ul 裡。

這次 HTML 與 CSS 面板都壞了，請改寫 JS 面板。

**<span style="color: red;">PS:請拿上面的 Codepen 改寫即可，不需拿前幾關的 code 來整合</span>**

```
<ul>
  <li>小杰的身高為 178 公分，體重是 70 公斤，BMI 數據為 20，狀態為正常</li>
  <li>小美的身高為 150 公分，體重是 200 公斤，BMI 數據為 38，狀態為超重</li>
</ul>
```

::: tip 參考解答：
``` html
<ul class="list"></ul>
```

``` js
var list = document.querySelector(".list");
var data = [];
var ulContent = "";

data.push(
  {
    name: "廖洧杰",
    height: 178,
    weight: 70,
    bmi: 22,
    status: "正常"
  },
  {
    name: "小乖",
    height: 120,
    weight: 70,
    bmi: 48,
    status: "重度肥胖"
  },
  {
    name: "小麗",
    height: 140,
    weight: 70,
    bmi: 35,
    status: "重度肥胖"
  },
  {
    name: "小新",
    height: 80,
    weight: 70,
    bmi: 109,
    status: "重度肥胖"
  },
  {
    name: "小華",
    height: 50,
    weight: 70,
    bmi: 280,
    status: "重度肥胖"
  }
);

data.forEach(item => {
  var content = `<li>${item.name}你的身高為 ${item.height} 公分，體重是 ${item.weight} 公斤，BMI 數據為 ${item.bmi}，狀態為${item.status}`;
  ulContent += content;
});

list.innerHTML = ulContent;
```
:::