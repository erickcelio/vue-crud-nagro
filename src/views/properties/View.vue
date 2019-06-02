<template>
  <div>
    <FormComponent
      v-if="property"
      type="view"
      :data="property"
      :fields="fields"
      :on-click-delete="deleteFunction"
      :on-click-return="returnFunction"
      :on-click-edit="editFunction"
      title="Visualizar Propriedade"
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
        { name: 'Produtor', key: 'growerName', type: 'text' }
      ]
    }
  },
  computed: {
    ...mapGetters(['getPropertyById', 'getGrowerById'])
  },
  methods: {
    ...mapActions(['fetchProperties', 'fetchGrowers', 'deleteProperty']),
    editFunction: function () {
      this.$router.push(`/properties/edit/${this.property.id}`)
    },
    returnFunction: function () {
      this.$router.push('/properties')
    },
    deleteFunction: async function () {
      await this.deleteProperty(this.property.id)
      this.$router.push('/properties')
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
    this.property = property
  }
}
</script>

<style></style>
