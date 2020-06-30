# 第十五關：物件運用 - 資料與渲染分離

::: theorem 情境：
護理師：「小杰，你這樣子不行。」<br />
小杰：「什麼不行？」<br />
護理師：「我看不下去了，換我來吧。」<br />

只見護理師推開小杰，用著小杰從未見過的熱鍵指令，行雲流水般地在短短不到三分鐘改寫了小杰的程式邏輯。

小杰：「這.... 妳以前當過工程師嗎！？太厲害了吧！」<br />
護理師：「有些事情，你不要知道比較多會比較好 (推眼鏡」<br />
小杰：「那妳來幫我寫不就好了，還要我在這邊瞎忙！」<br />
護理師：「我可是很忙的，C01 的病房準備要開刀了，你先看看我的邏輯吧，下午我再來問問你吸收得怎麼樣。」<br />

小杰瞠目結舌地看著護理師寫得 Code，心裡想說看來我還是差得遠了，除了餐廳服務生做不好，想不到連寫 Code 也不如一個護理師。

小杰嘆了口氣，心裡想著：「好吧好吧我就是爛，我吸收起來變得更強就是了！」
:::

## 題目

以下是護理師改寫小杰的邏輯

護理師拿了之前工讀生的 Code 改寫，根本沒用小杰的。但可以看得出來，這個 Code 有刻意遺留了些不完整的地方，像是 `bmiData` 的物件沒有將條件寫完整，頗有想要再次考驗小杰的味道。

請各位將你們的 Code 跟護理師的進行比較，看看差異在哪裡，並試著依照自己的邏輯寫一遍。

這次 HTML 面板壞掉了，你唯一可以改的面板只有 CSS 與 JS 面板。

[複製題目](https://codepen.io/liao/pen/OJMpENO?editors=0010)

<img src="https://i.imgur.com/rxDhN84.png" />

::: tip 參考解答：
``` js
var height = document.querySelector('.height');
var kg = document.querySelector('.kg');
var send = document.querySelector('.send');
var bmiDOM = document.querySelector('.BMI');
var statusDOM = document.querySelector('.status');
var BMIData = {
  overThin: {
    class: "blue",
    statusText: "體重過輕"
  },
  normal: {
    class: "green",
    statusText: "正常"
  },
  heavy: {
    class: "purple",
    statusText: "過重"
  },
  lightHeavy: {
    class: "orange",
    statusText: "輕度肥胖"
  },
  midHeavy: {
    class: "brown",
    statusText: "中度肥胖"
  },
  reallyHeavy: {
    class: "red",
    statusText: "重度肥胖"
  }
};

function calculationBMI() {
  var thisHeight = parseInt(height.value); // parseInt() 方法請見說明
  var thisKg = parseInt(kg.value);
  var bmi = thisKg / (thisHeight / 100 * thisHeight / 100);

  bmi = bmi.toFixed(1); // toFixed() 方法請見說明

  if (bmi < 18.5) {
    render("overThin", bmi);
  } else if (bmi < 24 ) {
    render("normal", bmi);
  } else if (bmi < 27) {
    render("heavy", bmi);
  } else if (bmi < 30) {
    render("lightHeavy", bmi);
  } else if (bmi < 35) {
    render("midHeavy", bmi);
  } else {
    render("reallyHeavy", bmi);
  }
}

function render(status, bmiText) {
  bmiDOM.textContent = bmiText;
  statusDOM.textContent = BMIData[status].statusText;
  // statusDOM.classList = BMIData[status].class; // 方法一
  statusDOM.setAttribute('class', BMIData[status].class); // 方法二
}

send.addEventListener("click", function() { 
  calculationBMI();
});
```

``` css
.blue {
  color: blue;
}
.orange {
  color: orange;
}
.green {
  color: green;
}
.purple {
  color: purple;
}
.red {
  color: red;
}
.brown {
  color: brown;
}
```
:::

::: warning 說明：
[parseInt() 方法](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/parseInt)<br />
[toFixed() 方法](https://www.w3school.com.cn/jsref/jsref_tofixed.asp)
:::