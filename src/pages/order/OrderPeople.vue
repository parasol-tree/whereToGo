<template>
  <ul class="order-list">
    <li class="one list">
      <div class="order-name">
        <span>游客1</span>
        <input type="text" 
        placeholder="游客姓名" 
        @blur="checkOutName" 
        ref="username"
        v-model="namevalue">
        <i class="iconfont icon">&#xe67c;</i>
      </div>
      <div class="order-phone">
        <span >手机号</span>
        <span>+86></span>
        <input type="text" placeholder="请填写手机号" @blur="checkOutPhone">
      </div>
      <div class="order-code">
        <span><span class="code">身份证 ></span></span>
        <input type="text" placeholder="请填写正确的身份证号码" @blur="checkOutCode">
      </div>
    </li>
    <li v-for="(item,index) of (listnum-1)">
      <div class="order-name">
        <span>游客{{item+1}}</span>
        <input type="text" placeholder="游客姓名">
        <i class="iconfont icon">&#xe67c;</i>
      </div>
      <div class="order-code">
        <span><span class="code">身份证 ></span></span>
        <input type="text" placeholder="请填写正确的身份证号码">
      </div>
    </li>
    <span>咨询电话</span>
  </ul>
</template>

<script>
  export default {
    name: 'OrderPeople',
    props: {
      listnum: Number
    },
    data () {
      return {
        namevalue: '',
        phonevalue: '',
        codevalue: '',
        checkout: {
          name: '',
          phone: '',
          code: ''
        }
      }
    },
    methods: {
      checkOutName () {
        var reg = /[\u4e00-\u9fa5]/
        this.checkout.name = reg.test(this.namevalue)
        console.log(this.checkout.name)
      },
      checkOutPhone () {
        var reg = /^\d{11}$/
        this.checkout.phone = reg.test(this.phonevalue)
        console.log(this.checkout.phone)
      },
      checkOutCode () {
        var reg = /^\d{17}(\d|X)$/
        this.checkout.code = reg.test(this.codevalue)
        console.log(this.checkout.code)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variables.styl'  
  .order-list {
    width: 100%
    min-height: .6rem
    overflow: hidden
    li {
      margin-bottom: .2rem
      background: #fff
      div {
        display: flex
        overflow: hidden
        min-height: .5rem
        padding: .24rem
        border-bottom: 1px solid #E8E8E8
        >span:nth-child(1) {
          float: left
          width: 1.6rem
          color: #616161
          font-size: .3rem
          line-height: .5rem
          .code {
            float:left
            height:100%;
            min-width: .24rem
            max-width: 1.4rem
            border: .02rem solid #ccc
            font-size: .28rem;
            text-indent: .1rem;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        input {
          flex: 1
          height: .38rem
          padding: .06rem 0
          border: 0
          color: #212121
        }
        .icon {
          display: inline-block;
          color: #1ba9ba;
          font-size: .64rem;
          line-height: .5rem;
          text-align: center;
        }
      }
      .order-phone {
        >span:nth-child(2) {
          min-width: .4rem
          max-width: 1rem
          margin-right: .1rem
          padding: 0 .24rem 0 .06rem
          color: #888;
          border:1px solid #E8E8E8
          font-size: .28rem;
          line-height: .5rem;
          text-align: right
          text-indent: 0
        }
      }
    }
    >span {
      float: right
      color: #00afc7;
      margin-right: .5rem
    }
  }
</style>