<template>
  <div class="form">
    <div class="form-title">
      {{ title }}
    </div>
    <div class="form-body">
      <div v-if="type === 'new'">
        New
      </div>
      <div v-else-if="type === 'edit'">
        <div v-for="(field, index) in fields" :key="index">
          <label v-if="field.type === 'text'" class="input-container">
            <span class="input-title"> {{field.name}} </span>
            <input class="input" type="text" v-model="data[field.key]">
          </label>
        </div>
        <div class="buttons-group">
          <Button
            :on-click="onClickCancel"
            text-padding="12px 28px"
            text="Cancelar"/>
          <Button
            :on-click="() => onClickConfirm(data)"
            text-padding="12px 28px"
            text="Confirmar"/>
        </div>
      </div>
      <div v-else-if="type === 'view'">
        <div v-for="(field, index) in fields" :key="index">
          <label v-if="field.type === 'text'" class="input-container">
            <span class="input-title"> {{field.name}} </span>
            <input class="input" type="text" disabled v-model="data[field.key]">
          </label>
        </div>
        <div class="buttons-group">
          <Button
            :on-click="onClickReturn"
            text-padding="12px 28px"
            text="Voltar"/>
          <Button
            :on-click="onClickEdit"
            text-padding="12px 28px"
            text="Alterar"/>
        </div>
        <div class="buttons-group">
          <Button
            :on-click="onClickDelete"
            text-padding="12px 28px"
            text="Excluir"
            background-color="#364F29"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'FormComponent',
  components: { Button },
  props: {
    type: String,
    data: Object,
    fields: Array,
    title: String,
    onClickDelete: { type: Function, default: () => {} },
    onClickEdit: { type: Function, default: () => {} },
    onClickReturn: { type: Function, default: () => {} },
    onClickCancel: { type: Function, default: () => {} },
    onClickConfirm: { type: Function, default: () => {} }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/colors";
  @import "../assets/scss/mixins";
  .form {
    width: 100vw;
    @include column;
    .buttons-group {
      @include row;
      justify-content: center;
      margin-bottom: 8px;
    }
    .form-title {
      @include text-shadow-primary;
      font-size: 32px;
      text-align: center;
      font-weight: bold;
      margin: 32px 0;
    }
    .form-body {
      .input-container {
        @include column;
        align-items: center;
        padding: 0 18px;
        padding-bottom: 18px;
        .input-title {
          @include text-shadow-primary;
          font-weight: bold;
          font-size: 18px;
          text-align: center;
        }
        .input {
          width: 100%;
          max-width: 500px;
          text-align: center;
          padding: 12px;
          background-color: transparentize(white, .3);
          border: 1px solid $primary-color;
          border-radius: 10px;
          font-weight: bold;
          outline: none;
          font-size: 16px;
          color: $secondary-color;
        }
      }
    }
  }
</style>
