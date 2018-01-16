<template>
  <div class="header">
    <div class="back iconfont">&#xe623;</div>
    <span>订单填写</span>
    <span class="login">登录</span>
  </div>
</template>

<script>
export default {
  name: 'OrderHeader'
}
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/variables.styl'
  .header 
    display: flex
    height: 0.88rem
    line-height: 0.88rem
    justify-content: space-between
    font-size: 16px
    color: #fff
    background: $bgColor
    .back 
      margin-left: 0.2rem
    .login 
      margin-right: 0.2rem
</style>