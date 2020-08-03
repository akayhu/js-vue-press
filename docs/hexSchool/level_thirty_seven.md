# 第三十七關：let、const

::: theorem 情境：
這幾天小杰都在埋頭於 JS 書籍裡，因為禿頭俠說，目前除了 var 以外，還可以用 let 與 const 來宣告變數，但他壓根不了解這兩個語法的目的。還請大家幫幫小杰尋找技術文章，幫助它吸收吧！
:::

## 問題

還請挑戰者們分享你找到的 JS ES6 let 與 const 文章，補充在下方列表，並嘗試自己寫一些範例，並回報於 Slack 上

## let、const 教學文章

1. [ES6 開始的新生活 let, const](https://ithelp.ithome.com.tw/articles/10192432)
2. [ECMAScript6 入門：var、let、const 差異]( https://w3c.hexschool.com/blog/530adff5)
3. [JS 筆記 - 認識 ES6](https://hsuchihting.github.io/javascript/20200713/2533085867/)
4. [JS 筆記 - ES6 let 與 const 特性](https://hsuchihting.github.io/javascript/20200713/1088942586/)
5. [JS 筆記 - ES6 的 let 與 for 用法](https://hsuchihting.github.io/javascript/20200713/3739155149/)
6. [鐵人賽：ES6 開始的新生活 let, const](https://wcc723.github.io/javascript/2017/12/20/javascript-es6-let-const/)
7. [Day 05: ES6篇 - let與const](https://ithelp.ithome.com.tw/articles/10185142)
8. [JavaScript: var, let, const 差異](https://medium.com/@totoroLiu/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230)
9. [JavaScript ES6 Block Scope - let, const](https://www.fooish.com/javascript/ES6/let-const-block-scope.html)
10. [Day26 var 與 ES6 let const 差異](https://ithelp.ithome.com.tw/articles/10209121)
11. [ES6 更嚴謹安全的 let 和 const ](https://ithelp.ithome.com.tw/articles/10203715)

::: tip 參考解答
``` js
//一、作用域 if, else, for, while等等區塊語句中，var宣告的變數仍然可被存取

//var
function fn1() {
	var a = 10;
}

if (true) {
	var b = 20;
}

console.log(a); // a is not defined
console.log(b); // 20

//let、const
function fn2() {
	let a = 10;
}

if (true) {
	const b = 20;
}

console.log(a); // a is not defined
console.log(b); // b is not defined

//二、const vs let
//const針對是常數的定義，不可再指定
const a = 10;
a = 20; //Assignment to constant variable.

let a = 10;
a = 20;
console.log(a); //20
```
:::