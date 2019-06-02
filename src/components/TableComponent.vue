<template>
  <div class="container">
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
        <Button
          v-if="createButton"
          class="create-button"
          :text="createButton.text"
          :onClick="onClickCreateButton"
          icon="plus"
        />
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
        <tbody v-if="paginatedItems[currentPage].length">
        <tr
          class="data"
          v-for="(item, index) in paginatedItems[currentPage]"
          @click="onSelectItem(item)"
          :key="index">
          <td
            v-for="(field, index) in fields"
            :style="`text-align: ${field.align || 'left'}`"
            :key="index">
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
      <div class="pagination">
        <div>
        <span class="chevron" @click="updateCurrentPage(currentPage - 1)">
          <v-icon name="chevron-left" scale="2"/>
        </span>
          <span
            v-for="(_, index) in paginatedItems"
            :key="index"
            @click="updateCurrentPage(index)"
            :class="currentPage === index ? 'current-page' : ''"
            class="page-counter">
          {{ index + 1 }}
        </span>
          <span class="chevron" @click="updateCurrentPage(currentPage + 1)">
          <v-icon name="chevron-right" scale="2"/>
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectButton from './SelectButton'
import Button from './Button'
export default {
  name: 'tableComponent',
  components: { SelectButton, Button },
  props: {
    items: Array,
    fields: Array,
    maxItems: String,
    route: String,
    createButton: Object
  },
  data () {
    return {
      orderBy: null,
      orderDirection: 'asc',
      filter: '',
      filterBy: this.fields[0].nameInArray,
      currentPage: 0
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
    },
    updateCurrentPage: function (page) {
      const maxPage = this.paginatedItems.length
      if (page >= 0 && page < maxPage) {
        this.currentPage = page
      }
    },
    onClickCreateButton: function () {
      this.$router.push(this.createButton.route)
    },
    onSelectItem: function (item) {
      this.$router.push(`${this.route}/view/${item.id}`)
    }
  },
  computed: {
    paginatedItems: function () {
      const { maxItems, orderBy, orderDirection, filter, filterBy, items } = this
      let numberOfPages = 1
      let filteredItems
      let paginatedItems

      if (orderBy && orderDirection) {
        orderDirection === 'asc'
          ? items.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1)
          : items.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : -1)
      }

      filteredItems = items.filter((item) =>
        item[filterBy].toLowerCase().includes(filter.toLowerCase()))

      if (filteredItems.length) {
        numberOfPages = Math.ceil(filteredItems.length / parseInt(maxItems))
      }

      paginatedItems = [...Array(numberOfPages)].map(() =>
        filteredItems.splice(0, maxItems))

      return paginatedItems
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/colors";
  @import "../assets/scss/mixins";
  .container {
    width: 100vw;
    @include row;
    align-items: center;
    justify-content: center;
  }
  #tableComponent {
    overflow-x: auto;
    padding: 12px;
    max-width: 1000px;
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
      .create-button {
        @include responsive(m) {
          position: absolute;
          top: 15px;
          right: 10px;
        }
      }
    }
    .pagination {
      @include row;
      padding-top: 8px;
      justify-content: center;
      font-weight: bold;
      color: $primary-color;
      div {
        @include row;
        background-color: transparentize(white, .3);
        border: 1px solid $primary-color;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 18px;
        .chevron {
          padding: 8px 18px;
          cursor: pointer;
        }
        .page-counter {
          padding: 0 8px;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .current-page {
          color: white;
          @include text-shadow-primary;
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
  }
</style>
