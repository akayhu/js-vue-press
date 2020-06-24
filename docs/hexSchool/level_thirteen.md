# 第十三關：函式 + if 判斷

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