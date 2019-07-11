const path = require('path')
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
  },
  postcss: [require('autoprefixer')],
    sass: { indentedSyntax: true },
    scss: {
        includePaths: ["../../components/style"]
    },
    chainWebpack: (config, isServer) => {
        config.resolveLoader
            .modules
            .add(path.resolve(__dirname, './node_modules'))
    }
}