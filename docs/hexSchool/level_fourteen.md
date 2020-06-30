# 第十四關：監聽與函式設計

::: theorem 情境：
修好儀器後的數天，醫院打給小杰說師傅可以出院，小杰來到醫院遇到護理師時，只見她一臉氣急敗壞的模樣朝他前來。

護理師：「**你來得正好，你寫的程式被大家抱怨到不行，院長信箱天天被塞爆！**」<br />
小杰：「蛤？不是啊，我只是負責將資料印出來，精准度問題應該跟我沒關吧？」<br />
護理師：「就是因為太精準了...所以你看這些客訴單(遞出」

病人A：「我根本不相信這儀器，照相照完就知道身高和公斤..」<br />
病人B：「我量了兩次，第一次穿超多衣服，第二次沒穿衣服，但竟然都可以精準猜出我的體重！你們一定是早就有我的資料，拿這儀器來騙錢！」<br />
病人C：「太精準算出我體重了..我覺得無法接受。」<br />
病人D：「只出下面的圖」

<img src="https://i.imgur.com/YDE26Jb.png" />

小杰有點嚇傻的回說：「所以...到底該怎麼辦？」

護理長：「我跟院長討論過，只好盡快拿出之前你師傅做的 beta 2.0 版，本來應急了，但裡面程式還是寫得很爛，估計是你師傅之前又找了奇怪的人做的。」<br />
護理長：「這 2.0 版本就是你師傅做的一個網頁，讓病患自己輸入想要的 BMI，輸入完後再傳給我們網頁截圖就好。」<br />
小杰：「慢著！所以他亂輸入你們也不會查證！？」<br />
護理長：「在商場上，你覺得該優先讓客戶高興比較重要，還是健康比較重要？」<br />
小杰：「當然是健康啊！」<br />
護理長：「你還是太嫩了小杰，不要廢話了，快點幫你師傅解圍吧，否則我就不讓你把師傅帶出院了！」
:::

## 提示與講義

* [監聽影片教學 1小時 2x 分時間軸左右](https://courses.hexschool.com/courses/2020/lectures/18429777)
* [利用 原生 的 function 觀念寫一個 BMI 計算機](https://ithelp.ithome.com.tw/articles/10229952)

## 題目

小杰打開網頁後，發現工讀生只把 HTML 標籤寫好，JS 完全沒寫，<br />
因為 HTML 面板已經壞掉了，請直接修改 JS Code，<br />
讓 .total 的顯示數值，可以正常運作。

[複製題目](https://codepen.io/liao/pen/KKVWgpv)

``` html
<input type="text" class="height" placeholder="請輸入您的身高(公分)" />
<input type="text" class="kg" placeholder="請輸入您的體重(公斤)" />
<input type="button" class="send" value="計算" />
<p class="total">您的 BMI 指數為 
  <span class="BMI">22</span>，
  狀態是 <span class="status">正常</span>
</p>
```

::: tip 參考解答：
``` js
var height = document.querySelector(".height");
var weight = document.querySelector(".kg");
var submit = document.querySelector(".send");
var BMI = document.querySelector(".BMI");
var status = document.querySelector('.status');

function calculateBMI() {

  if (!height.value || height.value === 0) {
    alert("請輸入身高");
    return;
  }
  
  if (!weight.value || weight.value === 0) {
    alert("請輸入體重");
    return;
  }

  // textContent 方法請見說明
  // Math.pow() 方法請見說明
  // toFixed() 方法請見說明
  BMI.textContent = ( 
    Number(weight.value) / Math.pow(Number(height.value) / 100, 2)  
  ).toFixed(1); 

  var BMIResult = Number(BMI.textContent);

  if (BMIResult >= 35) {
    status.textContent = "重度肥胖";
  } else if (BMIResult >= 30) {
    status.textContent = "中度肥胖";
  } else if (BMIResult >= 27) {
    status.textContent = "輕度肥胖";
  } else if (BMIResult >= 24) {
    status.textContent = "過重";
  } else if (BMIResult >= 18.5) {
    status.textContent = "正常";
  } else {
    status.textContent = "過輕";
  }
}

submit.addEventListener("click", calculateBMI);
```
:::

::: warning 說明：
寫法沒有唯一，函式執行結果是正確的即可<br />
[element textContent 說明](https://developer.mozilla.org/zh-TW/docs/Web/API/Node/textContent)<br />
[Math.pow() 說明](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)<br />
[toFixed() 說明](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
:::