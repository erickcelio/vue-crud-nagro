<template>
  <div>
    <FormComponent
      type="view"
      :data="grower"
      :fields="fields"
      :on-click-delete="deleteFunction"
      :on-click-return="returnFunction"
      :on-click-edit="editFunction"
      title="Visualizar Produtor"
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
      grower: {},
      fields: [
        { name: 'Nome', key: 'name', type: 'text' },
        { name: 'CPF', key: 'cpf', type: 'text' }
      ]
    }
  },
  computed: {
    ...mapGetters(['getGrowerById'])
  },
  methods: {
    ...mapActions(['fetchGrower', 'deleteGrower', 'deletePropertiesByGrowerId']),
    editFunction: function () {
      this.$router.push(`/growers/edit/${this.grower.id}`)
    },
    returnFunction: function () {
      this.$router.push('/growers')
    },
    deleteFunction: async function () {
      await this.deleteGrower(this.grower.id)
      await this.deletePropertiesByGrowerId(this.grower.id)
      this.$notify({
        group: 'info',
        type: 'success',
        text: 'Produtor excluido com sucesso!'
      })
      this.$router.push('/growers')
    }
  },
  async mounted () {
    const { params } = this.$route
    await this.fetchGrower(params.id)
    if (!this.getGrowerById(params.id)) {
      this.$router.push('/growers')
    }
    this.grower = this.getGrowerById(params.id)
  }
}
</script>

<style></style>
