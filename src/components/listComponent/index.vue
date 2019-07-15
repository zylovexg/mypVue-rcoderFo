<template>
  <div class="list-box">
    <ul>
      <li v-for="(item, index) in listData.listArr" :key="index">
        <a href="/pages/catalog/main">
          <div class="pic">
            <img :src="item.pic">
          </div>
          <h3>{{ item.name }}</h3>
          <div class="num">阅读{{ item.num }}次</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'listComponent',
  data () {
    return {
      listData: {
        listArr: [
          {
            pic: require('@/assets/images/zzz_pic1.jpg'),
            name: '地藏经',
            num: 12055,
            id: 1
          },
          {
            pic: require('@/assets/images/zzz_pic1.jpg'),
            name: '地藏经',
            num: 12055,
            id: 2
          },
          {
            pic: require('@/assets/images/zzz_pic1.jpg'),
            name: '地藏经',
            num: 12055,
            id: 3
          },
          {
            pic: require('@/assets/images/zzz_pic1.jpg'),
            name: '地藏经',
            num: 12055,
            id: 4
          },
          {
            pic: require('@/assets/images/zzz_pic1.jpg'),
            name: '地藏经',
            num: 12055,
            id: 5
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/color.styl'
  @import '~@/assets/styles/size.styl'
  .list-box
    ul
      display flex
      flex-flow row wrap
      justify-content space-between
    li
      width 320rpx
      margin 10rpx 0 30rpx
      .pic
        img 
          width 320rpx
          height 390rpx
          border-radius 10rpx
      h3
        font-size $fontSize32
        margin-top $marginTop30
      .num
        font-size $fontSize24
        color $999999
        margin-top 14rpx
</style>
