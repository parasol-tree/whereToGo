<template>
    <div>
        <onedaytour-header></onedaytour-header>
        <onedaytour-menu :categories="categories"
                          @changeselect="handleSelectChange"
                          @changesetcity="handleCityChange"
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
        categories: [],
        select: '',
        city: ''
      }
    },
    methods: {
      getListInfo () {
        axios.get('/api/onedaytour.json', {
          params: {
            id: this.select,
            city: this.city,
            page: this.$data.page ? this.$data.page : 1,
            size: 10
          }
        })
          .then(this.handleListInfoSucc)
          .catch(this.handleListInfoError)
      },
      getSelectInfo () {
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
      handleSelectChange (data) {
        this.select = data
        this.getListInfo()
      },
      handleCityChange (city) {
        this.city = city
        this.getListInfo()
      },
      handlePageChange (page) {
        this.$data['page'] = page
        this.getListInfo()
      }
    },
    created () {
      this.getListInfo()
      this.getSelectInfo()
    }
  }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/variables.styl"
</style>