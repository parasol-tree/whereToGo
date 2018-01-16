import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/homePage'
import City from '@/pages/city'
import Detail from '@/pages/detail'
import OneDayTour from '@/pages/oneDayTour'
import Order from '@/pages/order'

import DetailIntroduce from '@/pages/detailIntroduce'
import SceneryLocationMap from '@/pages/sceneryLocationMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/oneDayTour',
      name: 'OneDayTour',
      component: OneDayTour
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/detailIntroduce',
      name: 'DetailIntroduce',
      component: DetailIntroduce
    },
    {
      path: '/sceneryLocationMap',
      name: 'SceneryLocationMap',
      component: SceneryLocationMap
    }
  ]
})
