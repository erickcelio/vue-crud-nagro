<template>
  <div>
    <ReturnPage />
    <TableComponent
      :items="growers"
      :fields="fields"
      :create-button="createButton"
      route="growers"
      max-items="10"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TableComponent from '@/components/TableComponent'
export default {
  name: 'growers',
  components: {
    TableComponent
  },
  data () {
    return {
      fields: [
        { name: 'CPF', nameInArray: 'cpf', width: 45, align: 'center' },
        { name: 'Nome', nameInArray: 'name', width: 55 }
      ],
      createButton: {
        text: 'Novo Produtor',
        route: 'growers/new'
      }
    }
  },
  computed: {
    ...mapGetters(['growers'])
  }
}
</script>

<style scoped>
</style>
