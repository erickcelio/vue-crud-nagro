<template>
  <div id="app">
    <notifications group="info" position="top center" />
    <Background />
    <router-view class="view"/>
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import { mapActions } from 'vuex'
export default {
  components: { Background },
  methods: {
    ...mapActions(['fetchGrowers', 'fetchProperties'])
  },
  async beforeMount () {
    this.fetchGrowers()
    this.fetchProperties()
  }
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
    max-width: 100vw;
    overflow-y: auto;
  }
  .view {
    z-index: 1;
  }
}
</style>
