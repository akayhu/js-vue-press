# 第十二關：DOM 操作

::: theorem 情境：
小杰：「什麼！你拒收患者，為什麼啊？」<br />
護理師：「沒辦法，這是院長的指示..」<br />

好不容易來到醫院，想不到他們竟然拒收師傅看急診，原來是師傅和院長是老交情，三年前他們一起合作，打算搞一個「**大 AI 數據之 BMI 體重計**」，標榜著只要用儀器照張相，就能測量受測者的 BMI。

但不知道為什麼兩方突然鬧翻了，師傅一怒之下，在已經完工的儀器上，下了一道密碼，使得花了三億元的儀器無法正常開啟運作，這也讓院長氣得牙癢癢。

護理師：「院長說，除非他把儀器解鎖，他才願意幫他治療..」<br />
小杰：「可是師傅現在已經進入昏迷了，你得先把他救活啊！」

護理師：「你師傅離開院長前，其實有給一個密碼提示，但我們醫護人員也看不懂 Code，不然你試試看？聽說這個解鎖知識，只要看這裡的[秘笈](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/%2F6zQ3SasRR2GR-F3FW8SYVw)就能輕鬆解開~」

小杰：「我一定是上輩子欠師傅太多，才淪落到現在這樣的地步...嗚嗚嗚，好，我解，我來解！」
:::

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