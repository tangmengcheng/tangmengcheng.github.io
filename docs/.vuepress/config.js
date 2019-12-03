module.exports = {
  base: '/',
  dest: './docs/.vuepress/dist',
  title: '技术博客文章总结',
  description: 'Welcome to come to my blog',
  themeConfig: {
    search: true, // 搜索
    searchMaxSuggestions: 10,
    repo: 'https://github.com/tangmengcheng/technology.git',
    repoLabel: 'Github',
    // 侧边栏
    sidebar: [
      {
        title: 'Vue 全家桶',
        collapsable: true,
        children: [
          'chapter1/',
          'chapter1/vue',
          'chapter1/vue-router',
          'chapter1/vuex',
          'chapter1/axios',
          'chapter1/ssr'
        ]
      },
      {
        title: 'React 全家桶',
        collapsable: true,
        children: [
          'chapter2/',
          'chapter2/react',
          'chapter2/react-router-dom',
          'chapter2/redux'
        ]
      },
      {
        title: 'JS',
        collapsable: true,
        children: [
          ['chapter3/', 'Introduction'],
          'chapter3/runtime',
          'chapter3/basic',
          'chapter3/copy',
        ]
      },
      {
        title: 'ES6+',
        collapsable: true,
        children: [
          'chapter4/'
        ]
      },
      {
        title: 'H5',
        collapsable: true,
        children: [
          'chapter5/'
        ]
      },
      {
        title: 'CSS3',
        collapsable: true,
        children: [
          'chapter6/',
          'chapter6/box',
          'chapter6/css-selector'
        ]
      },
      {
        title: 'jQuery',
        collapsable: true,
        children: [
          'chapter7/'
        ]
      },
      {
        title: 'HTTP',
        collapsable: true,
        children: [
          'chapter8/'
        ]
      },
      {
        title: 'Node',
        collapsable: true,
        children: [
          'chapter9/'
        ]
      },
      {
        title: 'Java',
        collapsable: true,
        children: [
          'chapter10/'
        ]
      },
      {
        title: '小程序',
        collapsable: true,
        children: [
          'chapter11/'
        ]
      },
      {
        title: '面试总结',
        collapsable: true,
        children: [
          'chapter12/',
          'chapter12/html',
          'chapter12/css',
          'chapter12/js',
          'chapter12/vue',
          'chapter12/react'
        ]
      },
      {
        title: '高级进阶',
        collapsable: true,
        children: [
          ['chapter13/', 'Introduction'],
          'chapter13/vue',
          'chapter13/react',
          'chapter13/node',
          'chapter13/webpack',
          'chapter13/mvvm',
          'chapter13/vue-router',
          'chapter13/virtual-dom',
          'chapter13/data-construct'
        ]
      },
      {
        title: '项目',
        collapsable: true,
        children: [
          ['chapter14/', 'Introduction'],
          'chapter14/eleme',
          'chapter14/xidebao',
          'chapter14/geonoon',
          'chapter14/geoxing',
          'chapter14/shop',
          'chapter14/vue-music'
        ]
      }
    ], 
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端三剑客', items: [
        { text: 'HTML', link: '/html/' },
        { text: 'CSS', link: '/CSS/' },
        { text: 'JavaScript', link: '/JavaScript/' }
      ]},
      { text: 'Vue.js', link: '/vue/' }
    ]
  }
}