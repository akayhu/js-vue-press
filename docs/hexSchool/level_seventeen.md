# 第十七關：innerHTML + forEach

## 題目

明明陣列裡面有五筆資料，但寫出來的程式碼，列表永遠只顯示一筆資料，究竟哪裡觀念有問題呢？並思考：<br />

1. str 放 forEach 外頭跟裡面的差異
2. innerHTML 放 forEach 外頭跟裡面的差異
3. innerHTML 當要寫內容進去時，會不會將裡面內容給覆蓋掉？

[複製題目](https://codepen.io/liao/pen/rNxmMGv?editors=1010)

<img src="https://i.imgur.com/gjDmrIJ.png" />

::: tip 參考 Erica 解答：
1. 放在 forEach 外面：只要宣告一次，先準備好位置，執行的時候把結果加上去就可以了<br />
放在 forEach 裡面：每次都要重新宣告一次 str，每次都會被清空，所以只會顯示最後一筆資料

2. innerHTML 放在 forEach 裡面，會把 list 做重複累加，假設：
``` js
data.forEach(function(item, index) {
  str += `${index}`;
  list.innerHTML = str;
  console.log(list);
})
```
印出
``` html
"<ul class='list'>0</ul>"
"<ul class='list'>01</ul>"
"<ul class='list'>012</ul>"
"<ul class='list'>0123</ul>"
"<ul class='list'>01234</ul>"
```
如果放在 forEach 外面，就會先在 forEach 裡面先進行字串累加，最後再把字串放到 list 裡面
``` js
data.forEach(function(item, index) {
  str += `${index}`;
})
list.innerHTML = str;
console.log(list);
```
印出
``` html
"<ul class='list'>01234</ul>"
```

3. 會喔，每次都會把舊有內容重新覆蓋
:::