# 第三十四關：圓餅圖分析

::: theorem 情境：
禿頭俠：「客戶又有奇怪需求了.. 他說他搜集以下的圖表」<br />
小杰：「來吧來吧~~ 再奇怪的需求我都不怕了~~」
:::

## 題目

客戶說，他想要觀察每個參賽者的「**姓名長度的字元數**」，規則如下：

<img src="https://i.imgur.com/EdU62Fk.png" />

## 如何判斷字元數量，請將你找到的部落格文章放到此處提供給其他勇者參考

- [判斷中英文字元長度](https://blog.xuite.net/revia.yeh/projects/9591895-%E5%88%A4%E6%96%B7%E4%B8%AD%E8%8B%B1%E6%96%87%E5%AD%97%E4%B8%B2%E7%9A%84%E9%95%B7%E5%BA%A6)
- [正規表示式除字串中所有標點符號](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/284715/) 如果中文取代 **,注意正規表示 * 要刪掉避免錯誤
- [正則表達式的規則](http://www.w3big.com/zh-TW/regexp/regexp-syntax.html) - 這邊只要注意特殊字符有哪些即可
- [正則表達式介紹](https://medium.com/@moojing/javascript-%E5%88%9D%E6%8E%A2regex-%E6%AD%A3%E8%A6%8F%E8%A1%A8%E9%81%94%E5%BC%8F-1da2f4d94795)
- [使用 `String.prototype.charCodeAt()` 判斷字元是中文或英文](https://blog.csdn.net/qq_43437571/article/details/106088271) - 判斷字元是否超過 255 超過即代表為中文(缺點為需要把字元一個一個拆開)
- [replace() 方法](https://www.w3school.com.cn/jsref/jsref_replace.asp) - 講解 replace() 的用法
- [正則匹配範例](https://gist.github.com/Codyooo/18ddfcb2bc4952e8a3e3f05871b18042)

::: tip 參考解答
``` html
<div id="chart"></div>
```

須引入檔案：
https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.css
https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js
https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js
https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.18/c3.min.js

``` js
var url =
  "https://raw.githubusercontent.com/hexschool/hexschoolNewbieJS/master/data.json";
let overSevenNum = 0;
let underSevenNum = 0;

axios.get(url).then((res) => {
  res.data.forEach((item) => {
    if (item.name.replace(/[^\x00-\xff]/g, "**").length <= 6) {
      underSevenNum += 1;
    } else {
      overSevenNum += 1;
    }
  });
  load();
});

function load() {
  let chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["參賽者姓名在6個(含)字元數以下", underSevenNum],
        ["參賽者姓名在7個(含)字元數以上", overSevenNum]
      ],
      //自訂圖表類型
      type: "pie"
    }
  });
}
```
:::