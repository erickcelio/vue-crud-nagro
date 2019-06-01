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
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.2;
  }
</style>
