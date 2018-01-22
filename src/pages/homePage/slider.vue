<template>
  <div class="slider">
   <swiper class="banner" :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of sliders" :key="item.id">
      <img class="banner-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'index-slider',
  props: {
    sliders: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variables.styl'
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 31.25%
    .banner-img
      width:100%
</style>
