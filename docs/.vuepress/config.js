module.exports = {
  title: 'Spirit UI',
  description: 'Spirit UI',
  base: '/spirit/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'GitHub',
        link: 'https://github.com/Dongsipan/spirit'
      }, 
    ],
    sidebar: [
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/components/basic/'
        ]
      },
    ]
  }
}