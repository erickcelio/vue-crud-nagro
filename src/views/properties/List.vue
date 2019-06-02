<template>
  <div>
    <ReturnPage />
    <TableComponent
      :items="properties"
      :fields="fields"
      :create-button="createButton"
      route="properties"
      max-items="10"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TableComponent from '@/components/TableComponent'
export default {
  name: 'properties',
  components: {
    TableComponent
  },
  data () {
    return {
      fields: [
        { name: 'Cidade', nameInArray: 'city', width: 40 },
        { name: 'Nome', nameInArray: 'name', width: 60 }
      ],
      createButton: {
        text: 'Nova Propriedade',
        route: 'properties/new'
      }
    }
  },
  mounted () {
    this.fetchProperties()
  },
  computed: {
    ...mapGetters(['properties'])
  },
  methods: {
    ...mapActions(['fetchProperties'])
  }
}
</script>

<style scoped>
</style>
