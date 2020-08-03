# 第三十五關：圓餅圖與長條圖合併使用

::: theorem 情境：
禿頭俠：「終於走到這一步了，客戶說這個做完就可以開發票...咦，小杰你怎麼了，快醒醒不要裝睡啊！」
:::

## 問題

客戶想優化完課率的圖表設計，他想要同時顯示長條圖與圓餅圖，並顯示**各區間完課率人數**，小杰花了很多時間將圖表整合起來了，[範例連結](https://codepen.io/liao/pen/VweqGoy?editors=1010)，但他卻不知道怎麼把 API 資料放進去，一起幫幫小杰吧！

<img src="https://i.imgur.com/q9A5ChU.png" />

### 筆記

- [JSP 筆記 - 繼定條件下使用 forEach 取得資料與判斷結合 C3.js 應用](https://hsuchihting.github.io/javascript/20200723/3378642719/)

::: tip 參考解答
``` html
<div id="chart"></div>
<div id="chart2"></div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.css" integrity="sha512-cznfNokevSG7QPA5dZepud8taylLdvgr0lDqw/FEZIhluFsSwyvS81CMnRdrNSKwbsmc43LtRd2/WMQV+Z85AQ==" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" integrity="sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js" integrity="sha512-bW79RVtvrrTS2QzmDsJeh62Nt4b/RjYlYvi2iEmkXPhzzbXMx69JT/zHgiGcL1Tk5nkLMTF6xkEUuynTkdC9PQ==" crossorigin="anonymous"></script>
```

須引入檔案
https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js

``` js
let url = 'https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json';
let data = [];

axios.get(url).then(function(res) {
  data = res.data;
  render();
}).catch(function(error) {
  console.log(error);
})

function render() {
  let column = {};
  column.finish20 = [];
  column.finish49 = [];
  column.finish50 = [];
  
  data.sort((a,b) => parseInt(a.process) - parseInt(b.process));
  data.forEach((item) => {
    if(parseFloat(item.process) <= 20) {
      column.finish20.push(item.process);
    } else if (parseFloat(item.process) <= 49 ) {
      column.finish49.push(item.process);
    } else if (parseFloat(item.process) >= 50 ) {
      column.finish50.push(item.process);
    }
  })
  chartGroup(column);
}

function chartGroup(column) {
  var chart = c3.generate({
    bindto: '#chart',
      data: {
        // iris data from R
        columns: [
          ['完課率0~20%', column.finish20.length],
          ['完課率21~49%', column.finish49.length],
          ['完課率50%以上', column.finish50.length],
        ],
        type : 'pie',
      }
  });

  var chart2 = c3.generate({
    bindto: '#chart2',
      data: {
        columns: [
          ['完課率0~20%', column.finish20.length],
          ['完課率21~49%', column.finish49.length],
          ['完課率50%以上', column.finish50.length],
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
      }
  });
}
```
:::