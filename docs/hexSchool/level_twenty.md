# 第二十關： BMI 計算機團戰關卡

::: theorem 情境：
經過無數天的熬夜，小杰終於在驗收前夕完成了 BMI 計算機，當護理師拿給院長審視時，就又被打槍了。

小杰：「怎麼可能…我明明功能都做好了啊？」<br />
護理師：「院長覺得你還是個菜鳥，不相信你的 Code 是對的」<br />

小杰：「那我到底該怎麼辦，菜也不是我的錯啊 T_T」<br />
護理師：「院長說，除非你能找到 35 份以上的 BMI 範例，他才認可你的 Code 是沒問題的…」<br />

小杰：「我到哪找那麼多工程師啊！！拜託誰來救救我~~~」!

<img src="https://i.imgur.com/KCFNCxQ.png" />

:::

## 題目：

請您設計完下方所提供之設計稿後，做好您的 BMI 計算機網頁

## 設計稿釋出

* [UI 設計稿](https://xd.adobe.com/view/15a8510e-e4c9-45d7-4f71-24d75d4e54fd-6399/)
* [上面連結的 XD 線上標示稿操作教學](https://hackmd.io/35ILOuVGSAO8GeO0xevTxw?both)

### 版型提供
如果你只想鍛鍊 JS 邏輯，可以挑選以下的程式碼複製起來，

- [HexSchool-BMI (Eden Hsia)](https://github.com/Edenhsia/hexSchool-BMI)
- [HexSchool-BMI (Vic)](https://codepen.io/hsuan333/pen/XWXRQYY)
- [HexSchool-BMI (Tim Chen)](https://github.com/timchen0607/HexSchool-BMI) [Demo](https://timchen0607.github.io/HexSchool-BMI/)
- [HexSchool-BMI (hsin-yu)](https://codepen.io/tina2793778/pen/jOWwbRP?editors=1100)
- [HexSchool-BMI (Erica)](https://codepen.io/kaoru44689/pen/gOPRWGm)
- [HexSchool-BMI (Jason Hung)](https://github.com/brook110413/hexSchool-BMI) [Demo](https://brook110413.github.io/hexSchool-BMI/)
- [HexSchool-BMI (Leo Lee)](https://github.com/overactive1988/HexSchool_BMI_Calculator)

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
.container {
	width: 960px;
}
h3 {
	font-size: 1.3rem;
}
.btn {
	width: 5.1rem;
	color: #fff;
	background-color: #3d82ad;
}
.btn-light {
	background-color: rgb(255, 255, 255, 0.3);
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
}

function addData(status, bmiText) {
	data.push({
		height: height.value,
		kg: kg.value,
		bmi: bmiText,
		result: `${BMIData[status].statusText}`,
		status: `${BMIData[status].class}`
	});
	display();
	console.log(data);
}

function reset(e) {
	e.preventDefault();
	data = [];
	display();
	record.style.display = "none";
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
	record.style.display = "block";
}

send.addEventListener("click", calculationBMI);
resetBtn.addEventListener("click", reset);
```
:::

::: warning 說明：
js 寫法沒有唯一，可以正常執行動作即可
:::