<template>
  <div>
 	  <order-header-comp></order-header-comp>
    <order-message-comp :messageData="OrderMessage"></order-message-comp>
    <order-number-comp></order-number-comp>
  </div>
</template>

<script>
import OrderHeaderComp from './OrderHeader'
import OrderMessageComp from './OrderMessage'
import OrderNumberComp from './OrderNumber'
import axios from 'axios'
export default {
  name: 'order',
  components: {
    OrderHeaderComp,
    OrderMessageComp,
    OrderNumberComp
  },
  data () {
    return {
      OrderMessage: {}
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
    }
  },
  created () {
    this.getOrderMessage()
  }
}
</script>

<style scoped lang='stylus'>
	@import '../../assets/stylus/variables.styl'
</style>