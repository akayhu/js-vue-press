# 第三十三關：圓餅圖分析

::: theorem 情境：
禿頭俠：「感謝你幫忙，雖然他們很滿意，但最後他們想凹我們做一些數據分析，才讓我們結案。」<br />
小杰：「…（表示已麻木」
:::

## 問題

客戶說，他在 C3.js 看到這個[圓餅圖圖表](https://c3js.org/samples/chart_pie.html)，他想要我們透過 API 來觀察，尚未開賽跟已開賽的比例佔多少，一起來幫幫小杰吧！

<img src="https://i.imgur.com/GohxMZG.png" />

::: tip 參考解答
``` html
<div class="container-fluid text-center">
  <div class="row">
    <div class="col-6">
      <div class="title flex">
        <h1 class="mt-3">請選擇排序方式</h1>
      </div>
      <select class="mt-3" id="select">
        <option value="">--- 請選擇 ---</option>
        <option value="id">依照 id 編號排序(由1開始從上往下)</option>
        <option value="process">依照完課率排序(由最高到最低)</option>
      </select>

      <ul class="nameList mt-3 text-left">
      </ul>
    </div>
    <div class="col-6">
      <div class="row">
        <div class="col-12">
          <div id="chartPie"></div>
        </div>
        <div class="col-12">
          <div id="chart"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

須引入檔案
https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css
https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.css

``` css
h1 {
  font-size: 1.5rem;
}
ul li {
  list-style: none;
  padding: 5px 10px;
  border: 1px solid #999;
  border-radius: 5px;
  margin-bottom: 3px;
}
ul li div {
  dispaly: inline-block;
}
.id{
  width: 100px;
  display: inline-block;
}
.name {
  width: 160px;
  display: inline-block;
}
.process {
  width: 100px;
  display: inline-block;
}
```

須引入檔案
https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js
https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js

``` js
let url = 'https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json'
let select = document.querySelector('#select');
let nameList = document.querySelector('.nameList');
let data = [];
let columns = ["完成率"];//參賽者完成率
let namelist = [];//參賽者姓名陣列

axios.get(url)
  .then(function(res){
    data = res.data;
    // render();
    pie();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

//------ 選擇排序
select.addEventListener('change',render);
function render(e){
  var list = "";
  if(e.target.value == "id"){
    data.sort((a,b) => parseInt(a.id) - parseInt(b.id));
  }else if(e.target.value == "process"){
    data.sort((a,b) => parseInt(b.process) - parseInt(a.process));
  }
  
  data.forEach((item,index) => {
    var content = `<li><div class="id">編號 ID ${item.id} </div> <div class="name">${item.name}</div> <div class="process"> 完成度 ${item.process}</div></li>`;
    list += content;
    columns.push(parseInt(item.process));
    namelist.push(item.name);
  })
  
  nameList.innerHTML = list;
  chart(columns,namelist);
  // 將資料清空，以進行切換
  columns = ["完成率"]; 
  namelist = []; 
}

function chart(columns,namelist){
  var chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        [...columns],//把完成率放到columns
      ],
      axes: {
        完成率: "y2",//旋轉之後完成率會出現在最下方，所以在上方再新增另一個 Y 軸
      },
      type: 'bar',
      colors: {
        完成率: "#34e3f9",
        //這是指每一個陣列資料的顏色，而此處只有一個完成率的陣列
        //["完成率", 45%, 45% ....]
        //因此前面使用 "完成率"，後面指定顏色
      },
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
    },
    size: {
      height: namelist.length * 30, //調整圖表高度
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

//------ Pie 顯示
function pie(){
  const columns2 = {}
  columns2.openGame = ['有進度的參賽者'];
  columns2.notOpen = ['0% 進度參賽者'];
  
  data.forEach(item =>{
    if(item.process === '0%'){
      columns2.notOpen.push(item.process);
    }else if(item.process !== '0%'){
      columns2.openGame.push(item.process);
    }
  })
  chartPie(columns2);
}
 
function chartPie(columns2){
  var chart = c3.generate({
    bindto: "#chartPie",
    data: {
      columns: [
        ['0% 進度參賽者', columns2.notOpen.length],
        ['有進度的參賽者', columns2.openGame.length],//把完成率放到columns
      ],
      type: 'pie',
      colors: {
        '0% 進度參賽者': "#ffc107",
        '有進度的參賽者': "#fd7e14"
      },
    },
  })
}
```
:::