# 第二十九關：監聽切換排序功能

## 題目

禿頭俠又提到，客戶希望能夠針對 select 切換排序方式，還請依照以下 範例來設計。

PS：這次小杰發現今天的東西有點超出自己能力外，所以請 slack 的朋友，一起協助找資源，幫助他可以做出來，也請你將你找的資源文件加入到最下方：

``` html
<select>
  <option value="id">依照 id 編號排序(由1開始從上往下)</option>
  <option value="process">依照完課率排序(由最高到最低)</option>
</select>

// 以下為編號排序範例
<ul class="list">
  <li>編號 ID 1 為廖洧杰，他的完成進度為 5 %</li>
  <li>編號 ID 2 為王小明，他的完成進度為 33 %</li>
</ul>

// 以下為完課率排序範例
<ul class="list">
  <li>編號 ID 2 為王小明，他的完成進度為 33 %</li>
  <li>編號 ID 1 為廖洧杰，他的完成進度為 5 %</li>
</ul>
```

## 文件資源
* [[JS] 事件筆記（上）](https://medium.com/%E9%A6%AC%E6%A0%BC%E8%95%BE%E7%89%B9%E7%9A%84%E5%86%92%E9%9A%AA%E8%80%85%E6%97%A5%E8%AA%8C/js-%E4%BA%8B%E4%BB%B6%E7%AD%86%E8%A8%98-%E4%B8%8A-5377a572be51)
* [jQuery 筆記 - 讓網頁回到最頂點寫法](https://hsuchihting.github.io/jQuery/20200713/1759814760/)
* [js取float型小數點後兩位數的方法](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/286905/)
* [DOM Event 觸發事件](https://ithelp.ithome.com.tw/articles/10202307)
* [change - 表單內容更動內容時觸發 | Saffran's Blog](https://yuwensaf.github.io/c8a1ad27/)

::: tip 參考解答：
``` html
<div class="container mt-5">
	<select id="select" class="mb-5">
		<option value="id">依照 id 編號排序(由1開始從上往下)</option>
		<option value="process">依照完課率排序(由最高到最低)</option>
	</select>
	<table class="table table-striped">
		<thead class="thead-dark">
			<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col">完成率</th>
			</tr>
		</thead>
		<tbody class="userList">
		</tbody>
	</table>
</div>
```

``` js
const userList = document.querySelector(".userList");
const sortBtn = document.querySelector("#select");
const url =
  "https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json";
let dataList = [];

axios
	.get(url)
	.then((res) => {
		dataList = res.data;
		render(dataList);
	})
	.catch((err) => {
		console.log(err);
	});

function sort() {
	if (this.value === "process") {
		dataList.sort((a, b) => parseInt(b.process) - parseInt(a.process));
	} else {
		dataList.sort((a, b) => a.id - b.id);
	}
	render(dataList);
}

function render(data) {
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

sortBtn.addEventListener("change", sort);
```
:::