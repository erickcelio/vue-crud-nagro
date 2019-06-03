import { getProperties, updateProperty, newProperty, getProperty, deleteProperty } from '@/services/properties'

export default {
  state: {
    properties: []
  },
  mutations: {
    fillProperties (state, properties) {
      state.properties = properties
    },
    fillProperty (state, property) {
      state.properties.push(property)
    }
  },
  actions: {
    async fetchProperties (context) {
      if (!context.state.properties.length) {
        const properties = await getProperties()
        context.commit('fillProperties', properties)
      }
    },
    async fetchProperty (context, id) {
      const hasProperty = context.state.properties.find((property) =>
        parseInt(property.id) === parseInt(id))
      if (!hasProperty) {
        const property = await getProperty(id)
        if (property) {
          context.commit('fillProperty', property)
        }
      }
    },
    async deleteProperty (context, id) {
      await deleteProperty(id)
      const properties = context.state.properties.filter(property => property.id !== id)
      context.commit('fillProperties', properties)
    },
    async deletePropertiesByGrowerId (context, growerId) {
      const promises = []
      const deletedProperties = []
      context.state.properties.map((property) => {
        if (property.growerId === growerId) {
          promises.push(deleteProperty(property.id))
          deletedProperties.push(property)
        }
      })
      await Promise.all(promises)
      const properties = context.state.properties.filter(property => {
        let notExcluded = true
        deletedProperties.map((deletedProperty) => {
          notExcluded = deletedProperty.id === property.id ? false : notExcluded
        })
        return notExcluded
      })
      context.commit('fillProperties', properties)
    },
    async updateProperty (context, data) {
      const updatedProperty = await updateProperty(data)
      if (updatedProperty) {
        context.commit('fillProperties', context.state.properties.map((property) => {
          if (updatedProperty.id === property.id) {
            property = updatedProperty
          }
          return property
        }))
      }
    },
    async newProperty (context, data) {
      const property = await newProperty(data)
      if (property) {
        context.commit('fillProperty', property)
      }
    }
  },
  getters: {
    properties: state => {
      return state.properties || []
    },
    getPropertyById: (state) => (id) => {
      return state.properties.find((property) =>
        parseInt(property.id) === parseInt(id))
    }
  }
}
