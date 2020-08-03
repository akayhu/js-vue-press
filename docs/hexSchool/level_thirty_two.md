# 三十二關：程式整合篇

::: theorem 情境：
小杰好不容易將圖表寫好了，於是交付給了禿頭俠，原本以為可以順利結案，但竟然出現了意想不到的變數。

禿頭俠：「客戶說，他還是很喜歡你 [29 關](https://hackmd.io/LzpLs78pSqmDY1DbCcsg4Q)做的東西」

小杰：「痾....所以？我有不詳的預感...orz」

禿頭俠拳頭握緊地說：「所以，客戶說他全都要」

<img src="https://i.imgur.com/FJtQ4uh.png" />

小杰：「乾...什麼跟什麼東西啊~~~(吶喊」
:::

## 題目

客戶希望網頁呈現分左右邊，左邊放 [29 關](https://hackmd.io/LzpLs78pSqmDY1DbCcsg4Q)的 select 排序功能，右邊放 [30 關](https://hackmd.io/Vp1FRGPMRymM7FOxaQ_srQ)你所設計的圖表設計功能，請做完後回傳 codepen 於 Slack 上。

<img src="https://i.imgur.com/kXyjvoL.png" />

## 筆記

* [JSP 筆記 - 程式碼整合](https://hsuchihting.github.io/javascript/20200721/262164692/)

::: tip 參考解答
``` html
<div class="container text-center">
  <div class="row">
    <div class="col-6">
      <div class="title flex">
        <h1 class="mt-3">請選擇排序方式</h1>
      </div>
      <select class="mt-6" id="select">
        <option value="">-------------- 請選擇 --------------</option>
        <option value="id">依照 id 編號排序(由1開始從上往下)</option>
        <option value="process">依照完課率排序(由最高到最低)</option>
      </select>

      <ul class="userlist mt-3 text-left">
      </ul>
    </div>
    <div class="col-md-5">
      <div id="chart"></div>
    </div>
  </div>
</div>
```

須引入檔案：
https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.css
https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css
https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js
https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js
https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js

``` js
var select = document.querySelector('#select');
var userList = document.querySelector('.userlist');
var url = 'https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json';
var data = [];
var columns = ["完成率"];//參賽者完成率
var namelist = [];//參賽者姓名陣列

axios.get(url)
  .then(function(res){
    data = res.data;
    render();
  })
  

select.addEventListener('change',render);

function render(e) {
  var list = "";
  if(e.target.value == "id") {
    data.sort((a,b) => parseInt(a.id) - parseInt(b.id));
  } else if (e.target.value == "process") {
    data.sort((a,b) => parseInt(b.process) - parseInt(a.process));
  }
  
  data.forEach((item,index) => {
    var content = `<li>編號 ID ${item.id} 為 ${item.name}，他的特訓班完成度是 ${item.process}</li>`;
    list += content;
    columns.push(parseInt(item.process));
    namelist.push(item.name);
  })
  
  userList.innerHTML = list;
  chart(columns,namelist);
  // 將資料清空，以進行切換
  columns = ["完成率"]; 
  namelist = []; 
}

function chart(columns,namelist) {
  var chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        [...columns],//把完成率放到columns
      ],
      axes: {
        完成率: "y2",
      },
      type: 'bar',
      colors: {
        完成率: "#F08080"
      },
    },
    bar: {
      width: {
        ratio: 0.5 
      }
    },
    size: {
      height: namelist.length * 50, //調整圖表高度
    },
    axis: {
      rotated: true,
      x: {
        type: "category",
        categories: namelist,
      },
      y: {
        show: true, //下方 Y 軸顯示
        label: {
          text: "完成率%",
          position: "outer-center", //名稱位置
        },
      },
      y2: {
        show: true, //上方 Y 軸顯示
        label: {
          text: "完成率%",
          position: "outer-center", //名稱位置
        },
      }
    }
  });
}
```
:::