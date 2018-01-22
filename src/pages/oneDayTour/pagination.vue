<template>
    <div class="footer">
        <div>
          <div class="footer-pagination">
            <a hred="javascript:;" 
               class="footer-disable-btn"
               @click="hanglePageMinus"
            >上一页</a>
            <span class="footer-disable-num">{{page}}/19</span>
            <a hred="javascript:;" 
               class="footer-disable-btn"
               @click="hanglePageAdd"
            >下一页</a>
          </div>
          <div class="footer-text">去哪门票</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'pagination',
    data () {
      return {
        page: 1,
        total: 19
      }
    },
    methods: {
      hanglePageAdd () {
        if (this.page < this.total) {
          this.setPageNumber(this.page)
          this.page++
        }
      },
      hanglePageMinus () {
        if (this.page > 1) {
          this.page--
          this.setPageNumber(this.page)
        }
      },
      setPageNumber (page) {
        this.$emit('changePage', page)
      }
    }
  }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/variables.styl"
    .footer
      line-height: .82rem
      margin: .2rem 0
      text-align: center
      color: #00afc7
      .footer-pagination
        height: .7rem
        line-height: .7rem
        .footer-disable-btn
          display: inline-block
          width: 1.4rem
          height: .6rem
          line-height: .6rem
          border: .02rem solid #00afc7
          border-radius: .06rem
        .footer-disable-num
          line-height: .6rem
          padding: 0 .15rem
          color: #212121
      .footer-text
        line-height: .3rem
        padding-top: .2rem
        font-size: .3rem
</style>