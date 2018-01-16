<template>
  <div>
    <div class="number">
      <span>购买数量</span>
      <div class="num">
        <span class="sub" @click="subNum" :class="{active:isShow}"> - </span>
        <input type="tel" max="99" min="1" v-model="num">
        <span class="add" @click="addNum"> + </span>
      </div>
    </div>
    <order-people-comp :listnum="num"></order-people-comp>
  </div>
</template>

<script>
  import OrderPeopleComp from './OrderPeople'
  export default {
    name: 'OrderNumber',
    components: {
      OrderPeopleComp
    },
    data () {
      return {
        isShow: true,
        num: 1
      }
    },
    methods: {
      addNum () {
        if (this.num < 99) {
          this.num++
          this.sendnumber(this.num)
        }
      },
      subNum () {
        if (this.num > 1) {
          this.num--
          this.sendnumber(this.num)
        }
      },
      sendnumber (num) {
        this.$emit('sendnum', num)
      }
    },
    watch: {
      num: function () {
        this.isShow = this.num > 1 ? this.isShow = false : this.isShow = true
      }
    },
    created () {
      this.sendnumber(this.num)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variables.styl'
  .number {
    width:100%
    min-height: .5rem;
    margin: 0.2rem 0
    padding: .3rem .2rem .3rem .2rem;
    background: #fff
    >span {
      float: left
      width: 1.6rem
      color: #616161
      font-size: .3rem
      line-height: .5rem
    }
    .num{
      margin-right: .5rem
      float:right
      border: .02rem solid #c7ced4;
      .active{
        color: #CAD1D7
        background: #F0F0F0
      }
      span{
        display: inline-block
        float: left
        width: .56rem
        height: .56rem
        margin: .02rem
        background: #00AFC7
        text-align: center
        line-height: .56rem
        color:#fff
        font-size:.5rem
        font-weight: bold
      }
      input{
        float: left
        width: .6rem
        height: .6rem
        padding: 0 .06rem
        border: 0 none
        font-size: .28rem
        text-align: center
      }
    }
  }
</style>