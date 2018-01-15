<template>
  <div class="footer">
    <div class="left" @click="dischange" >
      产品价格
      <span>￥
        <em>{{maneynum*messageData.money}}</em>
      </span>
      <i class="iconfont icon" >
        &#xe62e;
      </i>
    </div>
    <div class="right" @click="checkOut">
      提交订单
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OrderManey',
    props: {
      maneynum: Number,
      messageData: Object
    },
    data () {
      return {
        status: false
      }
    },
    methods: {
      dischange () {
        this.status = !this.status
        this.senddisplay(this.status)
      },
      senddisplay (status) {
        this.$emit('senddis', status)
      },
      checkOut () {
        console.log('我点击了')
        this.$emit('checkout', true)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .footer {
    position: fixed
    z-index: 999
    left: 0 
    bottom: 0
    width: 100%
    height: 1rem
    background: #fff
    .left {
      width: 50%
      height: 100%
      float: left
      color: #ff8300
      font-size: .24rem
      line-height: 1rem
      text-indent: .2rem
      em {
        font-size: .48rem
        color: #ff8300
      }
      .icon {
        color: #C6C6C6
      }
    }
    .right {
      float: right
      width: 50%
      height: 100%
      color: #fff
      font-size:0.36rem
      line-height: 1rem 
      text-align: center 
      background: #FF9800
    }
  }
</style>