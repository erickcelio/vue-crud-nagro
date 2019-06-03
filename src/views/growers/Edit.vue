<template>
  <div>
    <FormComponent
      type="edit"
      :data="grower"
      :fields="fields"
      :on-click-cancel="cancelFunction"
      :on-click-confirm="confirmFunction"
      title="Editar Produtor"
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
      growerBackUp: {},
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
    ...mapActions(['fetchGrower', 'updateGrower']),
    cancelFunction: function () {
      this.growers = this.growerBackUp
      this.$router.push(`/growers/view/${this.grower.id}`)
    },
    confirmFunction: async function (data) {
      await this.updateGrower(data)
      this.$notify({
        group: 'info',
        type: 'success',
        text: 'Produtor salvo com sucesso!'
      })
      this.$router.push(`/growers/view/${this.grower.id}`)
    }
  },
  async mounted () {
    const { params } = this.$route
    await this.fetchGrower(params.id)
    if (!this.getGrowerById(params.id)) {
      this.$router.push('/growers')
    }

    this.grower = { ...this.getGrowerById(params.id) }
  }
}
</script>

<style></style>
