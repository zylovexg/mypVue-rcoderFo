<template>
  <div class="text-box">
    <div class="title">{{ textData.title }}</div>
    <scroll-view scroll-y class="text-box">
      <div class="text">
        <div v-html="textData.text"></div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  name: 'textBox',
  data () {
    return {
      textData: {
        title: '地藏经',
        text: `<p>文云︰‘地藏！地藏！记吾今日在忉利天中，于百千万亿不可说不可说一切诸佛菩萨天龙八部大会之中，再以人天诸众生等未出三界在火宅中者，付嘱于汝。无令是诸众生堕恶趣中一日一夜，何况更落五无间及阿鼻地狱，动经千万亿劫无有出期。地藏，是南阎浮提众生志性无定，习恶者多，纵发善心，须臾即退。若遇恶缘，念念增长。以是之故，吾分是形百千亿化度，随其根性而度脱之。地藏！吾今殷勤以人天众付嘱于汝。未来之世，若有天人及善男子善女人，于佛法中种少善根，一毛一尘一沙一渧，汝以道</p>
              <p>文云︰‘地藏！地藏！记吾今日在忉利天中，于百千万亿不可说不可说一切诸佛菩萨天龙八部大会之中，再以人天诸众生等未出三界在火宅中者，付嘱于汝。无令是诸众生堕恶趣中一日一夜，何况更落五无间及阿鼻地狱，动经千万亿劫无有出期。地藏，是南阎浮提众生志性无定，习恶者多，纵发善心，须臾即退。若遇恶缘，念念增长。以是之故，吾分是形百千亿化度，随其根性而度脱之。地藏！吾今殷勤以人天众付嘱于汝。未来之世，若有天人及善男子善女人，于佛法中种少善根，一毛一尘一沙一渧，汝以道</p>`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/color.styl'
  @import '~@/assets/styles/size.styl'
  .text-box
    background-color $white
    height 100%
    border-bottom-left-radius 10rpx
    border-bottom-right-radius 10rpx
    .title
      font-size $fontSize60
      padding 39rpx 0
      background-color $ffda43
      text-align center
      border-top-left-radius 10rpx
      border-top-right-radius 10rpx
      font-weight bold
    .text-box
      height calc(100% - 138rpx)
    .text
      font-size $fontSize32
      line-height 58rpx
      padding 41rpx 45rpx 45rpx 39rpx
      box-sizing border-box
      text-indent 2em
</style>