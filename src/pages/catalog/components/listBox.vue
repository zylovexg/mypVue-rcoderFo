<template>
  <div class="list-box">
    <div class="pic">
      <img :src="listData.pic">
    </div>
    <scroll-view class="list" scroll-y>
      <ul>
        <li v-for="(item, index) in listData.listArr" :key="index">
          <a href="/pages/content/main">
             {{ item.title }}
          </a>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
export default {
  name: 'listBox',
  data () {
    return {
      listData: {
        pic: require('@/assets/images/catalog_pic.jpg'),
        listArr: [
          {
            id: 1,
            title: '001 天若有情天亦老'
          },
          {
            id: 2,
            title: '002 天若有情天亦老'
          },
          {
            id: 3,
            title: '003 天若有情天亦老'
          },
          {
            id: 4,
            title: '004 天若有情天亦老'
          },
          {
            id: 5,
            title: '005 天若有情天亦老'
          },
          {
            id: 6,
            title: '006 天若有情天亦老'
          },
          {
            id: 7,
            title: '007 天若有情天亦老'
          },
          {
            id: 8,
            title: '008 天若有情天亦老'
          },
          {
            id: 9,
            title: '009 天若有情天亦老'
          },
          {
            id: 10,
            title: '010 天若有情天亦老'
          },
          {
            id: 11,
            title: '011 天若有情天亦老'
          },
          {
            id: 12,
            title: '012 天若有情天亦老'
          },
          {
            id: 13,
            title: '013 天若有情天亦老'
          },
          {
            id: 14,
            title: '014 天若有情天亦老'
          },
          {
            id: 15,
            title: '015 天若有情天亦老'
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import ('~@/assets/styles/size.styl')
  @import ('~@/assets/styles/color.styl')
  .list-box
    width 100%
    height 100%
    display flex
    justify-content space-between
  .pic
    width 200rpx
    img 
      width 100%
      height 100%
  .list
    width 436rpx
    height 100%
    li
      margin 29rpx 0 9rpx
      a
        display block
        font-size $fontSize32
        line-height 50rpx
        border-bottom 1px dashed $border333333
</style>
