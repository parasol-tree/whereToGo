<template>
  <ul class="ticket-container clearfix">
    <h3 class="ticket-type">
      <span class="ticket-bg"></span>
      {{treasureAndTimekeeper.treasureAndTimekeeper}}
    </h3>
    <li
      class="ticket-info-container"
      v-for="item of treasureAndTimekeeper.treasureAndTimekeeperInfo">
      <div class="ticket-info">
        <h5 class="ticket-info-name">
          {{item.adult}}<!-- <br/> -->
          <span class="rely-on-idCard-enter-park">
            {{item.relyOnIdCardEnterPark}}
          </span>
        </h5>
      </div>
      <div class="ticket-price-container">
        ¥
        <em class="ticket-price">{{item.price}}</em>
        <span class="ticket-num-word">起</span>
      </div>
      <span class="iconfont icon-down-arrow">&#xe62f;</span>
    </li>

    <li class="see-more-product"
      v-show="isShow"
      @click="handleSeeMoreProduct">
      查看剩余产品
      <span class="iconfont icon-down-arrow">&#xe62f;</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'treasure-timekeeper',
    props: {
      treasureAndTimekeeper: Object
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      handleSeeMoreProduct () {
        this.$data.isShow = !this.$data.isShow
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/stylus/variables.styl"
  .ticket-container
    background #fff
    min-height 3rem
    margin-bottom .2rem
    position relative
    .ticket-type
      height .88rem
      padding 0 .2rem
      font-size .32rem
      line-height .88rem
      text-indent .4rem
      color #333
      white-space nowrap
      overflow hidden
      position relative
      z-index 4
      .ticket-bg
        display inline-block
        position absolute
        width .36rem
        height .36rem
        top .26rem
        left .2rem
        background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right .1rem
        background-size .4rem 3rem
    .ticket-info-container
      overflow hidden
      position relative
      border-bottom .01rem solid #ccc
      .ticket-info
        margin-bottom -.02rem
        padding .24rem .2rem
        .ticket-info-name
          margin-right 1.8rem
          font-size .3rem
          line-height .48rem
          color #333
          white-space wrap
          overflow hidden
          .rely-on-idCard-enter-park
            margin .1rem 1.84rem .14rem .1rem
            font-size .24rem
            line-height .32rem
            color #888
      .ticket-price-container
        right .46rem
        margin-top -.28rem
        color #ff9800
        font-size .24rem
        overflow hidden
        position absolute
        top 50%
        height .4rem
        line-height .4rem
        .ticket-price
          margin-left .04rem
          font-size .36rem
        .ticket-num-word
          display inline-block
          color #9e9e9e
          font-size .24rem
      .icon-down-arrow
        height .4rem
        line-height .4rem
        font-size .24rem
        color #bbb
        white-space nowrap
        overflow hidden
        // margin-top -.22rem
        position absolute
        right .2rem
        top 25%
    .see-more-product
      width 100%
      position absolute
      left 0
      bottom 0
      margin-top -.02rem
      height 1.42rem
      background #fff
      color #616161
      line-height 1.42rem
      text-align center
      z-index 999
</style>