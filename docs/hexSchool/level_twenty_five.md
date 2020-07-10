# 第二十五關：資料格式處理，forEach + 陣列處理

::: theorem 情境：
黑道大哥：「好了，剩下最後一個步驟，你們老闆的後端已經把資料從資料庫倒出來了，接下來我有個好消息跟壞消息，你想先聽哪個？」

小杰無力的說：「先說壞的吧~」

黑道大哥：「壞消息是他吐的格式完全不符合圖表框架的格式，你得重新組成你要的格式。」

小杰：「那…好消息呢？」<br />
黑道大哥：「好消息是，老闆剛打來說還是讓你負責，你就好人做到底吧！」

小杰：「…^$#(*%(%&」
:::

## 題目

以下是預期希望出現正常的圖表，請改寫此 [Codepen](https://codepen.io/liao/pen/VwexQqr?editors=1010)：<br />
PS：HTML 與 CSS 面板壞掉了，只能變更 JS 面板

<img src="https://i.imgur.com/7HgN17Q.png" />

::: tip 參考解答：
``` html
<div id="chart"></div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.css" integrity="sha512-cznfNokevSG7QPA5dZepud8taylLdvgr0lDqw/FEZIhluFsSwyvS81CMnRdrNSKwbsmc43LtRd2/WMQV+Z85AQ==" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" integrity="sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js" integrity="sha512-bW79RVtvrrTS2QzmDsJeh62Nt4b/RjYlYvi2iEmkXPhzzbXMx69JT/zHgiGcL1Tk5nkLMTF6xkEUuynTkdC9PQ==" crossorigin="anonymous"></script>
```

``` js
var serverData = [
  {
    name:"總公司每月討債業務",
    seasonOneData:[500000, 1300000],
    seasonTwoData:[2000000, 300000, 500000]

  },
  {
    name:"黑道大哥業績",
    seasonOneData:[30000, 100000],
    seasonTwoData:[300000, 50000, 100000]
  }
];
var data = [];

// var data = [['黑道大哥業績', 30000, 100000, 300000]];
//以上程式碼不可更動

// 請用 serverData 跑 forEach，依序將組好的陣列增加到 data 陣列後方
// 修改範圍開始
serverData.forEach(item => {
  let arr = [];
  arr.push(item.name);
  item.seasonOneData.forEach(num => {
    arr.push(num);
  });
  item.seasonTwoData.forEach(num => {
    arr.push(num);
  });
  data.push(arr);
});

// 修改範圍結束

// 以下程式碼不可更動
var chart = c3.generate({
  bindto: "#chart",
  data: {
    columns: data
  }
});

// 提示 data 必須組成以下格式，圖表才會呈現
// data = [
//   ["總公司每月討債業務", 500000, 1300000, 2000000, 300000, 500000],
//   ["黑道大哥業績", 30000, 100000, 300000, 50000, 100000]
// ]
```
:::