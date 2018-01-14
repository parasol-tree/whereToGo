<template>
<div class="classify" ref="position" :class="{position:positionStyle}">
  <div class="classify-top">
    <div class="classify-select" @click="handleShowClick">
      {{selectData ? selectData : "全部分类"}}
    </div>
    <div class="classify-select" @click="handleaddressClick">
      {{cityAddress ? cityAddress : "全部目的地"}}
    </div>
    <div class="classify-select">
      推荐排序
    </div>
  </div>
  <menu-classify :categories="categories" 
                 v-show="selectShow"
                 @changeselect="handleSelectChange"
  ></menu-classify>
  <menu-address v-show="addressShow" 
                @changecity="handlechangeCity"
  ></menu-address>
</div>
</template>

<script>
  import MenuClassify from './classify'
  import MenuAddress from './address'
  export default {
    name: 'onedaytour-classify',
    props: {
      categories: Array
    },
    data () {
      return {
        cityAddress: '',
        selectData: '',
        selectShow: false,
        addressShow: false,
        positionStyle: false
      }
    },
    components: {
      MenuClassify,
      MenuAddress
    },
    methods: {
      handleShowClick () {
        this.selectShow = !this.selectShow
      },
      handleScroll () {
        this.scroll = document.body.scrollTop
        if (this.scroll > 44) {
          this.positionStyle = true
        } else {
          this.positionStyle = false
        }
      },
      handleaddressClick () {
        this.addressShow = !this.addressShow
      },
      handlechangeCity (city) {
        this.cityAddress = city
        this.addressShow = !this.addressShow
        this.setRouter(this.cityAddress)
      },
      handleSelectChange (text) {
        this.selectData = text
        this.selectShow = !this.selectShow
        this.setRouter(this.selectData)
      },
      setRouter (data) {
        this.$emit('changerouter', data)
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/stylus/variables.styl"
  .classify
    width: 100%
    position: relative
    z-index: 5
  .classify-top
    width: 100%
    height: .8rem
    line-height: .8rem
    background: #fff
    font-size: 0
    color: #666
    .classify-select
      display: inline-block
      position: relative
      width: 33%
      text-align: center
      background: #fff
      border-left: 0.02rem solid #ccc
      font-size: .28rem
      &:before
        position: absolute
        top: .36rem
        right: .18rem
        content: "\0020"
        width: 0;
        height: 0;
        border-left: .08rem solid transparent
        border-right: .08rem solid transparent
        border-top: .08rem solid #666
  .position
    position: fixed
    top: 0
</style>