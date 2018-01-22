<template>
  <div class="ticket-con">
    <ul class="list-con">
      <li class="loop-list" v-for="item in list" :key="item.id" @click="toGoDetail(item.id)">
        <div class="loop-list-left">
          <div class="list-img-con">
            <img class="list-left-img" :src="item.path">
          </div>
        </div>
        <div class="loop-list-right">
          <h4 class="list-right-title title-ellipsis">{{item.name}}</h4>
          <div class="list-right-message">
            <span class="message-style" v-show="item.address">{{item.address}}</span>
            <span class="message-style message-border" v-show="item.expense">{{item.expense}}</span>
            <span class="message-style message-border" v-show="item.shopping">{{item.shopping}}</span>
          </div>
          <div class="list-right-price">
            <span class="price-color">
              ￥<em class="price-size">{{item.price}}</em>
            </span>
            <span class="price-title">起</span>
          </div>
          <div class="list-right-moreinfo">
            <span class="moreinfo-text">{{item.sell}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'onedaytour-list',
    props: {
      list: Array
    },
    methods: {
      toGoDetail (id) {
        this.$router.push({name: 'Detail', params: {id: id}})
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/stylus/variables.styl"
  .ticket-con
    display: block
    border-top: .02rem solid #ccc
    .list-con
      background: #fff
      .loop-list
        display: flex
        justify-content: start
        color: #212121
        .loop-list-left
          width: 1.6rem
          height: 1.6rem
          margin: .2rem
          .list-img-con
            overflow:hidden
            height: 0
            padding-bottom: 100%
            .list-left-img
              width: 100%
        .loop-list-right
          flex: 1
          overflow: hidden
          height: 1.6rem
          padding: .2rem .2rem .2rem 0
          .list-right-title
            overflow: hidden
            height: .7rem
            line-height: .36rem
            font-size: .3rem
          .title-ellipsis
            display: -webkit-box
            text-overflow: ellipsis
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
          .list-right-message
            overflow: hidden
            height: .58rem
            line-height: .24rem
            padding-top: .06rem
            font-size: 0
            .message-style
              padding: 0 .1rem
              font-size: .24rem
              color: $bgColor
            .message-border
              border-left: 1px solid #ccc
              color: #212121
          .list-right-price
            display: inline
            float: right
            position: relative
            top: -.35rem
            font-size: 0
            .price-color
              font-size: .22rem
              font-weight: bold
              color: #ff8300
              .price-size
                font-size: .32rem
            .price-title
              font-size: .22rem
              color: #999
        .list-right-moreinfo
          width: 100%
          font-size: 0
          coclor: #9e9e9e
          .moreinfo-text
            padding: 0 .1rem
            font-size: .22rem
              
              
</style>