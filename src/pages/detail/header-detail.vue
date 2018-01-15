<template>
    <header class="header">
      <a href="javascript:void(0)" class="header-back iconfont">&#xe623;</a>
      <h1 class="header-title hidden-single-line-text">
        {{header.headerTitle}}
      </h1>
    </header>
</template>

<script>
  export default {
    name: 'header-detail',
    props: {
      header: Object
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/stylus/variables.styl"

  .header
    display flex
    width 100%
    height .88rem
    background $bgColor
    position fixed
    top 0px
    left 0px
    display none//先设置了隐藏,后面再改
    .header-back
      width .8rem
      height .88rem
      line-height .88rem
      text-align center
      position: absolute
    .header-title
      flex 1
      margin: 0 1rem;
      line-height: .88rem;
      font-size: .32rem;
      text-align: center;
      color: #fff;
</style>