# 第十五關：物件運用 - 資料與渲染分離

## 題目

這個 Code 有刻意遺留了些不完整的地方，像是 `BMIData` 的物件沒有將條件寫完整

將上一題的 Code 跟這題的 Code 進行比較，看看差異在哪裡，並試著依照自己的邏輯寫一遍。

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