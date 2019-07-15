// 封装 showModal 方法
export function showModal (options) {
  options = options || {}
  wx.showModal({
    title: options.title || '',
    content: options.content || '',
    showCancel: options.showCancel || true,
    cancelText: options.cancelText || '取消',
    cancelColor: options.cancelColor || '#000000',
    confirmText: options.confirmText || '确定',
    confirmColor: options.confirmColor || '#576B95',
    success (res) {
      if (res.confirm && options.confirm) {
        options.confirm()
      } else if (res.cancel && options.cancel) {
        options.cancel()
      }
    }
  })
}
