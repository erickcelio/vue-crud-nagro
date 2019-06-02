<template>
  <div id="selectInput" @click="showOptions = !showOptions">
    <span class="text">
      {{ selected.name }}
    </span>
    <v-icon class="icon" name="sort" scale="1"/>
    <div v-if="showOptions" id="selectOptions">
      <span
        v-for="(option, index) in options"
        @click="onSelectOption(option)"
        :key="index">
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectButton',
  data () {
    return {
      showOptions: false,
      selected: this.optionSelected || this.options[0]
    }
  },
  props: {
    options: Array,
    optionSelected: Object,
    onSelect: Function
  },
  methods: {
    onSelectOption: function (option) {
      this.onSelect(option)
      this.selected = option
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/colors";
  @import "../assets/scss/mixins";
  #selectInput {
    @include row;
    padding: 12px;
    border-radius: 10px;
    background-color: transparentize(white, .3);
    border: 1px solid $primary-color;
    color: $primary-color;
    font-weight: bold;
    position: relative;
    cursor: pointer;
    .text {
      flex: 1;
      max-width: available;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    #selectOptions {
      @include column;
      width: 100%;
      align-items: center;
      top: 41.5px;
      left: 0;
      background-color:  white;
      border-radius: 5px;
      border: 1px solid $primary-color;
      position: absolute;
      z-index: 100;
      span {
        margin: 8px 16px;
      }
    }
  }
</style>
