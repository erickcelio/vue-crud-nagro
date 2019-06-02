<template>
  <div
    @click="onClick"
    class="button-container"
    :style="`background-color: ${backgroundColor}`">
    <span class="text" :style="`padding: ${textPadding}`">
      {{ text }}
    </span>
    <span v-if="icon" class="icon" :style="`padding: ${iconPadding}`">
      <v-icon :name="icon" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    icon: String,
    onClick: Function,
    textPadding: String,
    iconPadding: String,
    backgroundColor: String
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/colors';
  .button-container {
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    background-color: $button-color;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    border: 1px solid white;
    margin: 0 8px;
    .text {
      padding: 12px;
    }
    .icon {
      padding-right: 12px;
    }
  }
</style>
