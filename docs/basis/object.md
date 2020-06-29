# 物件

建立物件有兩種方式

* 宣告式(declarative)或稱字面值(literal)，例如：

``` js
var obj = {
  name: "Jack"
};
```

* 建構形式(constructed form)，例如：

``` js
var obj = new Object();
obj.name = "Jack";

// 這種方式其實很少用，可以知道就好
```

簡單來說，兩者主要的差別是新增屬性時，字面值可在物件建立時一次全部加入，但建構形式必須在物件建立後一筆一筆新增。

## 屬性

屬性就是 key/value 的組合

* key： 也就是這個屬性的名稱，任何字串都可以作為 key。
* value： 在 value 中可以放入任何型別的值，當然也包括物件。



## 讀取物件屬性

操作屬性主要有兩種方法

* 利用 `.` 操作屬性，只能在 key 不包含符號的狀況下使用，因為 JavaScript 並不會知道後面的符號是 key 的一部分
* 利用 `[]` 操作屬性，可接受 key 中有符號，可以接受變數，會將變數中的值自動轉換成 string 再去讀取

舉例：

``` js
var myObj = {
  prop1: 'hello world',
  "prop-2": 123
};

console.log(myObj.prop1); // 顯示 "hello world"
console.log(myObj.prop-2); // 顯示 NaN

console.log(myObj[prop1]); // 顯示 "hello world"
console.log(myObj["prop-2"]);	// 顯示 123
```

## 新增/更新物件屬性

新增與更新屬性的語法是一樣的，只要對 屬性 進行指派值的動作，就可以 新增/更新 屬性

例如：

``` js
var myObj = {
  prop1: "hello world"
};

myObj[prop1] = "hey world"; // 直接覆蓋原本的 prop1 值
// myObj.prop1 = "hey world"; 或這樣寫

myObj[prop2] = "yes"; // 給予新的變數並賦予 "yes" 值
// myObj.prop2 = "yes"; 或這樣寫

console.log(myObj.prop1); // 顯示 "hey world"

console.log(myObj); // 顯示 {prop1: "hello world", prop2: "yes"}
```

## 刪除物件屬性

我們可以利用 `delete` 來刪除屬性

例如：

``` js
var myObj = {
  prop1: "hello world",
  prop2: 123,
  prop3: 456
};

delete myObj.prop1; // 刪除 prop1 屬性

console.log(myObj); // 顯示 {prop2: 123, prop3: 456}
```

## 其他教學網址

[JavaScript 物件基礎概念](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Basics)<br />
[JavaScript | 關於 Object ，一口氣全說完](https://medium.com/enjoy-life-enjoy-coding/javascript-%E9%97%9C%E6%96%BC-object-%E4%B8%80%E5%8F%A3%E6%B0%A3%E5%85%A8%E8%AA%AA%E5%AE%8C-4bb924bcc79f)