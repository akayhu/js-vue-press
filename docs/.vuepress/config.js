module.exports = {
  title: 'Akay Hu Javascript blog',
  description: 'Akay Hu的網站',
  // 注入到當前頁面的 HTML <head> 中的標籤
  // head: [
  //   ['link', { rel: 'manifest', href: '/photo.jpg' }],
  //   ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  // ],
  // 語言
  // locales: {
  //   '/': { lang: 'en-US'},
  //   '/zh/': { lang: 'zh-CN'}
  // },
  themeConfig: {
    // 導航欄 Logo
    // logo: '/assets/img/logo.png',
    // 導航欄配置
    nav:[
      {text: '首頁', link: '/' }
      // {text: '關於我', link: '/'}
    ],
    // 側邊欄配置
    // sidebar: [
    //   ['', '基礎'],
    //   ['/', '內容簡介'],
    //   ['/test', '測試']
    // ],
    sidebar: [
      {
        // 標題
        title: '六角學院 js 學徒特訓班',
        // 可選的, 標題的跳轉鏈接，應為絕對路徑且必須存在
        // path: '/foo/',
        // 可選的, 是否可展開，默認值是 true
        collapsable: true,
        // 可選的, 默認值是 1
        sidebarDepth: 10,
        children: [
          ['/hexSchool/level_one', '第一關：JS 環境與變數環境'],
          ['/hexSchool/level_two', '第二關：變數命名'],
          ['/hexSchool/level_three', '第三關：變數型別判斷與弱型別轉型'],
          ['/hexSchool/level_four', '第四關：比較運算子'],
          ['/hexSchool/level_fives', '第五關：變數實作情境題'],
          ['/hexSchool/level_six', '第六關：邏輯運算子'],
          ['/hexSchool/level_seven', '第七關：if'],
          ['/hexSchool/level_eight', '第八關：if 與指派運算子'],
          ['/hexSchool/level_nine', '第九關：觀念總整理'],
          ['/hexSchool/level_ten', '第十關：函式參數設計'],
          ['/hexSchool/level_eleven', '第十一關：函式參數再練習'],
          ['/hexSchool/level_twelve', '第十二關：DOM 操作'],
          ['/hexSchool/level_thirteen', '第十三關：函式 + if 判斷']
        ]
      },
      // {
      //   title: 'Group 2',
      //   children: [ /* ... */ ]
      // }
    ],
    // 顯示所有頁面的標題鏈接
    displayAllHeaders: true,
    // sidebar: 'auto',
    // 側邊欄顯示2級
    // sidebarDepth: 2,
    lastUpdated: '最後更新'
  },
  // 是否開啟 PWA
  // serviceWorker: true,
  // 部署到github相關的配置
  base: '/js-vue-press/',
  markdown: {
    // 代碼塊顯示行號
    lineNumbers: true
  }
};