<template>
  <div class="header">
      <div class="header-left iconfont" @click="handleBackClick">&#xe623;</div>
      <div class="header-title">
        <input class="header-search" type="text" value="一日游">
      </div>
      <div class="header-right">搜索</div>
  </div>
</template>

<script>
    export default {
      name: 'onedaytour-header',
      methods: {
        handleBackClick () {
          this.$router.go(-1)
        }
      }
    }
</script>
  
<style lang='stylus' scoped>
  @import "../../assets/stylus/variables.styl"
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .header-left
      width: .4rem
      padding: 0 .2rem
      text-align: center
      font-size: .4rem
      font-weight: bold
    .header-title
      flex: 1
      height: .6rem
      margin: .14rem 0
      background: #fff
      position: relative
      .header-search
        position: absolute
        box-sizing:border-box
        width: 100%
        height: .4rem
        line-height: .4rem
        margin: .1rem 0
        padding: 0 .2rem
        border: 0
        font-size: .28rem
    .header-right
      width: .8rem
      padding: 0 .1rem
      text-align: center
</style>  