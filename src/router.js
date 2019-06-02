import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Growers = () => import('./views/Growers')
const Properties = () => import('./views/Properties')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/growers',
      name: 'growers',
      component: Growers
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties
    }
  ]
})
