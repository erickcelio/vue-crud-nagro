import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Growers = () => import('./views/Growers')
const GrowersList = () => import('@/views/growers/List')
const GrowersView = () => import('@/views/growers/View')
const GrowersNew = () => import('@/views/growers/New')
const GrowersEdit = () => import('@/views/growers/Edit')

const Properties = () => import('./views/Properties')
const PropertiesList = () => import('@/views/properties/List')
const PropertiesView = () => import('@/views/properties/View')
const PropertiesNew = () => import('@/views/properties/New')
const PropertiesEdit = () => import('@/views/properties/Edit')

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
      component: Properties,
      children: [
        {
          path: '',
          component: PropertiesList
        },
        {
          path: 'view/:id',
          component: PropertiesView
        },
        {
          path: 'new',
          component: PropertiesNew
        },
        {
          path: 'edit/:id',
          component: PropertiesEdit
        }
      ]
    }
  ]
})
