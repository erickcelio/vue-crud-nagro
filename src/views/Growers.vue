<template>
  <div>
    <ReturnPage />
    <Table :items="growers" :fields="fields"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Table from '@/components/Table'
export default {
  name: 'growers',
  data () {
    return {
      fields: [
        { name: 'CPF', nameInArray: 'cpf', width: 40 },
        { name: 'Nome', nameInArray: 'name', width: 60 }
      ]
    }
  },
  mounted () {
    this.fetchGrowers()
  },
  computed: {
    ...mapGetters(['growers'])
  },
  methods: {
    ...mapActions(['fetchGrowers'])
  },
  components: {
    Table
  }
}
</script>

<style scoped>
</style>
