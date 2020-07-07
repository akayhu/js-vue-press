## 二十二關：陣列調整

::: theorem 情境：
儘管小杰即將寫完平均 BMI 的功能，但他看著 Code，總覺得還可以優化得更好，儘管不是院長與護理師的需求，最後他還是打算把這段 Code 寫完，再來提交給他們，

一起來看看小杰糾結什麼功能吧！
:::

## 題目

### 最新的資料放在第一筆

如下圖，第四筆資料是小杰用陣列的 push 來輸入第四次資料，最後顯示到最下方，**但照理來說，最新的資料應該放到第一筆上才對**，請思考如何處理陣列，讓最新資料都能排序在最前面，將資料進行反轉。

小杰依稀想到，陣列除了 push 外，好像還有 `unshift`、`reverse`等等的方式好像可以處理他的問題。於是他開啟了 Google ，開始展開全面性搜尋。

請在 Slack 提供 Codepen 時，也分享你用了哪一招來處理這問題。

<img src="https://i.imgur.com/bZkQ24r.png" />

::: tip 參考解答：
``` html
<div class="container mt-5 bg-light py-3">
	<nav>
		<img src="https://i.imgur.com/PsAUNqD.png" alt="" />
	</nav>
	<div class="calculator py-3">
		<div class="title text-center mb-4">
			<h1>大 AI 數據之 BMI 體重計</h1>
		</div>
		<div class="input-from py-3">
			<form class="col-7">
				<div class="form-group">
					<label for="height">身高(CM)</label>
					<input type="number" class="form-control mt-2" id="height" placeholder="請輸入身高">
				</div>
				<div class="form-group">
					<label for="kg">公斤(KG)</label>
					<input type="number" class="form-control mt-2" id="kg" placeholder="請輸入體重">
				</div>
				<div class="pt-3 col-md-12 text-center">
					<button class="btn btn btn-light btn-sm" id="send">確認</button>
				</div>
				<div class="col-md-12 text-center">
					<button class="btn btn-outline-light btn-sm mt-2" id="reset">全部清除</button>
				</div>
			</form>
		</div>
	</div>
	<section class="bmi-record mt-2">
		<div>
			<h2 class="text-center">BMI 記錄</h2>
      <h4 class="text-center text-danger average"></h4>
		</div>
		<div class="row">
			<div class="cards-group my-4">
				<!-- display card -->
			</div>
		</div>
	</section>
</div>
```

``` css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
h1 {
	font-size: 1.7rem;
	font-weight: 900;
	color: #3d82ad;
}
h2 {
	font-size: 1.5rem;
	font-weight: 700;
	color: #3d82ad;
}
h3 {
	font-size: 1.3rem;
}
ul li {
  list-style-type: none;
}
.container {
	width: 960px;
}
.btn {
	width: 5.1rem;
	color: #fff;
	background-color: #3d82ad;
}
.btn-light {
	background-color: rgba(255, 255, 255, 0.3);
}
.input-from {
	background-color: #3d82ad;
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: 600;
	color: #fff;
}
.cards-group {
	margin: 0 auto;
}
.card-list {
	line-height: 27px;
	border: #3d82ad solid 2px;
	border-radius: 2px;
	width: 22rem;
	color: #3d82ad;
	font-weight: 600;
}
.bmi-record {
	display: none;
}
.average {
	font-weight: 700;
}
.blue {
	color: #00f;
}
.green {
	color: #0a0;
}
.yellow {
	color: #daa520;
}
.orange {
	color: #f80;
}
.pink {
	color: #ff88c2;
}
.redOrange {
	color: #f88;
}
.red {
	color: #f00;
}
```

``` js
const height = document.querySelector("#height");
const kg = document.querySelector("#kg");
const send = document.querySelector("#send");
const resetBtn = document.querySelector("#reset");
const cardList = document.querySelector(".cards-group");
const record = document.querySelector(".bmi-record");
const average = document.querySelector(".average");
const BMIData = {
	overThin: {
		class: "blue",
		statusText: "體重過輕"
	},
	normal: {
		class: "green",
		statusText: "正常"
	},
	overweight: {
		class: "yellow",
		statusText: "過重"
	},
	slightObesit: {
		class: "orange",
		statusText: "輕度肥胖"
	},
	mildObesity: {
		class: "pink",
		statusText: "輕度肥胖"
	},
	middleObesity: {
		class: "redOrange",
		statusText: "中度肥胖"
	},
	extremeeObesity: {
		class: "red",
		statusText: "重度肥胖"
	}
};

let data = [];
let totalBmi = 0;
let	averageBmi = 0;

function calculationBMI(e) {
	e.preventDefault();
	const thisHeight = Number(height.value);
	const thisKg = Number(kg.value);
	const bmi = (thisKg / Math.pow(thisHeight / 100, 2)).toFixed(2);
	if (bmi > 0) {
		if (bmi < 18.5) {
			addData("overThin", bmi);
		} else if (bmi < 24) {
			addData("normal", bmi);
		} else if (bmi < 27) {
			addData("overweight", bmi);
		} else if (bmi < 30) {
			addData("slightObesit", bmi);
		} else if (bmi < 35) {
			addData("middleObesity", bmi);
		} else {
			addData("extremeeObesity", bmi);
		}
	} else {
		alert("資料錯誤");
	}
	height.value = "";
	kg.value = "";
  sum(bmi);
}

function addData(status, bmiText) {
	data.unshift({
		height: height.value,
		kg: kg.value,
		bmi: bmiText,
		result: `${BMIData[status].statusText}`,
		status: `${BMIData[status].class}`
	});
	display();
}

function reset(e) {
  e.preventDefault();
  data = [];
  totalBmi = 0;
  averageBmi = 0;
  display();
  record.style.display = "none";
}

function sum(bmi) {
	totalBmi += Number(bmi);
	averageBmi = Number(totalBmi / data.length).toFixed(2);
	display();
}

function display() {
	let str = "";
	data.forEach((item) => {
		str += `
		<div class="card-list py-2 mb-2">
			<h3 class="mb-3 text-center ${item.status}">${item.result}</h3>
			<ul class="text-center">
				<li>BMI: ${item.bmi}</li>
				<li>Height：${item.height} cm</li>
				<li>Weight：${item.kg} kg</li>
			</ul>
		</div>
		`;
	});
	cardList.innerHTML = str;
	average.textContent = `總計測量 ${data.length} 次，平均 BMI 為 ${averageBmi}`;
	record.style.display = "block";
}

send.addEventListener("click", calculationBMI);
resetBtn.addEventListener("click", reset);
```
:::

::: warning 說明：
unshift 替換掉原本的 push
:::