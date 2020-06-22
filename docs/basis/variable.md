# 變數

## 原始型別(Primitive Type)

* <b>number (數字也稱字元)</b>
* <b>string (字串)</b>
* <b>boolean (布林)</b>
* <b>undefined (沒有被宣告，或者是已經宣告了，但是沒有賦值，也稱未定義)</b>
* null (沒有值)
* symbol

## number(數字) 與 string(字串) 型別

以街景來舉例原始型別內容

<img src="/js-vue-press/image/street_view.jpg" />

以街景圖來說，有哪些東西值得被記錄起來？

街景圖有很多都可以設定，像是招牌名稱是什麼招牌、幾輛摩托車、車子什麼型號...等等

那如何宣告變數呢？

`宣告 變數名稱 = 值`，寫法如下:

``` js
// 建立一個變數叫 sign，給予一個值為 日立變頻冷氣
// string 字串 
var sign = "日立變頻冷氣";

// 建立一個變數叫 phoneNumber ，給予一個值為 22622579
// number 數字
var phoneNumber = 22622579;
```

::: tip 注意
型別數字不用加引號，字串要加引號("")
:::

## boolean (布林)型別

只會有兩個值，一個是 `true`，另一個是 `false`

`true` 與 `false` 代表什麼意思？ 

譬如說開關有打開或沒打開，可以寫成：

``` js
// 開關有打開
var power = true;

// 開關沒打開
var power = false;
```

或是條件有沒有成立，可以寫成：

``` js
// 組織成立
var organization = true;

// 組織不成立
var organization = false;
```

::: tip 注意
型別布林不用加引號
:::

