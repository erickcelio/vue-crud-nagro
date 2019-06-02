import { getProperties } from '@/services/properties'

export default {
  state: {
    properties: []
  },
  mutations: {
    fillProperties (state, growers) {
      state.properties = growers
    }
  },
  actions: {
    async fetchProperties (context) {
      context.commit('fillProperties', await getProperties())
    }
  },
  getters: {
    properties: state => {
      return state.properties || []
    }
  }
}
