# rcoder_fo

> 佛

## Build Setup

``` bash
# 安装依赖
yarn

# 开发时构建
yarn start

# 打包构建
yarn build

# 生成 bundle 分析报告
npm run build --report
```

## src => utils => dialog.js
#### 调用 showModal 方法，参数可以不传，不传代表用默认的

``` javascript
show({
    title: String,        // 提示的标题
    content: String,      // 提示的内容
    showCancel: Boolean,  // 是否显示取消按钮
    cancelText: String,   // 取消按钮的文字，最多 4 个字符
    cancelColor: String,  // 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
    confirmText: String,  // 确认按钮的文字，最多 4 个字符
    confirmColor: String  // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
    confirm () {},        // 用户点击确定按钮后执行的函数
    cancel () {},         // 用户点击取消按钮后执行的函数
})
```

## src => utils => index.js
#### 调用 shareAppMessage 方法，可以打开右上角自带分享功能的开关。使用方法是在需要分享的.vue文件里，与data、methods同级下，使用onShareAppMessage，并返回 shareAppMessage 方法。参数可以不传，就会调用默认的。
```javascript
onShareAppMessage () {
  return shareAppMessage({main
    title: String,      // 分享的标题。
    path: String,       // 分享的路径。 例子： '/pages/home/main'
    imageUrl: String    // 分享的图片路径。 例子：require('@/assets/images/zzz_pic1.jpg')
  })
}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
