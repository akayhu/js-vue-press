# 第十三關：函式 + if 判斷

::: theorem 情境：
護理師：「感謝你幫忙，系統看起來正常顯示了，你想成為這儀器的第一號使用者嗎？」<br />
小杰：「好啊，我好久沒測 BMI 了，那我該怎麼做？」<br />
護理師：「只要站在儀器前兩公尺，它就會印出你的身高與體重，以及你的 BMI 狀態！」

於是小杰躍躍欲試的跑到儀器前面，還心機得把外頭跟皮帶都拿掉，讓自己看得比較瘦。

過了幾秒後，儀器發出逼逼逼的聲音，緩慢得印出了這張單子。

<img src="https://i.imgur.com/mTyKMDy.png" />

小杰：「身高體重正確是還好...**但 BMI 明顯搞錯了吧！ 我 BMI 明明超正常的好不好！**」<br />
護理師：「啊我突然想到了，當初你師傅因為不會寫 JavaScript，所以是請一個工讀生幫忙寫的，要不你好人做到底，看看他的 Code 寫得如何？」

小杰：「為了還我 BMI 指數的清白，我改！」
:::

## 題目

以下為 BMI 計算方式：

1. BMI 計算為：體重(公斤) / 身高的平方(單位為公尺)
    - 例如 150 公分 50 kg = 50 / (1.5*1.5) = **22.2 BMI 指數**
3. BMI 數值狀態如下
    - 體重過輕：BMI ＜ 18.5
    - 正常：18.5 ≦ BMI ＜24
    - 過重：24 ≦ BMI ＜27
    - 輕度肥胖：27 ≦ BMI ＜30
    - 中度肥胖：30 ≦ BMI ＜35
    - 重度肥胖：BMI ≧ 35

裡面的 if 判斷根本都在亂寫，請依照上面的 BMI 狀態來改寫

[複製題目](https://codepen.io/liao/pen/jOWVJOq?editors=1011)

<img src="https://i.imgur.com/RFYf3Ke.png" />

::: tip 參考解答：
``` js
function calculationBMI(height, kg){
  var bmi = kg / (height / 100 * height / 100);
  if (bmi >= 35) {
    return "重度肥胖";
  } else if (bmi >= 30) {
    return "中度肥胖";
  } else if (bmi >= 27) {
    return "輕度肥胖";
  } else if (bmi >= 24) {
    return "過重";
  } else if (bmi >= 18.5) {
    return "正常";
  } else {
    return "體重過輕";
  }
}

console.log(calculationBMI(178, 70)); // 顯示 正常
```
:::