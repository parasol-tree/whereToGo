<template>
  <div>
 	  <order-header-comp></order-header-comp>

    <order-message-comp :messageData="OrderMessage"></order-message-comp>

    <order-number-comp @sendnum="change"></order-number-comp>

    <order-maney-comp 
    :maneynum="num" 
    :messageData="OrderMessage"
    @senddis="maskdis"
    >  
    </order-maney-comp>
    <div class="mask" v-show="dis">
      <div class="title">
        <h2>{{OrderMessage.title}}</h2>
        <span>￥{{OrderMessage.money}}×{{num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeaderComp from './OrderHeader'
import OrderMessageComp from './OrderMessage'
import OrderNumberComp from './OrderNumber'
import OrderManeyComp from './OrderManey'
import axios from 'axios'
export default {
  name: 'order',
  components: {
    OrderHeaderComp,
    OrderMessageComp,
    OrderNumberComp,
    OrderManeyComp
  },
  data () {
    return {
      OrderMessage: {},
      num: 0,
      dis: false
    }
  },
  methods: {
    getOrderMessage () {
      axios.get('/api/data.json')
      .then(this.handleDataSucc.bind(this))
      .catch(this.handleDataErr.bind(this))
    },
    handleDataSucc (res) {
      this.OrderMessage = res.data.data[0]
    },
    handleDataErr () {
      console.log('err')
    },
    change (e) {
      this.num = e
    },
    maskdis (e) {
      this.dis = e
    }
  },
  created () {
    this.getOrderMessage()
  }
}
</script>

<style scoped lang='stylus'>
	@import '../../assets/stylus/variables.styl'
  .mask {
    position: fixed
    top: 0 
    left: 0
    width: 100%
    height: 100%
    background: rgba(0,0,0,.4)
    z-index: 99
    .title {
      position: absolute;
      right: 0
      bottom: 1rem
      left: 0
      padding: .15rem .2rem
      background: #fff
      border: 1px solid #D3D5D5
        h2 {
          color: #212121
          font-size: .32rem
          line-height: .44rem
          margin-bottom: .04rem
        }
        span {
          height: .44rem
          line-height: .44rem
          color: #9e9e9e
          font-size: .24rem
        } 
      }
  }
</style>