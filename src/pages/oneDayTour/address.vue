<template>
  <div class="address">
    <ul class="address-list" @click="handleCityClick">
      <li class="address-title">全部目的地</li>
      <li class="address-title">北京</li>
      <li class="address-title">保定</li>
      <li class="address-title">唐山</li>
      <li class="address-title">张家口</li>
      <li class="address-title">承德</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MenuAddress',
    methods: {
      handleCityClick (e) {
        var li = e.target
        var city = li.innerHTML
        this.$emit('changecity', city)
      }
    }
  }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/variables.styl"
    .address
      position: absolute
      width: 100%
      height: 4.8rem
      background: #fff
      .address-list
        line-height: 1
        color: #212121
        font-size: .28rem
        .address-title
          line-height: .8rem
          height: .8rem
          overflow: hidden
          text-align: center
          color: #212121
</style>