<template>
  <div class="box">
    <div class="position">你的位置</div>
    <div class="current-location">
        <p class="city">北京</p>
    </div>
    <div class="position hot">热门城市</div>
    <div class="hot-city" @click="handleClick">
      <p class="city" v-for="item of list" :key="item.id">{{item.city}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-hot-city',
  props: {
    list: Array
  },
  methods: {
    handleClick (e) {
      this.$bus.$emit('change', e.target.innerHTML)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import "../../assets/stylus/variables.styl"
    .box
      background #f5f5f5
      .position
        height 0.53rem
        line-height 0.54rem
        text-indent 0.3rem
        color #5e5e5e
        border-bottom 0.01rem solid #dbdbdb
      .current-location
        display flex
        align-items center
        height 1.1rem
        padding-left 0.3rem
        background white
        .city
          width 28%
          height 0.56rem
          text-align center
          line-height 0.6rem
          border 0.02rem solid #00bcd4
          border-radius 0.1rem
          color #00bcd4
      .hot
        border-top 0.01rem solid #dbdbdb
      .hot-city
        overflow hidden
        padding 0.3rem 0.3rem 0 0.3rem
        border-bottom 0.01rem solid #dbdbdb
        background white
        .city
          float left
          width 28%
          height 0.56rem
          text-align center
          line-height 0.6rem
          margin 0 4% 3% 0
          border 0.02rem solid #cecece
          border-radius 0.1rem
</style>
