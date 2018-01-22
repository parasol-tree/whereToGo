<template>
  <div class="slider">
    <swiper class="icons" :options="swiperOption">
      <swiper-slide class="icon-page"
        v-for="(page, index) of pages"
        :key="index">
        <div class="icons-list">
          <div v-for="item in page" :key="item.id" class="icons-item">
            <img :src="item.imgUrl" class="icon-img">
            <p class="icon-title">{{item.title}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'index-icons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variables.styl'
  .icons
    padding-bottom: .6rem
    .icon-page
      overflow: hidden
      height: 0
      padding-bottom: 2.8rem
      .icons-list
        display: flex
        flex-wrap: wrap
        .icons-item
          width: 25%
          padding-top : .3rem
          text-align: center
          .icon-img
            width: .66rem
            height: .66rem
          .icon-title
            margin-top: .16rem
            color: #333
            font-size: .28rem
</style>
