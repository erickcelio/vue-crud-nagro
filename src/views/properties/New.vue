<template>
  <div>
    <FormComponent
      type="edit"
      :data="property"
      :fields="fields"
      :on-click-cancel="cancelFunction"
      :on-click-confirm="confirmFunction"
      title="Nova Propriedade"
    />
  </div>
</template>

<script>
import FormComponent from '@/components/Form'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { FormComponent },
  data () {
    return {
      property: {},
      fields: [
        { name: 'Nome', key: 'name', type: 'text' },
        { name: 'Area Total', key: 'total_area', type: 'text' },
        { name: 'Cidade', key: 'city', type: 'text' },
        { name: 'Produtor', key: 'growerName', type: 'select', data: this.growers, onSelect: this.changeGrower }
      ]
    }
  },
  computed: {
    ...mapGetters(['growers'])
  },
  methods: {
    ...mapActions(['newProperty', 'fetchGrowers']),
    cancelFunction: function () {
      this.$router.push(`/properties`)
    },
    confirmFunction: async function (data) {
      await this.newProperty(data)
      this.$notify({
        group: 'info',
        type: 'success',
        text: 'Propriedade criada com sucesso!'
      })
      this.$router.push(`/properties`)
    },
    changeGrower: function (grower) {
      this.property.growerId = grower.id
    }
  },
  async mounted () {
    if (!this.growers.length) {
      await this.fetchGrowers()
    }
    this.fields[3].data = this.growers
  }
}
</script>

<style></style>
