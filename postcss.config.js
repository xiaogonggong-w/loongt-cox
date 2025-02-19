export default {
  plugins: {
    autoprefixer: {
      // 配置目标浏览器
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'iOS 7',
        'last 3 iOS versions'
      ]
    }
  }
} 