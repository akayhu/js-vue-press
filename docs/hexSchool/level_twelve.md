# 第十二關：DOM 操作

## 題目

1. 請觀看此 Codepen 的線索，試圖找到密碼，並解出密碼
2. 以下 Codepen 的 HTML 與 CSS 面板都壞掉了，你只能編輯 JS 面板，來去尋找線索

[Codepen 題目](https://codepen.io/liao/pen/dyGpqGX?editors=1010)

<img src="https://i.imgur.com/fFknKA0.png" />

::: tip 參考解答：
``` html
<div class="key">
  <!-- 區塊一 -->
  <div class="keyItem keyItem1">
    <img src="https://hexschool.github.io/JSTraining/stage12/4.png" alt="">
  </div>
  <!-- 區塊二 -->
  <div class="keyItem keyItem2">
    <img src="https://hexschool.github.io/JSTraining/stage12/2.png" alt="">
  </div>
  <!-- 區塊三 -->
  <div class="keyItem keyItem3">
    
  </div>
  <!-- 區塊四 -->
  <div class="keyItem keyItem4" style="">
    
  </div>
</div>
```

``` js
// 區塊一，路徑放錯了，得用 setAttribute 換 src 屬性，換成 1.png
// 區塊二，唯一有放對，不需更改
// 區塊三，請用 innerHTML，指定 keyItem3，讓他插入 3.png 圖片
// 區塊四，只能用 style 插入 background 4.png

var img1 = document.querySelector(".keyItem1 img");
var img3 = document.querySelector(".keyItem3");
var img4 = document.querySelector(".keyItem4");

img1.setAttribute("src", "https://hexschool.github.io/JSTraining/stage12/1.png");
img3.innerHTML = '<img src="https://hexschool.github.io/JSTraining/stage12/3.png">';
img4.style.background = "url(https://hexschool.github.io/JSTraining/stage12/4.png)";
```

顯示結果為：

<img src="/js-vue-press/image/twelve.png" />
:::

::: warning 說明：
[setAttribute 說明](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute)<br />
[innerHTML 說明](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/innerHTML)<br />
[js background 說明](https://www.w3schools.com/jsref/prop_style_background.asp)
:::