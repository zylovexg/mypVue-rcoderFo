<template>
  <div class="zen-box">
    <h1>今日禅语</h1>
    <h2>每天一条禅语，助居士参禅</h2>
    <scroll-view scroll-y class="text">
      {{ zenTodayData.text }}
    </scroll-view>
    <button>分享</button>
    <div class="peoples">
      已有{{ zenTodayData.peoples }}位参禅
    </div>
  </div>
</template>

<script>
export default {
  name: 'zenToday',
  data () {
    return {
      zenTodayData: {
        text: '大悲无泪，大悟无言，大笑无声。苦海无边，回头是岸。放下屠刀，立地成佛。',
        peoples: 3902558
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/color.styl'
  @import '~@/assets/styles/size.styl'
  .zen-box
    background-color $white
    border 1px solid $borderE5E5E5
    margin-top $marginTop30
    text-align center
    padding 96rpx 103rpx 106rpx
    h1
      font-size $fontSize60
      font-weight bold
    h2
      font-size $fontSize24
      color $999999
      margin-top 21rpx
    .text
      font-size $fontSize32
      line-height 58rpx
      margin-top 65rpx
      text-align left
      height 259rpx
    button 
      width 125rpx
      height 125rpx
      border-radius 100%
      background-color $ffda43
      font-size $fontSize32
      line-height 125rpx
    .peoples
      font-size $fontSize24
      color $999999
      margin-top 12rpx
</style>
