# 第十九關：程式碼邏輯

::: theorem 情境：
過幾天就是 Beta 2.0 的交付日了，小杰已經經歷到好幾次改了又刪、刪了又改的窘境。

小杰想了想，其實他本來就是打算做個平凡的餐廳服務生就好，但遇到有人遇到困難，不免又想要出手幫助。

現在的小杰感覺自己每個都會一點，但是要整合在一起就有覺得好像都卡卡的，一直自我懷疑是否不適合寫程式。

想到這，她不免想到前幾天護理師說過的話：

護理師：「**這就是傳說中的撞牆期了，你要在既有的能力上加強，讓你突破這關卡**」

小杰：「我現在有充分感受到了，只是我不知道原來這麼卡啊，護理師救救我~」

護理師：「其實你師傅那時有嘗試寫了個版本，但是跟設計稿完全沒有符合，我想你就加減看一下吧，[程式碼連結](https://codepen.io/liao/pen/mdVwLPv?editors=1011)」

小杰：「但我想自己寫出來，總覺得看別人的 Code 就太遜了..」

護理師：「放下你的自尊心吧，在程式界裡甚至有個 GitHub，數百萬的人都會分享自己的 Code 在上頭，因為藉由開源公開程式碼的力量，互相參考討論程式碼，才會讓自己變強。」

小杰：「真..真的嗎！？」

護理師點點頭又接著說：「更何況你師傅的 BMI 的大 AI 體重計，**有 95% 的 Code 都是 Copy 其他工程師的套件**，他只有做整合的工作而已」

小杰虎軀一震：「這樣..這樣還能稱上自己做的東西嗎？」

護理師：「**你連整合的功力都不到，更別說自創門派了，快放下你幼稚的自尊心，吸收你當下最好吸收的資源，盡快讓自己變強吧！**」
:::

## 題目

小杰打開師傅的程式碼，才發現這程式碼其實是來自於 Vic 這位工程師的範例程式碼。

雖然跟設計稿有非常大的差異，但從程式邏輯中，慢慢掌握到了一些概念。

請解讀 Vic 的(程式碼)，並解讀以下邏輯是做了什麼事情：

[程式碼](https://codepen.io/liao/pen/mdVwLPv?editors=1011)

1. arrayBMIrecord 的陣列用途是什麼？
2. 請描述 calculateBMI 函式做了什麼事情
3. 請描述 render 函式做了什麼事情

以下為程式碼內容：

``` html
<input type="number" class="height" placeholder="請輸入您的身高(公分)" />
<input type="number" class="kg" placeholder="請輸入您的體重(公斤)" />
<input type="button" class="send" value="計算" />

<h4>BMI 紀錄</h4>
<ul class="list"></ul>
```

``` css
.text-primary {
  color: green;
}
.text-secondary {
  color: blue;
}
.text-warning {
  color: orange;
}
.text-danger {
  color: red;
}
```

``` js
// 重新命名: 元素名稱 + 客製化名稱
var inputHeight = document.querySelector('.height');
var inputKg = document.querySelector('.kg');
var btnSend = document.querySelector('.send');
var listRecord = document.querySelector('.list');
var arrayBMIrecord = [];
/* 定義物件資料，此為 BMIData 物件之所有屬性 */
var BMIData = {
  overThin: {
    class: "text-secondary",
    nameStatus: "體重過輕"
  },
  normal: {
    class: "text-primary",
    nameStatus: "正常"
  },
  warning: {
    class: "text-warning",
    nameStatus: "過重"
  },
  danger: {
    class: "text-danger",
    nameStatus: "危險"
  }
};

/* 渲染畫面 */
// forEach()，取出陣列所有物件並做處理
function render() {
  var str = '';
  arrayBMIrecord.forEach(function(item) {
    return str += '<li>BMI指數為 :' + item.BMI + 
                  ' 狀態是 <span class="' + 
                  BMIData[item.status].class + '">' + 
                  BMIData[item.status].nameStatus + '</span></li>'; 
  });
  listRecord.innerHTML = str;
}

/* 處理/加入資料 */
function calculateBMI() {
  var numberHeight = inputHeight.value;
  var numberKG = inputKg.value;
  var numberBMI = parseInt(numberKG / ((numberHeight / 100) **2));
  // 定義紀錄資料 
  var userRecord = {
    height: '',
    weight: '',
    BMI: '',
    status: '',
  };

  // 增加資料到物件
  userRecord.height = Number(numberHeight);
  userRecord.weight = Number(numberKG);
  userRecord.BMI = numberBMI;

  if (numberBMI < 18.5) {
    userRecord.status = 'overThin';
  } else if (numberBMI >= 18.5 && numberBMI <= 23) {
    userRecord.status = 'normal';
  } else if (numberBMI > 23 && numberBMI <=35) {
    userRecord.status = 'warning';
  } else {
    userRecord.status = 'danger';
  }

  // 增加物件到陣列
  arrayBMIrecord.push(userRecord);
  
  // 渲染畫面
  render();
  
  inputHeight.value = '';
  inputKg.value = '';
}

btnSend.addEventListener('click', calculateBMI);
```

::: tip 參考解答：
**1. arrayBMIrecord 的陣列用途是什麼？**<br />
將 bmi 相關的紀錄資料以物件形式存放在 arrayBMIrecord 陣列裡面，以便 render 透過 forEach 去呈現資料

**2. 請描述 calculateBMI 函式做了什麼事情**<br />
定義需要紀錄的資料並將輸入資料以物件方式存放，再新增到 arrayBMIrecord 的陣列中。再進行畫面渲染，最後再將輸入欄位清空

**3. 請描述 render 函式做了什麼事情**<br />
將 arrayBMIrecord 資料渲染到 listRecord 裡，讓資料呈現在畫面上。
:::

## 邏輯練習

如果你只想鍛鍊 JS 邏輯，可以挑選以下的程式碼複製起來

- [HexSchool-BMI (Eden Hsia)](https://github.com/Edenhsia/hexSchool-BMI)
- [HexSchool-BMI (Vic)](https://codepen.io/hsuan333/pen/XWXRQYY)
- [HexSchool-BMI (Tim Chen)](https://github.com/timchen0607/HexSchool-BMI) [Demo](https://timchen0607.github.io/HexSchool-BMI/)
- [HexSchool-BMI (hsin-yu)](https://codepen.io/tina2793778/pen/jOWwbRP?editors=1100)
- [HexSchool-BMI (Erica)](https://codepen.io/kaoru44689/pen/gOPRWGm)
- [HexSchool-BMI (Jason Hung)](https://github.com/brook110413/hexSchool-BMI) [Demo](https://brook110413.github.io/hexSchool-BMI/)
- [HexSchool-BMI (Leo Lee)](https://github.com/overactive1988/HexSchool_BMI_Calculator)