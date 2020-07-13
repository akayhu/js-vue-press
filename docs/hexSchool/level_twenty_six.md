# 第二十六關：AJAX、Axios

::: theorem 情境：
黑道大哥：「嗯，感謝你的救火，讓我們有如期交付(數鈔票」<br />
小杰：「沒事的話我就先離開嘍~」

黑道大哥：「等等，你們老闆說如果妳寫完還沒到下班時間，就到這個地址上班，這是你們家老闆的另外一間公司。」

只見黑道大哥遞出了一張紙條，裡頭有一個非常陌生的地址。


小杰來到目的地後，看到一間明顯老舊的商業大樓，坐著會發出嘎---吱的電梯來到了四樓，映入眼簾的招牌名稱叫做「**梅添良救火資訊有限公司**」。

<img src="https://i.imgur.com/ogr9ddk.png" />

突然裡面暴衝出一位中年西裝禿頭男子，緊抓著小杰的手說：「你就是小杰吧！？快快快，十萬火急啊！！！」

小杰：「慢著慢著慢著，你是誰？」<br />
中年禿頭男：「別管那麼多了，我是禿頭俠，老闆要你快點處理這件事！就交給你啦！」

小杰：「**等等我是餐廳服務生啊，我不會救火啊~~~~**」

禿頭俠死命抓著小杰，拉進了人來人往的辦公室內，拖進後大門也隨之劇烈關閉。
:::

## 題目

最後小杰也放棄掙扎，聽禿頭俠快速的講解客戶要救火的項目，聽他描述，他的工作是屬於專案企劃(project manager)，有個案子在今天就要結案，所以必須盡量做出來。

他請小傑看這部[教學影片](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/%2FOvM4feYhSiCpLTjBgjIh_w)，試著撈他提供的這隻 [API](https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json)，撈出所有的姓名列表，至少先做個雛形讓客戶安心。範例如下圖。

<img src="https://i.imgur.com/2YgdoYj.png" />

::: tip 參考解答：
``` html
<ul class="userList"></ul>
```

引入 js `https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js`

``` js
const userList = document.querySelector(".userList");
const url =
	"https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json";

axios
	.get(url)
	.then((res) => {
		let str = "";
		res.data.forEach((user) => {
			str += `<li>${user.name}</li>`;
		});
		userList.innerHTML = str;
	})
	.catch((err) => {
		console.log(err);
	});
```
:::