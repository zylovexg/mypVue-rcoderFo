<template>
  <div class="box" :class="{ padding: padding }">
    <!-- 文本内容 -->
    <text-box></text-box>
    <!-- 底部导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TextBox from './components/textBox'
import TabBar from '@/components/tabBar/index'
export default {
  name: 'content',
  components: {
    TextBox,
    TabBar
  },
  data () {
    return {
      contentData: {
        padding: false
      }
    }
  },
  mounted () {
    this.setPadding()
  },
  methods: {
    setPadding () {
      if (this.$store.state.systemInfo.systemInfoControll) {
        this.contentData.padding = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/height.styl'
</style>