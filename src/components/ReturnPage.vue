<template>
  <div>
    <div @click="returnPage">
      <v-icon
        name="arrow-left"
        scale="2.5"
        class="return"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReturnPage',
  methods: {
    returnPage: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  div {
    display: flex;
    .return {
      cursor: pointer;
      margin-left: 18px;
      margin-top: 18px;
    }
  }
</style>
