<script>
import {
  getSystemInfo,
  getLogin,
  getSetting } from './utils'
export default {
  created () {
    getSystemInfo()
    getLogin()
    getSetting()
  }
}
</script>

<style lang="stylus">
  page 
    background-color #f8f8f8
    min-height 100%
    padding 30rpx 30rpx 0
    box-sizing border-box
    line-height 1
</style>
