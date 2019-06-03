<template>
  <div>
    <FormComponent
      v-if="property"
      type="edit"
      :data="property"
      :fields="fields"
      :on-click-cancel="cancelFunction"
      :on-click-confirm="confirmFunction"
      title="Editar Propriedade"
    />
  </div>
</template>

<script>
import FormComponent from '@/components/Form'
import { mapGetters, mapActions } from 'vuex'
import { validatePropertiesData } from '@/services/properties'
export default {
  components: { FormComponent },
  data () {
    return {
      property: null,
      fields: [
        { name: 'Nome', key: 'name', type: 'text' },
        { name: 'Area Total', key: 'total_area', type: 'text' },
        { name: 'Cidade', key: 'city', type: 'text' },
        { name: 'Produtor', key: 'growerName', type: 'select', data: [], onSelect: this.changeGrower, selected: [] }
      ]
    }
  },
  computed: {
    ...mapGetters(['getPropertyById', 'getGrowerById', 'growers'])
  },
  methods: {
    ...mapActions(['fetchProperties', 'fetchGrowers', 'updateProperty']),
    cancelFunction: function () {
      console.log('here')
      this.$router.push(`/properties/view/${this.property.id}`)
    },
    confirmFunction: async function (data) {
      try {
        await this.updateProperty(validatePropertiesData(data))
        this.$notify({
          group: 'info',
          type: 'success',
          text: 'Propriedade salva com sucesso!'
        })
        this.$router.push(`/properties/view/${this.property.id}`)
      } catch (e) {
        this.$notify({
          group: 'info',
          type: 'error',
          text: e.message
        })
      }
    },
    changeGrower: async function ({ id, name }) {
      this.property.growerId = id
      this.property.growerName = name
    }
  },
  async mounted () {
    const { params } = this.$route
    const property = this.getPropertyById(params.id)
    if (!property) {
      this.$router.push('/growers')
    }
    const grower = this.getGrowerById(property.growerId)
    property.growerName = grower.name
    this.fields[3].selected = grower
    this.fields[3].data = this.growers
    this.property = { ...property }
  }
}
</script>

<style></style>
