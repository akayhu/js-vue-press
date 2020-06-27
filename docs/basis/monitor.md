# 監聽 addEventListener

js 裡面有個內建語法是 `addEventListener` 函式，主要是用來 `監聽(監視)`

addEventListener() 基本上有三個參數，分別是「事件名稱」、「事件的處理器」(事件觸發時執行的 function)，以及一個「Boolean」值，由這個 Boolean 決定事件是以「捕獲」或「冒泡」機制執行，若不指定則預設為「冒泡」。

若是要解除事件的註冊，則是透過 `removeEventListener()` 來取消。

removeEventListener() 的三個參數與 addEventListener() 一樣，分別是「事件名稱」、「事件的處理器」以及「捕獲」或「冒泡」的機制。

監聽語法

``` js
// 選取一個 DOM，註冊監聽，當它被點擊時，就執行 function
document.querySelect('.send').addEventListener("click", function() {
  alert("hello");
}, false);

// 取消監聽
document.querySelect('.send').removeEventListener("click", function() {
  alert("hello");
}, false);
```

[event](https://www.w3school.com.cn/jsref/dom_obj_event.asp)

| 屬性        | 此事件發生在何時...           |
| ------------- |:-------------:|
| onabort     | 圖像的加載被中斷 |
| onblur     | 元素失去焦點      |
| onchange | 域的內容被改變      |
| onclick | 當用戶點擊某個對象時調用的事件句柄      |
| ondblclick | 當用戶雙擊某個對象時調用的事件句柄     |
| onerror | 在加載文檔或圖像時發生錯誤      |
| onfocus | 元素獲得焦點      |
| onkeydown | 某個鍵盤按鍵被按下      |
| onkeypress | 某個鍵盤按鍵被按下並鬆開      |
| onkeyup | 某個鍵盤按鍵被鬆開      |
| onload | 一張頁面或一幅圖像完成加載      |
| onmousedown | 鼠標按鈕被按下      |
| onmousemove | 鼠標被移動      |
| onmouseout | 鼠標從某元素移開      |
| onmouseover | 鼠標移到某元素之上      |
| onmouseup | 鼠標按鍵被鬆開      |
| onreset | 重置按鈕被點擊      |
| onresize | 窗口或框架被重新調整大小      |
| onselect | 文本被選中      |
| onsubmit | 確認按鈕被點擊      |
| onunload | 用戶退出頁面     |


## 在 HTML 加上事件屬性
``` html
<div onclick="func()">區塊點擊</div>
```