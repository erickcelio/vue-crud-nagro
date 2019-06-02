import { deleteGrower, getGrower, getGrowers, updateGrower, newGrower } from './../../services/grower'

export default {
  state: {
    growers: []
  },
  mutations: {
    fillGrowers (state, growers) {
      state.growers = growers
    },
    fillGrower (state, grower) {
      state.growers.push(grower)
    }
  },
  actions: {
    async fetchGrowers (context) {
      if (!context.state.growers.length) {
        context.commit('fillGrowers', await getGrowers())
      }
    },
    async fetchGrower (context, id) {
      const hasGrower = context.state.growers.find((grower) =>
        parseInt(grower.id) === parseInt(id))
      if (!hasGrower) {
        const grower = await getGrower(id)
        if (grower) {
          context.commit('fillGrower', grower)
        }
      }
    },
    async deleteGrower (context, id) {
      await deleteGrower(id)
      const growers = context.state.growers.filter(grower => grower.id !== id)
      context.commit('fillGrowers', growers)
    },
    async updateGrower (context, data) {
      const updatedGrower = await updateGrower(data)
      if (updatedGrower) {
        context.commit('fillGrowers', context.state.growers.map((grower) => {
          if (grower.id === data.id) {
            grower = updatedGrower
          }
          return grower
        }))
      }
    },
    async newGrower (context, data) {
      const grower = await newGrower(data)
      if (grower) {
        context.commit('fillGrower', grower)
      }
    }
  },
  getters: {
    growers: state => {
      return state.growers || []
    },
    getGrowerById: (state) => (id) => {
      return state.growers.find((grower) =>
        parseInt(grower.id) === parseInt(id))
    }
  }
}
