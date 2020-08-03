# 第三十六關：ES6 起步走 - Template String 樣板字串

::: theorem 情境：
明明小杰都已經完成任務，照理來說應該幫他加薪，但禿頭俠卻說公司擋掉了他的加薪申請。

原因是技術主管認為他寫的 Code 太菜了，他們認為現在已經是 2020 年，JavaScript 的寫法已經晉升到 ES6、7，所以請小杰先好好升級自己的程式碼，才可以跟公司團隊一起開發。
:::

## 問題

禿頭俠說，他看了小杰[第 20 關](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/https%3A%2F%2Fhackmd.io%2F3cuxdNsWS6qLNh6KqVYVkw%3Fview)程式碼，發現他的字串相加語法可以用 [Template String 樣板字串](https://ithelp.ithome.com.tw/articles/10192949)來改寫。

例如原本寫法是

```
var people = [
  {
    name: '小明',
    friends: 2
  },
  {
    name: '阿姨',
    friends: 999
  },
  {
    name: '杰倫',
    friends: 0
  }
]

let originString = '我叫做 ' + people[0].name; // 過去的寫法
let originUl = '<ul>\
  <li>我叫做 ' + people[0].name + '</li>\
  <li>我叫做 ' + people[1].name + '</li>\
  <li>我叫做 ' + people[2].name + '</li>\
</ul>'; // 多行的寫法 
```

用 ES6 寫法可以改為

```
let ul = `
  <ul>
    <li>我叫做 ${people[0].name}</li>
    <li>我叫做 ${people[1].name}</li>
    <li>我叫做 ${people[2].name}</li>
  </ul>
`
```

請改寫您[第 20 關](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/https%3A%2F%2Fhackmd.io%2F3cuxdNsWS6qLNh6KqVYVkw%3Fview)的字串相加邏輯，以符合 ES6 寫法

## 如果你已經早就會 ES6 字串處理，請觀看以下文章，挑選一個你不會的技術觀念，並分享你學到了什麼

* [邁向 JavaScript 勇者之路](https://ithelp.ithome.com.tw/users/20083608/ironman/1354)
* [重新認識 JavaScript](https://ithelp.ithome.com.tw/users/20065504/ironman/1259)
* [ES6 入門手冊(較於艱深)](https://es6.ruanyifeng.com/)

## fetch 

除了使用 axios套件來抓取遠端 JSON資料，還有一個原生語法 

- 參考 邁向 JavaScript 勇者之路

## 以下分享您的心得文章
* [JS 學徒特訓班 36 ES6 起步走 - Fetch 練習筆記](https://hackmd.io/@5-dKGDt1RDCoDDAr4DP-qg/B1Lxu-3lP)

::: tip 參考解答
[第三十六關 - ES6 起步走 - Template String 樣板字串](https://hackmd.io/@sean666/H1Kjwisxw)
:::

