<template>
  <div ref="scroller">
    <div class="content">

      <div class="item"
        v-for="item in sights"
        :key="item.id"
        @click="toGoDetail(item.id)"
        >
          <img :src="item.imgUrl" class="item-img">
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">
            <span class="price-tag">&yen;</span>
            {{item.num}}
            <span class="price-start">起</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BSsroll from 'better-scroll'
export default {
  name: 'index-scroller',
  props: {
    sights: Array
  },
  methods: {
    toGoDetail (id) {
      // console.log(id)
      this.$router.push({name: 'Detail', params: {id: id}})
    }
  },
  mounted () {
    this.scroller = new BSsroll(this.$refs.scroller)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variables.styl'
  .item
    display: flex
    padding: .24rem
    .item-img
      width: 1.4rem
      height: 1.4rem
      margin-right: .2rem
    .item-content
      flex: 1
      .item-title
        margin: .04rem 0 .1rem 0
        font-size: .3rem
        font-weight: bold
        color: $fontColor
      .item-desc
        margin-bottom: .1rem
        font-size: .28rem
        color: $lightFontColor
      .item-price
        margin-top: .2rem
        font-size: .36rem
        color: $enlightFontColor
        .price-tag
          font-size: .24rem
        .price-start
          font-size: .24rem
          color: $lightFontColor
</style>
