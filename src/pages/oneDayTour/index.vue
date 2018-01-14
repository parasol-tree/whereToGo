<template>
    <div>
        <onedaytour-header></onedaytour-header>
        <onedaytour-menu :categories="categories"
                          @changerouter="handleRouterChange"
        ></onedaytour-menu>
        <onedaytour-list :list="list"></onedaytour-list>
        <onedaytour-pagination @changePage="handlePageChange"
        ></onedaytour-pagination>
    </div>
</template>

<script>
  import axios from 'axios'
  import OnedaytourHeader from './header'
  import OnedaytourMenu from './menu'
  import OnedaytourList from './list'
  import OnedaytourPagination from './pagination'
  export default {
    name: 'oneDayTour',
    components: {
      OnedaytourHeader,
      OnedaytourMenu,
      OnedaytourList,
      OnedaytourPagination
    },
    data () {
      return {
        list: [],
        categories: []
      }
    },
    methods: {
      getListInfo (data) {
        axios.get('/api/onedaytour.json', {
          params: {
            id: data,
            page: this.$data.page ? this.$data.page : 1,
            size: 10
          }
        })
          .then(this.handleListInfoSucc)
          .catch(this.handleListInfoError)
        axios.get('/api/categories.json')
          .then(this.handleCateSucc)
          .catch(this.handleCateError)
      },
      handleListInfoSucc (res) {
        this.list = res.data.data.list
      },
      handleCateSucc (res) {
        this.categories = res.data.data.categories
      },
      handleRouterChange (data) {
        this.getListInfo(data)
      },
      handlePageChange (page) {
        this.$data['page'] = page
        this.getListInfo()
      }
    },
    created () {
      this.getListInfo('')
    }
  }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/variables.styl"
</style>