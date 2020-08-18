(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{396:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"第三十六關：es6-起步走-template-string-樣板字串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三十六關：es6-起步走-template-string-樣板字串"}},[e._v("#")]),e._v(" 第三十六關：ES6 起步走 - Template String 樣板字串")]),e._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[e._v("情境：")]),a("p",[e._v("明明小杰都已經完成任務，照理來說應該幫他加薪，但禿頭俠卻說公司擋掉了他的加薪申請。")]),e._v(" "),a("p",[e._v("原因是技術主管認為他寫的 Code 太菜了，他們認為現在已經是 2020 年，JavaScript 的寫法已經晉升到 ES6、7，所以請小杰先好好升級自己的程式碼，才可以跟公司團隊一起開發。")])]),a("h2",{attrs:{id:"問題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#問題"}},[e._v("#")]),e._v(" 問題")]),e._v(" "),a("p",[e._v("禿頭俠說，他看了小杰"),a("a",{attrs:{href:"https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/https%3A%2F%2Fhackmd.io%2F3cuxdNsWS6qLNh6KqVYVkw%3Fview",target:"_blank",rel:"noopener noreferrer"}},[e._v("第 20 關"),a("OutboundLink")],1),e._v("程式碼，發現他的字串相加語法可以用 "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10192949",target:"_blank",rel:"noopener noreferrer"}},[e._v("Template String 樣板字串"),a("OutboundLink")],1),e._v("來改寫。")]),e._v(" "),a("p",[e._v("例如原本寫法是")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var people = [\n  {\n    name: '小明',\n    friends: 2\n  },\n  {\n    name: '阿姨',\n    friends: 999\n  },\n  {\n    name: '杰倫',\n    friends: 0\n  }\n]\n\nlet originString = '我叫做 ' + people[0].name; // 過去的寫法\nlet originUl = '<ul>\\\n  <li>我叫做 ' + people[0].name + '</li>\\\n  <li>我叫做 ' + people[1].name + '</li>\\\n  <li>我叫做 ' + people[2].name + '</li>\\\n</ul>'; // 多行的寫法 \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("p",[e._v("用 ES6 寫法可以改為")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let ul = `\n  <ul>\n    <li>我叫做 ${people[0].name}</li>\n    <li>我叫做 ${people[1].name}</li>\n    <li>我叫做 ${people[2].name}</li>\n  </ul>\n`\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("請改寫您"),a("a",{attrs:{href:"https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/Sk-_oGL2U/https%3A%2F%2Fhackmd.io%2F3cuxdNsWS6qLNh6KqVYVkw%3Fview",target:"_blank",rel:"noopener noreferrer"}},[e._v("第 20 關"),a("OutboundLink")],1),e._v("的字串相加邏輯，以符合 ES6 寫法")]),e._v(" "),a("h2",{attrs:{id:"如果你已經早就會-es6-字串處理，請觀看以下文章，挑選一個你不會的技術觀念，並分享你學到了什麼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果你已經早就會-es6-字串處理，請觀看以下文章，挑選一個你不會的技術觀念，並分享你學到了什麼"}},[e._v("#")]),e._v(" 如果你已經早就會 ES6 字串處理，請觀看以下文章，挑選一個你不會的技術觀念，並分享你學到了什麼")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20083608/ironman/1354",target:"_blank",rel:"noopener noreferrer"}},[e._v("邁向 JavaScript 勇者之路"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20065504/ironman/1259",target:"_blank",rel:"noopener noreferrer"}},[e._v("重新認識 JavaScript"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES6 入門手冊(較於艱深)"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[e._v("#")]),e._v(" fetch")]),e._v(" "),a("p",[e._v("除了使用 axios套件來抓取遠端 JSON資料，還有一個原生語法")]),e._v(" "),a("ul",[a("li",[e._v("參考 邁向 JavaScript 勇者之路")])]),e._v(" "),a("h2",{attrs:{id:"以下分享您的心得文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以下分享您的心得文章"}},[e._v("#")]),e._v(" 以下分享您的心得文章")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hackmd.io/@5-dKGDt1RDCoDDAr4DP-qg/B1Lxu-3lP",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS 學徒特訓班 36 ES6 起步走 - Fetch 練習筆記"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("參考解答")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://hackmd.io/@sean666/H1Kjwisxw",target:"_blank",rel:"noopener noreferrer"}},[e._v("第三十六關 - ES6 起步走 - Template String 樣板字串"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);