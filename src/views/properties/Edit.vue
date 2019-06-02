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
      delete data.growerName
      await this.updateProperty(data)
      this.$router.push(`/properties/view/${this.property.id}`)
    },
    changeGrower: async function ({ id, name }) {
      this.property.growerId = id
      this.property.growerName = name
    }
  },
  async mounted () {
    const { params } = this.$route
    await this.fetchProperties()
    if (!this.getPropertyById(params.id)) {
      this.$router.push('/growers')
    }
    const property = this.getPropertyById(params.id)
    await this.fetchGrowers()
    const grower = this.getGrowerById(property.growerId)
    property.growerName = grower.name
    this.fields[3].selected = grower
    this.fields[3].data = this.growers
    this.property = property
  }
}
</script>

<style></style>
