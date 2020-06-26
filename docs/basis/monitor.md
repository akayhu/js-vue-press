# 監聽 addEventListener

js 裡面有個內建語法是 `addEventListener` 函式，主要是用來 `監聽(監視)`

[event](https://www.w3school.com.cn/jsref/dom_obj_event.asp)

addEventListener() 基本上有三個參數，分別是「事件名稱」、「事件的處理器」(事件觸發時執行的 function)，以及一個「Boolean」值，由這個 Boolean 決定事件是以「捕獲」或「冒泡」機制執行，若不指定則預設為「冒泡」。

若是要解除事件的註冊，則是透過 `removeEventListener()` 來取消。

removeEventListener() 的三個參數與 addEventListener() 一樣，分別是「事件名稱」、「事件的處理器」以及「捕獲」或「冒泡」的機制。

監聽語法

``` js
// 選取一個 DOM，註冊監聽，當它被點擊時，就執行 function
document.querySelect('.send').addEventListener("click", function() {
  alert("hello");
});
```