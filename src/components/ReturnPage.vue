<template>
  <div @click="returnPage">
    <v-icon name="arrow-left" scale="2.5" class="return"/>
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

<style>
  .return {
    cursor: pointer;
    margin-left: 18px;
    margin-top: 18px;
  }
</style>
