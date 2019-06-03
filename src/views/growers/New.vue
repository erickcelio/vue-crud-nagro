<template>
  <div>
    <FormComponent
      type="edit"
      :data="grower"
      :fields="fields"
      :on-click-cancel="cancelFunction"
      :on-click-confirm="confirmFunction"
      title="Novo Produtor"
    />
  </div>
</template>

<script>
import FormComponent from '@/components/Form'
import { mapActions } from 'vuex'
import { validateGrowerData } from '@/services/grower'
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
  methods: {
    ...mapActions(['newGrower']),
    cancelFunction: function () {
      this.$router.push(`/growers`)
    },
    confirmFunction: async function (data) {
      try {
        await this.newGrower(validateGrowerData(data))
        this.$notify({
          group: 'info',
          type: 'success',
          text: 'Produtor criado com sucesso!'
        })
        this.$router.push(`/growers`)
      } catch (e) {
        this.$notify({
          group: 'info',
          type: 'error',
          text: e.message
        })
      }
    }
  }
}
</script>

<style></style>
