import { getGrowers } from './../../services/grower'

export default {
  state: {
    growers: []
  },
  mutations: {
    fillGrowers (state, growers) {
      state.growers = growers
    }
  },
  actions: {
    async fetchGrowers (context) {
      context.commit('fillGrowers', await getGrowers())
    }
  },
  getters: {
    growers: state => {
      return state.growers || []
    }
  }
}
