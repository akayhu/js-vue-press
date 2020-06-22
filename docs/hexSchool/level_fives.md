# 第五關：變數實作情境題

你現在是美式餐廳的櫃檯收銀員，但老闆因為預算有限，所以沒有買收銀機，所以你只能透過 JavaScript 來幫顧客結帳。<br /><br />
以下變數都不可變更：

## 第一題 顧客 Bob 向店員詢價
顧客 Bob：「請問我要買 4 個漢堡，30 份薯條，總共多少？」

<img src="https://i.imgur.com/CmHOgT3.png" />

::: tip 答：
``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var bobTotal; 

// 計算總消費額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

bobTotal = consumptionTotal(4, 30);

console.log("Bob 您好，您詢問的金額總計為" + bobTotal + "元");
```
:::

::: warning 說明：
解法沒有唯一，依題目敘述，也可以直接寫成以下寫法
``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var bobTotal; 

bobTotal = (hamburgerPrice * 4) + (friesPrice * 30);

console.log("Bob 您好，您詢問的金額總計為" + bobTotal + "元");
```
缺點是比較不彈性，用函式是比較彈性的用帶入參數方式算出總金額
:::

> 補充說明<br />
> 因為程式碼第3行已經宣告了 var bobTotal 全域變數，所以後面可以直接拿來做使用<br />
> return 為回傳意思，故:
> ```js
> function consumptionTotal(hamburgerNumber, friesNumber) {
>   return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
> }
>
> bobTotal = consumptionTotal(4, 30);
> // 會把函式運算完的結果值回傳給 bobTotal 變數
> // 值帶入函式後運算式會變成 return (50 * 4) + (40 * 30)，運算結果後就變成 return 1400
> // 再回傳給 bobTotal，所以 bobTotal 會等於 1400
> ```

## 第二題 錢包剩下多少錢

mark 錢包裡有 200 元，買了一個漢堡，三個薯條，他還剩下多少錢？

<img src="https://i.imgur.com/dHRMz5v.png" />

::: tip 答：
``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var markWallet = 200;
var markTotal;

// 計算總消費金額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

markTotal = markWallet - consumptionTotal(1, 3);

console.log("馬克買完東西後，錢包剩下" + markTotal + "元");
```
:::

::: warning 說明：
計算的函示與第一題一模一樣，這就是彈性的用處，就是情境若換人購買的數量不同，只要把參數帶入購買的數量就好<br />
所以會變成 markTotal = 200 - 170，所以 markTotal = 30 元
:::

## 第三題 顧客 Mary 提供折扣券

顧客 Mary 身上有 5000 元，想要買 10 份漢堡、10 份薯條，因為他有會員卡，所以可以打九折優惠，請問他還剩下多少錢？

<img src="https://i.imgur.com/su5ZNi5.png" />

::: tip 答：
``` js
var hamburgerPrice = 50;
var friesPrice = 40;
var sale = 0.9;
var maryWallet = 5000;
var maryTotal;

// 計算總消費金額函式
function consumptionTotal(hamburgerNumber, friesNumber) {
  return (hamburgerPrice * hamburgerNumber) + (friesPrice * friesNumber);
}

maryTotal = maryWallet - (consumptionTotal(10, 10) * sale);

console.log("Mary 買完東西後，錢包剩下" + maryTotal + "元");
```
:::

::: warning 說明：
計算的函示與第一題一模一樣，這就是彈性的用處，就是情境若換人購買的數量不同，只要把參數帶入購買的數量就好<br />
所以會變成 maryTotal = 5000 - (900 * 0.9)，所以 markTotal = 4190 元
:::