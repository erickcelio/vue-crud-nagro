import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'

import Background from './components/Background'
import ReturnPage from './components/ReturnPage'

Vue.component('v-icon', Icon)
Vue.component('Background', Background)
Vue.component('ReturnPage', ReturnPage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
