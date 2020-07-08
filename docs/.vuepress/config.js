module.exports = {
  title: 'Akay Hu Javascript 筆記部落格',
  description: 'Akay Hu 的 Javascript 筆記部落格',
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
  plugins: [
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
  ],
  themeConfig: {
    // 導航欄 Logo
    // logo: '/assets/img/logo.png',
    // 導航欄配置
    nav:[
      {text: '首頁', link: '/' },
      {text: '六角學院', link: 'https://www.hexschool.com/'}
      // {text: '關於我', link: '/'}
    ],
    // 側邊欄配置
    sidebar: [
      {
        title: 'Javascript 基礎',
        collapsable: true,
        sidebarDepth: 0,
        children: [
          ['/basis/surroundings', 'JS 環境'],
          ['/basis/variable', 'JS 型別與變數'],
          ['/basis/function', 'JS DOM 與 函式'],
          ['/basis/monitor', 'JS 監聽'],
          ['/basis/array', 'JS 陣列'],
          ['/basis/object', 'JS 物件'],
          ['/basis/forEach', 'JS forEach'],
          ['/basis/ajax', 'JS AJAX 與資料處理'],
          ['/basis/axios', 'JS Axios 訪問 API']
        ]
      },
      {
        // 標題
        title: '六角學院 js 學徒特訓班試題',
        // 可選的, 標題的跳轉鏈接，應為絕對路徑且必須存在
        // path: '/hexSchool/',
        // 可選的, 是否可展開，默認值是 true
        collapsable: true,
        // 可選的, 默認值是 1
        sidebarDepth: 0,
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
          ['/hexSchool/level_thirteen', '第十三關：函式 + if 判斷'],
          ['/hexSchool/level_fourteen', '第十四關：監聽與函式設計'],
          ['/hexSchool/level_fifteen', '第十五關：物件運用 - 資料與渲染分離'],
          ['/hexSchool/level_sixteen', '第十六關：forEach 與 HTML 字串累加'],
          ['/hexSchool/level_seventeen', '第十七關：innerHTML + forEach'],
          ['/hexSchool/level_eighteen', '第十八關：字串相加 innerHTML + 樣式搭配'],
          ['/hexSchool/level_nineteen', '第十九關：程式碼邏輯'],
          ['/hexSchool/level_twenty', '第二十關：BMI 計算機團戰關卡'],
          ['/hexSchool/level_twenty_one', '第二十一關：BMI 追加功能'],
          ['/hexSchool/level_twenty_two', '第二十二關：陣列調整'],
          ['/hexSchool/level_twenty_three', '第二十三關：資料格式處理，陣列 unshift']
        ]
      },
      {
        title: '工具、套件',
        collapsable: true,
        sidebarDepth: 0,
        children: [
          ['/toolKit/vscode', '程式碼編輯器： VSCode'],
          ['/toolKit/slack', '團隊溝通平台：Slack'],
          ['/toolKit/travis', '自動化上傳部署：Travis CI'],
          ['/toolKit/liveServer', '開發本地服務器：Live Server']
        ]
      }
    ],
    // 頁面滾動
    smoothScroll: true,
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
  repo: 'https://akayhu.github.io/js-vue-press/',
  markdown: {
    // 代碼塊顯示行號
    lineNumbers: true
  }
};