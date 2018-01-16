<template >
  <div class="order-message">
    <div class="left">
      <h2 >{{messageData.title}}</h2>
      <div>
        <i class="iconfont icon">&#xe612;</i><span>{{messageData.time}}</span>
        <i class="iconfont icon">&#xe6ac;</i><span>{{messageData.term}}</span>
      </div>
      <div>
        <i class="iconfont icon">&#xe6ac;</i><span>{{messageData.crowd}}</span>
        <i class="iconfont icon">&#xe6ac;</i><span>{{messageData.setmeal}}</span>
        <i class="iconfont icon">&#xe6ac;</i><span>{{messageData.message}}</span>
      </div>
      <div class="lasttime">
        <i class="iconfont icon">&#xe644;</i><span>{{messageData.lasttime}}</span>
      </div>
    </div>
    <div class="right">
      <p>
        <span>￥<em>{{messageData.money}}</em></span>
        <span>/张</span>
      </p>
      <p>预定须知</p>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'OrderMessageComp',
    props: {
      messageData: Object
    }
  }
</script>

<style scoped lang='stylus'>
  @import '../../assets/stylus/variables.styl'
 .order-message {
    position: relative
    overflow: hidden
    min-height: 1.1rem
    line-height: 1;
    padding: .2rem .2rem .1rem .2rem
    background: #fff
    .left {
      margin-right: 1.9rem;
      float: left;
      h2 {
        color: #212121
      font-size: .32rem
      line-height: .44rem
      margin-bottom: .04rem
      }
      div {
        line-height: 0.44rem
        overflow: hidden
        color: #616161
        font-size: .24rem;
        .icon {
          width: .24rem
          height: .24rem
          margin-right: .08rem
          margin-left: 0.1rem;
          vertical-align: top 
          color: #92DDE7;
        }
      }
      .lasttime{
        i{
          color:#FF1402;
        }
      }
    }
    .right {
      position: absolute
      right: .2rem
      top: .2rem
      width: 1.8rem
      text-align: right
      p:nth-child(1) {
        color:#9e9e9e;
        font-size: 0.2rem
        span:nth-child(1) {
          color: #ff8300;
          em {
            margin-left: .04rem
            font-size: .4rem
          }
        }
      }
      p:nth-child(2) {
        margin-top: .12rem
        line-height: .32rem
        color: #00bcd4
        font-size: .28rem
      }
    }
 } 
</style>