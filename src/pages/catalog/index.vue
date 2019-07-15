<template>
  <div class="box" :class="{ padding: catalogData.padding }">
    <!-- 列表 -->
    <list-box></list-box>
    <!-- 底部导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import ListBox from './components/listBox'
import TabBar from '@/components/tabBar/index'
export default {
  name: 'catalog',
  components: {
    ListBox,
    TabBar
  },
  data () {
    return {
      catalogData: {
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
        this.catalogData.padding = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/height.styl'
</style>
