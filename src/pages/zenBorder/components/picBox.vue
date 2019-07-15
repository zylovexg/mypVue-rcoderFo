<template>
  <div class="pic-box">
    <img :src="picData.pic">
    <div class="text">
      分享佛像，让更多人信佛，广积善缘
    </div>
  </div>
</template>
<script>
export default {
  name: 'picBox',
  data () {
    return {
      picData: {
        pic: require('@/assets/images/zzz_pic1.jpg')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/color.styl'
  @import '~@/assets/styles/size.styl'
  .pic-box
    img 
      width 688rpx
      height 789rpx
      box-sizing border-box
      border 1px solid $borderE5E5E5
    .text
      font-size $fontSize24
      text-align right
      padding-right 27rpx
      margin-top 24rpx
</style>