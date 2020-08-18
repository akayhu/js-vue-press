# 第四十一關：new Date() 時間處理

::: theorem 情境：
小杰剛成為正職沒多久，就被技術主管告知說，接下來會有個大案子要交給他，在那之前他必須再補充一些技術量。

所以技術主管請他必須要瞭解到用 JavaScript 來去做日期管理。
:::

## 問題

請觀看以下文章，以了解如何透過 JS 去取得年月日的資料，並用 Slack 回傳你的學習心得，42 關將會出題目來練習。

## 技術文章（歡迎補充)
* [JavaScript Date（日期） 对象](https://www.runoob.com/js/js-obj-date.html)
* [JavaScript Date 時間和日期](https://www.w3school.com.cn/jsref/jsref_obj_date.asp)
* [日期與時間](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/datetime.html)
* [從零開始的學習 JS 生活-第二十一日](https://ithelp.ithome.com.tw/articles/10225167)
* [[JS] JavaScript Date Time Method 日期時間](https://pjchender.github.io/2017/12/27/js-javascript-date-time-method-%E6%97%A5%E6%9C%9F%E6%99%82%E9%96%93/)
* [前端工程研究：關於 JavaScript 中 Date 型別的常見地雷與建議作法](https://blog.miniasp.com/post/2016/09/25/JavaScript-Date-usage-in-details)

## 注意事項
* 有些資料是從零開始計算

::: tip 參考：
``` html
<h1></h1>
```

``` js
function getFullTime() {
  // 建立 Date 物件
  const date = new Date();
  // 取得年份
  const year = date.getFullYear();
  // 取得月份，但月份是從 0 開始，所以要正常顯示必須 +1
  const month = date.getMonth() + 1;
  // 取得日期
  const day = date.getDate();
  // 取得小時
  const hour = date.getHours();
  // 取得分鐘
  const minute = date.getMinutes();
  // 取得秒數
  const second = date.getSeconds();

  const fullTime = `現在的日期與時間: ${year}/${month}/${day} | ${hour}:${minute}:${second}`
  
  document.querySelector('h1').textContent = fullTime;
}

setInterval(() => {
  getFullTime();
}, 1000)
```
:::