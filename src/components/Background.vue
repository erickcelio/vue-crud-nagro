<template>
  <div id="background">
  </div>
</template>

<script>
export default {
  name: 'background'
}
</script>

<style scoped>
  #background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/images/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.2;
  }
</style>
