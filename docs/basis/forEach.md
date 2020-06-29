# forEach

forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。

白話一點解釋就是，**有幾筆資料，他就執行幾次函示**

例如：

``` js
const array1 = ['a', 'b', 'c'];

array1.forEach((element, index) => {
  console.log(element);
  console.log(index);
});

// 顯示: "a" 0
// 顯示: "b" 1
// 顯示: "c" 2
```

函式將會把 Array 中的每一個元素作為參數，帶進函式裡，每個元素各執行一次

以上面範例為例，`element`變數是代表目前被處理中的 Array 之中的那個元素

`index`變數代表目前被處理中的 Array 之中的那個元素的 index，可以想成就是 Array 的第幾個位置

## 其他教學網址

[Array.prototype.forEach()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)<br />
[Array 原型的 forEach 有多好用？](https://medium.com/@realdennis/array-%E5%8E%9F%E5%9E%8B%E7%9A%84-foreach-%E6%9C%89%E5%A4%9A%E5%A5%BD%E7%94%A8-%E5%AD%B8%E6%9C%83%E9%AB%98%E9%9A%8E%E5%87%BD%E6%95%B8%E4%B9%8B%E5%BE%8C%E9%83%BD%E4%B8%8D%E6%83%B3%E5%AF%AB-javascript-%E4%BB%A5%E5%A4%96%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80%E4%BA%86-dc4b594a045a)<br />
[JavaScript 陣列處理方法 [filter(), find(), forEach(), map(), every(), some(), reduce()]](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/)<br />
[JS 迴圈升級的陣列 Array 方法 forEach()](https://ithelp.ithome.com.tw/articles/10228571)