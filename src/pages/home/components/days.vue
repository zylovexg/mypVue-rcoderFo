<template>
  <div class="days-box">
    <div class="text">
    	居士！您已参禅的第<span>{{ daysData.daysNumber }}</span>天
    </div>
    <div class="btn">
      <button 
        open-type="getUserInfo"
        @click="getVersion"
        @getuserinfo="bindGetUserInfo">参禅</button>
    </div>
  </div>
</template>

<script>
import { getVersion, bindGetUserInfo } from '@/utils'
export default {
  name: 'days',
  data () {
    return {
      daysData: {
        daysNumber: 3658
      }
    }
  },
  methods: {
    // 是否提醒升级微信版本
    getVersion () {
      getVersion()
    },
    // 判断用户是点击了允许拒绝
    bindGetUserInfo (e) {
      bindGetUserInfo(e)
    }
  }
}
</script>

<style lang="stylus">
  @import '~@/assets/styles/color.styl'
  .days-box
    width 100%
    border: 1px solid $borderE5E5E5
    background-color $white
    display table
    padding 60rpx 19rpx 56rpx 29rpx
    box-sizing border-box
    .text
      font-size 36rpx
      color $666666
      display table-cell
      span 
        color $black
        font-weight bold
        border-bottom 5rpx solid $borderBlack
        line-height value
    .btn
      width 140rpx
      display table-cell
      button 
        width 100%;
        height 46rpx
        border none
        font-size 30rpx
        color #010101
        line-height 46rpx
        border-radius 46rpx
        background-color $ffda43
</style>
