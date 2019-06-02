<template>
  <div id="tableComponent">
    <div class="filter">
      <SelectButton
        class="selectButton"
        :on-select="onChangeFilterBy"
        :options="fields"
      />
      <input
        class="filterInput"
        placeholder="Digite algo aqui..."
        type="text"
        v-model="filter">
    </div>
    <table>
      <thead>
        <tr class="fields">
          <th
            v-for="(field, index) in fields"
            :style="`width: ${field.width}%;`"
            @click="changeOrder(field.nameInArray)"
            :key="index">
            {{ field.name }}
            <v-icon
              v-if="orderBy === field.nameInArray"
              scale="0.8"
              :name="orderDirection === 'asc' ? 'sort-amount-down' : 'sort-amount-up'"
            />
          </th>
        </tr>
      </thead>
      <tbody v-if="orderedItems.length">
        <tr class="data" v-for="(item, index) in orderedItems" :key="index">
          <td v-for="(field, index) in fields" :key="index">
            <span>
              {{ item[field.nameInArray] }}
            </span>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr class="data">
          <td :colspan="fields.length" style="text-align: center">
            <span>
              Nenhum item Encontrado
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SelectButton from './SelectButton'
export default {
  name: 'table',
  components: { SelectButton },
  data () {
    return {
      orderBy: null,
      orderDirection: 'asc',
      filter: '',
      filterBy: this.fields[0].nameInArray
    }
  },
  methods: {
    changeOrder: function (value) {
      if (this.orderBy === value) {
        this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc'
      }
      this.orderBy = value
    },
    onChangeFilterBy: function (option) {
      this.filterBy = option.nameInArray
    }
  },
  props: {
    items: Array,
    fields: Array
  },
  computed: {
    orderedItems: function () {
      const { orderBy, orderDirection, filter, filterBy, items } = this
      if (orderBy && orderDirection) {
        orderDirection === 'asc'
          ? items.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1)
          : items.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : -1)
      }
      return items.filter((item) =>
        item[filterBy].toLowerCase().includes(filter.toLowerCase()))
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/colors";
  @import "../assets/scss/mixins";
  #tableComponent {
    overflow-x: auto;
    padding: 12px;
    .filter {
      @include row;
      width: 100%;
      margin-bottom: 8px;
      font-size: 16px;
      .selectButton {
        flex: 1;
      }
      .filterInput {
        flex: 4;
        border: 1px solid $primary-color;
        margin-left: 8px;
        background: transparentize(white, .3);
        border-radius: 10px;
        outline: none;
        padding: 8px;
        font-size: 16px;
        font-weight: bold;
        color: $secondary-color;
      }
    }
  }
  table {
    border: 1px solid $primary-color;
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    tr {
      background-color: transparentize(white, .3);
    }
    .fields {
      color: $primary-color;
      th {
        padding: 12px;
        border-bottom: 2px solid $primary-color;
      }
    }
    .data {
      color: $secondary-color;
      td {
        font-weight: bold;
        border-bottom: 2px solid $primary-color;
        padding: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
