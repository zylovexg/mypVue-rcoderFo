<template>
  <div>
    <!-- 参禅的天数 -->
    <days></days>
    <!-- 今日禅语 -->
    <zen-today></zen-today>
    <!-- 弹框 -->
    <dialog-box></dialog-box>
  </div>
</template>

<script>
import Days from './components/days'
import ZenToday from './components/zenToday'
import DialogBox from './components/dialogBox'
import { getData } from '@/data/api/home'
import { shareAppMessage } from '@/utils/'
export default {
  name: 'home',
  components: {
    Days,
    ZenToday,
    DialogBox
  },
  data () {
    return {}
  },
  onShareAppMessage () {
    return shareAppMessage({
      title: '佛缘',
      path: '/pages/home/main',
      imageUrl: require('@/assets/images/zzz_pic1.jpg')
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      getData({ page: 1 }).then(res => {
        console.log(res)
      }).catch().finally()
    }
  }
}
</script>