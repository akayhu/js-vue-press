# 第二十四關：資料格式處理，forEach + 陣列處理

::: theorem 情境：
黑道大哥：「嗯...數據看起來對了，但我還有**最新兩個月討債業績**要匯入進去，你就好人做到底，繼續幫忙下吧」

小杰小聲說：「薪水在你手上，不就很棒棒，你說 1 我還能說 2 嗎..」

黑道大哥：「你說什麼？我沒聽清楚！」

小杰：「沒事沒事，我做！」
:::

## 題目

以下是預期希望出現正常的圖表，請改寫此 [Codepen](https://codepen.io/liao/pen/vYLRbvj)

PS：HTML 與 CSS 面板壞掉了，只能變更 JS 面板

<img src="https://i.imgur.com/vuHrGD7.png" />

::: tip 參考解答：
``` html
<div id="chart"></div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.css" integrity="sha512-cznfNokevSG7QPA5dZepud8taylLdvgr0lDqw/FEZIhluFsSwyvS81CMnRdrNSKwbsmc43LtRd2/WMQV+Z85AQ==" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" integrity="sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js" integrity="sha512-bW79RVtvrrTS2QzmDsJeh62Nt4b/RjYlYvi2iEmkXPhzzbXMx69JT/zHgiGcL1Tk5nkLMTF6xkEUuynTkdC9PQ==" crossorigin="anonymous"></script>
```

``` js {7}
var monthMoney = ["總公司每月討債業績", 500000, 1300000, 2000000];
var newMonthMoney = ["300000", "500000"];
// 以上程式碼不可更動

// 請用 newMonthMoney 跑 forEach，依序將值增加到 monthMoney 陣列後方
// 修改範圍開始
newMonthMoney.forEach(newMonthMoney => monthMoney.push(newMonthMoney));
// 修改範圍結束

// 以下程式碼不可更動
var realData = monthMoney;
var chart = c3.generate({
  bindto: "#chart",
  data: {
    columns: [
      realData,
      ["黑道大哥業績", 30000, 100000, 300000]
    ]
  }
});
```
:::