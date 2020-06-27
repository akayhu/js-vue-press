# 陣列

當資料列表有很多筆的時候，例如下圖紅框：

<img src="/js-vue-press/image/yahoo.png" />

共 10 筆訊息，我們 js 難道就要宣告 10 筆資料嗎？如下：

``` js
var new1 = "反彈大贏家 郭台銘身價增230億";
var new2 = "勞保快破產 該提前領退休金嗎";
var new3 = "成年下修18歲 這福利少領2年";
// 略 ...
var new10 = "信貸利率新低：最優首期0.07%起►方案立即比較";
```

有幾筆資料就要宣告幾則嗎？這樣的感覺沒有很有效率

可以透過一個格式，像是 HTML 的 ul li 的 li 樣子，把它整理起來，讓 ul 整包帶走有沒有辦法？

有的，就是用**陣列**！

## 陣列常用語法

基本陣列寫法

``` js
var colors = ["紅色", "黃色", "綠色", "藍色", "黑色", "白色"];

console.log(colors); // 會顯示 陣列格式 ["紅色", "黃色", "綠色", "藍色", "黑色", "白色"];
```

每一筆之間用逗號隔開，所以上面範例有 6 筆資料

::: danger 錯誤寫法
``` js
var colors = [紅色, 黃色, 綠色, 藍色, 黑色, 白色];
```

字串需要雙引號 `" "` 包住
:::

陣列內容可放 字串、數字、物件、陣列、函式，例如：

``` js
// 內容是數字
var numberArr = [1, 2, 3, 4, 5];

// 內容是物件
var dataArr = [
  {
    name: "小王"
  },
  {
    name: "小明"
  },
  {
    name: "小菜"
  }
];

// 內容是陣列
var arrArr = [
  [1, 2],
  [2, 3],
  [3, 4]
];

// 內容是函式
function aFunc() {
  console.log("hello");
}

function bFunc() {
  console.log("hello");
}

var funcArr = [aFunc, bFunc];

// 也可直接把函式寫在陣列裡
var funcArr = [
  function aFunc() {
    console.log("hello");
  }, 
  function bFunc() {
    console.log("hello");
  }
];
```

## 如何抓取陣列內容呢？

以顏色為例：

``` js
var colors = ["紅色", "黃色", "綠色", "藍色", "黑色", "白色"];

console.log(colors[0]); // 顯示 紅色
console.log(colors[1]); // 顯示 黃色
console.log(colors[2]); // 顯示 綠色
console.log(colors[3]); // 顯示 藍色
console.log(colors[4]); // 顯示 黑色
console.log(colors[5]); // 顯示 白色
```

抓取陣列值，是從 **0** 開始算，**不是**從 1 開始算