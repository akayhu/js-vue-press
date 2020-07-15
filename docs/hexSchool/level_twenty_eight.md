# 第二十八關：陣列排序進度

::: theorem 情境：
禿頭俠掛掉電話，向小杰說：「客戶需求來了！就是--」

小杰：「等等，我想問下，那我現在是這裡工程師嘍？那我薪水有變多嗎？」

禿頭俠一臉狐疑地說：「老闆其實只有交代你會來幫忙，沒有提到你是什麼職稱，不然你想應徵什麼？我可以跟人資談談看，只不過你得先幫我解決我的問題再說」

小杰：「慢著，你還沒聽到我的薪水啊，我不 care 我的職稱，但薪水這個一定得問清楚，不然沒門！」

禿頭俠從口袋掏出薄薄的薪資袋說：「年輕人終究是年輕人，以為有這個籌碼就可以談判了，你忘了你們餐廳下個月就準備發年終獎金了嗎？其實老闆早就先給我了，你不想做也沒關係，那這份薪水就歸--」

小杰：：「可惡啊！來吧來吧任何問題都交給我吧~~」
:::

## 題目

這次客戶希望他們的內容可以做**完課率排名功能**，試著撈客戶提供的這隻 [API](https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json)，撈出資料後，依照每個物件的 process 來進行進度排序，範例格式如下圖。

```
<ul>
 <li>第 1 名是廖洧杰，他的特訓班完成度是 33%</li>
 <li>第 2 名是王小明，他的特訓班完成度是 30%</li>
</ul>
```

::: tip 參考解答：
``` html
<ul class="userList"></ul>
```

``` js
const userList = document.querySelector(".userList");
const url = "https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json";
let dataList = [];

axios
	.get(url)
	.then((res) => {
		dataList = res.data;
		getData(dataList);
	})
	.catch((err) => {
		console.log(err);
	});

function getData(data) {
	let str = "";
	data
		.sort((a, b) => parseInt(b.process) - parseInt(a.process))
		.forEach((user, index) => {
			str += `
				<li>第 ${index + 1} 名是 ${user.name}，他的特訓班完成度是${user.process}</li>`;
		});
	userList.innerHTML = str;
}
```
:::