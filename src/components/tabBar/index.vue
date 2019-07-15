<template>
  <div class="fixed-nav" :class="{ height: tabBarData.isHeight }">
    <ul>
      <li v-for="(item, index) in tabBarData.tabBarList" :key="index">
        <a :href="item.pagePath" open-type="switchTab">
          <div class="icon"></div>
          <div class="text">{{ item.name }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      tabBarData: {
        fixedNavHeight: 96,
        isHeight: false,
        tabBarList: [
          {
            name: '禅语',
            pagePath: '/pages/home/main'
          },
          {
            name: '禅缘',
            pagePath: '/pages/zenBorder/main'
          },
          {
            name: '佛经',
            pagePath: '/pages/theBuddhistScripture/main'
          },
          {
            name: '佛咒',
            pagePath: '/pages/buddhaCurse/main'
          }
        ]
      }
    }
  },
  mounted () {
    this.setFixedNavHeight()
  },
  methods: {
    setFixedNavHeight () {
      if (this.$store.state.systemInfo.systemInfoControll) {
        this.tabBarData.isHeight = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/color.styl'
  @import '~@/assets/styles/size.styl'
  .fixed-nav
    width 100%
    height 96rpx
    position fixed
    left 0
    bottom 0
    background-color $ffda43
    ul
      display flex
      height 100%
    li
      flex 1
      a
        display block
        height 100%
        padding-top: 8rpx
        box-sizing border-box
    .icon
      width 54rpx
      height 54rpx
      background-repeat no-repeat
      background-position 0 0
      background-size 100% 100%
      margin 0 auto
    li:nth-child(1)
      .icon
        background-image url('~@/assets/images/tabs/tab-bar1.png')
    li:nth-child(2)
      .icon
        background-image url('~@/assets/images/tabs/tab-bar2.png')
    li:nth-child(3)
      .icon
        background-image url('~@/assets/images/tabs/tab-bar3.png')
    li:nth-child(4)
      .icon
        background-image url('~@/assets/images/tabs/tab-bar4.png')
    .text
      font-size $fontSize20
      color $333333
      margin-top 9rpx
      text-align center
  .fixed-nav.height
    height 150rpx
</style>
