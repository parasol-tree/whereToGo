<template>
  <ul class="base-info-container clearfix">
    <li
      class="base-info"
      v-for="item in baseInfoList"
      ref="baseInfoElem">
      <span class="iconfont">&#xe606;</span>
      {{item.baseInfo}}
      <span class="iconfont icon-address-arrow">&#xe62d;</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'base-info',
    props: {
      baseInfoList: Array
    },
    updated () {
      // const baseInfoElem = this.$refs.baseInfoElem[0]
      // const baseInfoElemInfo = baseInfoElem.getBoundingClientRect()
      // const baseInfoElemOffsetTop = baseInfoElemInfo.top
      // const baseInfoElemHeight = baseInfoElemInfo.height
      // const baseInfoContainerComponetnUsedTop = baseInfoElemOffsetTop - (baseInfoElemHeight / 2)
      // console.log(baseInfoContainerComponetnUsedTop)
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/stylus/variables.styl"
  .base-info-container
    min-height .5rem
    padding .1rem .2rem 0 .2rem
    background #fff
    .base-info
      line-height .88rem
      color #2222228a
      white-space nowrap
      overflow hidden
      padding-right .56rem
      position relative
      font-size .28rem
      .icon-address-arrow
        position absolute
        right 0
        top 0
        color #b9b9b9
  
</style>