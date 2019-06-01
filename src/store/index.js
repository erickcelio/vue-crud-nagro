import Vue from 'vue'
import Vuex from 'vuex'

import grower from './modules/grower'
import properties from './modules/properties'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    grower,
    properties
  }
})
