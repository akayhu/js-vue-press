# 第四十二關：new Date() 與字串處理

## 問題

請用你學會的語法，取出今日時間，並依序組出以下字串

假設今天時間為 8/5，則需透過 new Date() 處理後，印出以下資料

```
// 目前時間是 2020/8/5 14:20 
// 2020/08/05
// 2020-08-05
// 今天是禮拜五 
// 今天是八月五日，時間為 14:20
```

- [JS 筆記 - 用 JavaScript 寫一個電子鐘](https://hsuchihting.github.io/javascript/20200807/92265520/)

::: tip 參考解答：
``` html
<div class="date"></div>
```

``` js
const dateDisplay = document.querySelector(".date");

function getNow() {
	const today = new Date();
	const tw = "日,一,二,三,四,五,六,七,八,九,十,十一,十二,十三,十四,十五,十六,十七,十八,十九,二十,二一,二二,二三,二四,二五,二六,二七,二八,二九,三十,三一".split(",");
	const yyyy = today.getFullYear();
	const month = today.getMonth() + 1;
	const dd = today.getDate();
	const week = today.getDay();
	const hh = ("0" + today.getHours()).substr(-2);
	const mm = ("0" + today.getMinutes()).substr(-2);
	const ss = ("0" + today.getSeconds()).substr(-2);

	dateDisplay.innerHTML = `
		<p>目前時間是 ${yyyy}/${month}/${dd} ${hh}:${mm}:${ss}</p>
		<p> ${yyyy}/${month}/${dd}</p>
		<p> ${yyyy}-${month}-${dd}</p>
		<p>今天是禮拜${tw[week]}</p>
		<p>今天是${tw[month]}月${tw[dd]}日，時間為 ${hh}:${mm}</p>
  `;
}

setInterval(() => {
	getNow();
}, 1000);
```
:::