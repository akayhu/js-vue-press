# 第十六關：forEach 與 HTML 字串累加

## 題目

題目先寫了陣列 + forEach 的方式來累加 HTML 字串，再來顯示介面出來。[範例題目](https://codepen.io/liao/pen/rNxmMGv?editors=1010)

請你依照這邏輯，試著改寫物件格式，呈現的格式如下程式碼。

``` Html
<ul>
  <li>小杰的身高為 178 公分，體重是 70 公斤，BMI 數據為 20，狀態為正常</li>
  <li>小美的身高為 150 公分，體重是 200 公斤，BMI 數據為 38，狀態為超重</li>
</ul>
```

設計好物件後，依序 push 五筆資料到陣列裡，最後整理完字串資料，再 innerHTML 到 ul 裡。

這次 HTML 與 CSS 面板都壞了，請改寫 JS 面板。

**請複製這題題目即可，不需拿前幾關的 code 來整合**

後面幾關，我們再來逐步將第十五關的監聽事件來整合

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