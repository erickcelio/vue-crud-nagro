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
      this.$router.push(`/growers/`)
    },
    confirmFunction: async function (data) {
      await this.newGrower(data)
      this.$router.push(`/growers/`)
    }
  }
}
</script>

<style></style>
