# 第十八關：字串相加 innerHTML + 樣式搭配

::: theorem 情境：
小杰：「我剛剛看到 beta 2.0 版的設計稿了，有點超出我的能力欸..」<br />
護理師：「所以你打算讓師傅住院住到你破產嘍？」<br />
小杰：「也不是啦，我光字串相加就搞了我好久時間...」<br />
護理師嘆了一口氣說：「我想，你就先從簡單的開始吧，這題你拿去試試看(遞出題目」<br />
小杰：「護理師妳人真好，既然如此要不然妳幫...喂，妳怎麼大步流星、大步流星的走掉了啊，救救我~~」
:::

JS 始終要搭配妳寫好的 CSS 來進行渲染，護理師好像已經看膩了小杰爛到不行的陽春版本，寫了一個 `.list2` 版本，請依照他的 CSS 樣式邏輯，將 data 陣列裡面的資料，依序渲染到 `.list2` 裡面的 `li` 來顯示。

[複製題目](https://codepen.io/liao/pen/QWygrmK)

<img src="https://i.imgur.com/oPc42i4.png" />

::: tip 參考解答：
``` html
<ul class="list"></ul>

<ul class="list2">
  <!-- <li class="list-card">
    <h2>小華</h2>
    <p>你的身高是178</p>
  </li>
   <li class="list-card">
    <h2>小美</h2>
    <p>你的身高是133</p>
  </li> -->
</ul>
```

``` css
.list2 {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-card {
  background: blue;
  width: 300px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
}
```

``` js
var list = document.querySelector(".list");
var list2 = document.querySelector(".list2"); // 先抓取 ul class="list2" 標籤
var data = [];
data.push(
  {
    "name": "廖洧杰",
    "height" :178
  }
)
data.push(
  {
    "name": "小乖",
    "height": 120
  }
)
data.push(
  {
    "name": "小麗",
    "height": 140
  }
)
data.push(
  {
    "name": "小新",
    "height": 80
  }
)
data.push(
  {
    "name": "小華",
    "height": 50
  }
)

var str = "";
var strList = "";

data.forEach(item => {
  var content = '<li>' + item.name + "你的身高是" + item.height + '</li>';
  str += content;

  // ul class="list2" 標籤裡的列表內容
  var contentList = `<li class="list-card"><h2>${item.name}</h2><p>你的身高是${item.height}</p></li>`;
  // 讓 forEach 的迴圈的內容累加到 strList 變數裡，讓內容可以變成 <li>...</li><li>...</li><li>...</li> 呈現資料
  strList += contentList;
});

list.innerHTML = str;
// 渲染到 list2 標籤裡
list2.innerHTML = strList;
```
:::