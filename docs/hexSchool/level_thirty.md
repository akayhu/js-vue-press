# 第三十關：C3.js 圖表整合

慘了，這次客戶希望用圖表呈現，**看看誰的完課率最好，同時可以看出排名**，

但小杰只有處理過折線圖，從來沒用過其他的圖表，於是禿頭俠告訴他，其實那位開發者，也是看這裡的[文件](https://c3js.org/examples.html)複製貼上來的。

小杰點了幾個範例全部都英文，覺得非常吃力，想當初高中大學整個被當到不行，但是點進去看到 Code 時，然後再搭配之前的範例，也稍微推敲出來一些概念，像是他就找到了這個[長條圖](https://c3js.org/samples/chart_bar.html)，突然靈光山一閃，好像可以用成下面的呈現方式：

<img src="https://i.imgur.com/RcdQIkl.png" />

**雖然想歸想，但是還是得拿掉些程式碼，再嘗試整合撰寫，一起幫幫小杰吧！**

## 題目

1. 請嘗試用 codepen 附上你的解答，這次的需求是「 用 c3.js 圖表顯示，看看誰的完課率最好，同時可以看出排名**」
2. 圖表不局限於上面的長條圖，也可尋找合適的圖
3. 週六日請嘗試寫一篇 blog，分享解題流程，讓其他人也可以受益

## blog 解決題目心得連結張貼處
1. [ 廖洧杰 BLOG 心得(範例貼文)](https://www.google.com.tw)
2. [JSP 筆記 - 陣列排序 Sort()與 C3.js 視覺資料處理](https://hsuchihting.github.io/javascript/20200715/679666643/)
3. [Vic 圖表整合過程](https://hackmd.io/@BcaQM8-AS9uLVmaEplMBZw/H1Wra_RJD)
4. [C3.js基本認識](https://hsuchihting.github.io/javascript/20200715/3292510004/)
5. [JS Day 30: C3.js Chart](https://williamafil.github.io/notes/)
6. [JS 學徒特訓班 30 C3.js 圖表整合筆記](https://hackmd.io/CGVAXBSeTACnlwkc9wB-ew)

::: tip 參考解答：
``` html
<div class="container mt-5">
	<h3 class="text-center mb-5">JS特訓班</h3>
	<select id="select" class="mb-5">
		<option value="id">依照 id 編號排序(由1開始從上往下)</option>
		<option value="process">依照完課率排序(由最高到最低)</option>
	</select>

	<button type="button" class="btn btn-sm btn-info float-right" data-toggle="modal" data-target="#exampleModalLong">
		圖表
	</button>
	<table class="table table-striped">
		<thead class="thead-dark">
			<tr>
				<th scope="col" class="index">編號</th>
				<th scope="col">Name</th>
				<th scope="col">完成率</th>
			</tr>
		</thead>
		<tbody class="userList">
		</tbody>
	</table>

	<!-- Modal -->
	<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">統計表</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div id="chart"></div>
				</div>
			</div>
		</div>
	</div>
	<a href="#" class="cd-top text-replace js-cd-top"><i class="fa fa-chevron-circle-up"></i></a>
</div>
```

``` css
* {
	box-sizing: border-box;
}

html,
body {
	width: 100%;
	height: 100%;
	font-family: "Microsoft JhengHei";
}

.modal-dialog {
	top: 90px;
}

.modal-content {
	width: 700px;
}

.cd-top {
	width: 40px;
	height: 40px;
	position: fixed;
	bottom: 5px;
	right: 10px;
}

.fa-chevron-circle-up {
	position: absolute;
	font-size: 25px;
}
```

引入檔案
`https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js`
`https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js`
`https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js`
`https://code.jquery.com/jquery-3.5.1.slim.min.js`
`https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js`
`https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js`

``` js
const sortBtn = document.querySelector("#select");
const userList = document.querySelector(".userList");
let dataList = [];
let columns = ["完成率"];
let category = [];
const url =
	"https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json";

axios
	.get(url)
	.then((res) => {
		dataList = res.data;
		sortSelect(dataList, select.value);
		renderlist(dataList);
	})
	.catch((err) => {
		console.log(err);
	});

function sort(data, select) {
	if (select === "id") {
		dataList.sort((a, b) => a.id - b.id);
	} else if (select === "process") {
		dataList.sort((a, b) => parseInt(b.process) - parseInt(a.process));
	}
	dataList.forEach((user, index) => {
		if (parseInt(user.process) > 0) {
			columns.push(parseInt(user.process));
			category.push(user.name);
		}
	});
}

function sortSelect() {
	columns = ["完成率"];
	category = [];
	sort(dataList, select.value);
	render(columns, category);
	renderlist(dataList);
}

function renderlist(data) {
	let str = "";
	data.forEach((user) => {
		str += `
			<tr>
      	<th scope="row">${user.id}</th>
      	<td>${user.name}</td>
      	<td>${user.process}</td>
      </tr>`;
	});
	userList.innerHTML = str;
}

function render() {
	const chart = c3.generate({
		bindto: "#chart",
		data: {
			columns: [[...columns]],
			type: "bar",
			colors: {
				完成率: function (d) {
					return "#" + (0xff0000 + (d.value - 60) * 256 * 3).toString(16);
				}
			}
		},
		size: {
			height: category.length * 20, //調整圖表高度
			width: columns.length * 4
		},
		axis: {
			rotated: true,
			y: {
				show: true,
				label: {
					text: "完成率(%)",
					position: "outer-middle"
				}
			},
			x: {
				show: true,
				type: "category",
				categories: category,
				label: {
					text: "參加名單",
					position: "outer-middle"
				}
			}
		}
	});
}

sortBtn.addEventListener("change", sortSelect);
```
:::