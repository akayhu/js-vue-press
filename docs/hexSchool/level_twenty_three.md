# 第二十三關：資料格式處理，陣列 unshift

::: theorem 情境：
隔天一早，小杰精神奕奕地往美式餐廳前進，心裡想著終於能好好工作了，太久沒做服務生工作，反而有點懷念。

剛踏入美式餐廳，卻發現整個餐廳破亂不堪，裝潢都被砸爛，在中庭則坐了一位明顯是黑道大哥的份子。

黑道大哥：「你就是小杰吧？」<br />
小杰：「我不是，我是客--」<br />
黑道大哥：「少騙了，你的老闆已經給我看過你照片了。」<br />
小杰：「就、就算我是又怎麼樣，你把老闆怎麼了？？」<br />
黑道大哥：「你們老闆欠我的系統有一堆 Bug，我讓小弟把它綁回基地加班了」<br />
小杰：「什麼！我的老闆會寫程式！？」

黑道大哥：「...你難道不知道老闆開餐廳是副業嗎，他系統公司可賺得呢。」<br />
黑道大哥：「直接進入正題吧，我這裡有個幾小時後就要上線的東西，但還缺一個 BUG 要改，老闆說可以請你幫忙。」

小杰：「那如果我不幫忙呢？反正你也拿我沒轍，那我就先走----」<br />
黑道大哥晃了晃手中的薪資袋：「你老闆給了我你這個月的薪資，你不做也沒差，那這我就拿走了。」

<img src="https://i.imgur.com/UBpLasw.png" />

小杰：「好好好，我做就是了！」
:::

## 問題

小杰一看到題目整個傻眼，裡面用了他從來沒看過的圖表資料，好在老闆在程式碼裡面寫了些註解，讓小杰知道自己不需要懂圖表框架，好好的把資料處理好後，圖表自然就會顯示正常，一起來幫幫小杰吧！

以下是預期希望出現正常的圖表，請改寫此 [Codepen](https://codepen.io/liao/pen/YzwaQXJ?editors=1010)，並在 Slack 回傳你的解法：
PS：HTML 與 CSS 面板壞掉了，只能變更 JS 面板

<img src="https://i.imgur.com/QzRaWTM.png" />

::: tip 參考解答：
``` html
<div id="chart"></div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.css" integrity="sha512-cznfNokevSG7QPA5dZepud8taylLdvgr0lDqw/FEZIhluFsSwyvS81CMnRdrNSKwbsmc43LtRd2/WMQV+Z85AQ==" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" integrity="sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js" integrity="sha512-bW79RVtvrrTS2QzmDsJeh62Nt4b/RjYlYvi2iEmkXPhzzbXMx69JT/zHgiGcL1Tk5nkLMTF6xkEUuynTkdC9PQ==" crossorigin="anonymous"></script>
```

``` js {6}
var monthMoney = [500000, 1300000, 2000000];
var title = "總公司每月討債業績";

// 請在這行，將 title 變數 加入 monthMoney 陣列裡的第一筆
// 讓 monthMoney 變成此陣列資料 >> ["總公司每月討債業績", 5000000, 1300000, 2000000] 
monthMoney.unshift(title);

// 以下程式碼不可更動
var realData= monthMoney;
var chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [
      realData,
      ["黑道大哥業績", 30000, 100000, 300000]
    ]
  }
});
```
:::