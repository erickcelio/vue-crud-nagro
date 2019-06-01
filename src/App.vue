<template>
  <div id="app">
    <Background />
    <router-view/>
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
export default {
  components: { Background }
}
</script>

<style lang="scss">
  @import "assets/scss/colors";
body {
  font-family: 'Arial', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-size: 16px;
  color: white;
  margin: 0;
  background: $background-gradient;
  #app {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
}
</style>
