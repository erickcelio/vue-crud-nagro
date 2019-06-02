import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Growers = () => import('./views/Growers')
const GrowersList = () => import('@/views/growers/List')
const GrowersView = () => import('@/views/growers/View')
const GrowersNew = () => import('@/views/growers/New')
const GrowersEdit = () => import('@/views/growers/Edit')

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
      component: Growers,
      children: [
        {
          path: '',
          component: GrowersList
        },
        {
          path: 'view/:id',
          component: GrowersView
        },
        {
          path: 'new',
          component: GrowersNew
        },
        {
          path: 'edit/:id',
          component: GrowersEdit
        }
      ]
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties
    }
  ]
})
