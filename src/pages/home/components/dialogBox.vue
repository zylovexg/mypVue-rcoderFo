<template>
  <div class="dialog-box" v-if="dialogData.show">
    <div class="mask"></div>
    <div class="main">
      <div class="main-box" :animation="dialogData.animationData">
        <h1>佛说：</h1>
        <div class="text">
          前世一千次的擦肩页过，<br>
          换来今世的一次相遇<br>
          我们相遇是因果，也是缘份。<br>
          愿《佛缘》助你修行！
        </div>
        <div class="remarks">佛缘全体工作人员</div>
        <div class="close-btn">
          <em @click="handleClose"></em>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialogBox',
  data () {
    return {
      dialogData: {
        show: true,
        animationData: {}
      }
    }
  },
  mounted () {
    this.dialogAnimation()
  },
  methods: {
    // 弹框展开动画
    dialogAnimation () {
      const animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      })
      animation.scale(1, 1).step()
      setTimeout(() => {
        this.dialogData.animationData = animation.export()
      }, 50)
    },
    // 关闭弹框
    handleClose () {
      const animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      })
      animation.scale(0.5, 0.5).step()
      this.dialogData.animationData = animation.export()
      setTimeout(() => {
        this.dialogData.show = false
      }, 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/color.styl'
  @import '~@/assets/styles/size.styl'
  .dialog-box, .mask
    width 100%
    height 100%
    position fixed
    left 0
    top 0
  .mask
    background-color rgba(0, 0, 0, 0.8)
    z-index 1
  .main
    position fixed
    left 100rpx
    right 100rpx
    top 50%
    transform translateY(-50%)
    z-index 2
  .main-box
    background-color $ffda43
    transform scale(0.5)
    padding 87rpx 0 0 0
    border-radius 10rpx
    h1
      font-size $fontSize60
      padding 0 60rpx
      font-weight bold
    .text
      font-size $fontSize24
      padding 0 106rpx 177rpx
      line-height 49rpx
      margin-top 80rpx
    .remarks
      font-size $fontSize24
      color $666666
      text-align right
      padding 32rpx 50rpx
      background-color $white
      border-bottom-left-radius 10rpx
      border-bottom-right-radius 10rpx
    .close-btn
      position absolute
      right 5rpx
      top -98rpx
      em
        width 40rpx
        height 40rpx
        border-radius 100%
        border 1px solid $borderWhite
        display block
        box-sizing border-box
        &:before, &:after
          content ''
          width 23rpx
          height 2px
          position absolute
          background-color $white
          left 10rpx
          top 19rpx
        &:before
          transform rotate(45deg)
        &:after
          transform rotate(-45deg)
      .line
        width 1px
        height 58rpx
        background-color $white
        position absolute
        left 50%
        top 40rpx
        transform translateX(-50%)
</style>
