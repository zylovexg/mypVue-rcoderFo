import store from '@/store'
import { showModal } from './dialog'
// 封装接口请求
export function request (url, method, model, params) {
  let _params = params ? model ? model.request(params) : params : ''
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: _params,
      method,
      success (res) {
        if (res) {
          resolve(model ? model.response(res) : res)
        }
      },
      fail (res) {
        reject(new Error(res))
      }
    })
  })
}
// 判断手机是否为 iPhone X，iPhone XR，iPhone XS，iPhone XS Max
export function getSystemInfo () {
  wx.getSystemInfo({
    success (res) {
      if (res.model.indexOf('iPhone X') !== -1) {
        store.commit('CHANGE_SYSTEM_INFO')
      }
    }
  })
}
// 判断是否登录
export function getLogin () {
  wx.login({
    success (res) {
      if (res.code) {
      } else {
        showModal({
          title: '警告',
          content: `获取用户登录状态失败！${res.errMsg}`
        })
      }
    }
  })
}
// 判断是否授权过
export function getSetting () {
  wx.getSetting({
    success (res) {
      if (res.authSetting['scope.userInfo']) {
        store.commit('CHANGE_USER_INFO')
        wx.getUserInfo({
          success (res) {
            store.commit('SET_USER_INFO', res.userInfo)
          }
        })
      } else {
      }
    }
  })
}
// 判断小程序的 API，回调，参数，组件等是否在当前版本可用。为 false 提醒用户升级微信版本
export function getVersion () {
  if (wx.canIUse('button.open-type.getUserInfo')) {
  } else {
    showModal({
      title: '警告',
      content: '请升级微信版本'
    })
  }
}
// 判断用户授权框里点击了允许还是拒绝
export function bindGetUserInfo (e) {
  if (e.mp.detail.rawData) {
    console.log('用户点击了允许授权按钮')
  }
}
// 转发
export function shareAppMessage (options) {
  options = options || {}
  return {
    title: options.title || '',
    path: options.path || '',
    imageUrl: options.imageUrl
  }
}
