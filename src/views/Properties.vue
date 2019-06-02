<template>
  <div>
    <ReturnPage />
    <Table :items="properties" :fields="fields"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Table from '@/components/Table'
export default {
  name: 'properties',
  data () {
    return {
      fields: [
        { name: 'Cidade', nameInArray: 'city', width: 40 },
        { name: 'Nome', nameInArray: 'name', width: 60 }
      ]
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
  },
  components: {
    Table
  }
}
</script>

<style scoped>
</style>
