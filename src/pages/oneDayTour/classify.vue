<template>
    <div class="select-container">
      <div class="select">
        <div class="wrapper select-left">
          <ul class="content">
            <li class="select-item" 
                v-for="item in categories" 
                :key="item.id"
                @click="changeData(item.detail)"
                ref="li"
                >
              <img class="select-img" :src="item.imgURL">
              {{item.name}}
              <span class="select-num">{{item.number}}</span>
            </li>
          </ul>
        </div>
        <div class="sights select-right">
          <ul class="content" 
              @click="changeSelectData">
            <li class="select-item"
                v-for="items in detail"
                :key="items.id"
                :data-name="items.name"
            >
              {{items.name}}
              <span class="select-num">{{items.number}}</span>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'classify',
    props: {
      categories: Array
    },
    data () {
      return {
        detail: []
      }
    },
    methods: {
      changeData (data) {
        this.detail = data
      },
      changeSelectData (e) {
        var text = e.target.getAttribute('data-name')
        this.$emit('changeselect', text)
      }
    },
    mounted () {
      this.wrapper = new BScroll('.wrapper')
      this.sights = new BScroll('.sights')
    }
  }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/variables.styl"
  .wrapper
    overflow: hidden
    height: 4.8rem
  .sights
    overflow: hidden
    height: 4.8rem
  .select
    overflow-y: hidden
    position: absolute
    display: flex
    width: 100%
    height: 4.8rem
    jusitify-contern: space-between
    z-index: 1
    .select-left
      flex: 1
      background: #fff
      line-height: .8rem
      .select-item
        overflow: hidden
        height: .8rem
        line-height: .8rem
        padding-left: .3rem
        font-size: .28rem
        color: #212121
        .select-img
          width: .3rem
          height: .3rem
          margin-right: .1rem
        .select-num
          float: right
          line-height: .8rem
          margin-right: .2rem
          font-size: .24rem
          color: #9e9e9e
    .select-right
      flex: 1
      overflow: hidden
      background: #f1f1f1
      .select-item
        overflow: hidden
        height: .8rem
        line-height: .8rem
        padding-left: .3rem
        font-size: .28rem
        color: #212121
        .select-num
          float: right
          line-height: .8rem
          margin-right: .2rem
          font-size: .24rem
          color: #9e9e9e
</style>