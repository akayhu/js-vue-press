# 第十四關：監聽與函式設計

## 提示與講義

* [監聽影片教學 1小時 2x 分時間軸左右](https://courses.hexschool.com/courses/2020/lectures/18429777)
* [利用 原生 的 function 觀念寫一個 BMI 計算機](https://ithelp.ithome.com.tw/articles/10229952)

## 題目

HTML 標籤寫好，JS 完全沒寫，<br />
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