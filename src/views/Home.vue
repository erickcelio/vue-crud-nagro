<template>
  <div class="container">
    <div class="menu">
      <div class="img grower"></div>
      <span class="title">Produtores</span>
    </div>
    <div class="menu">
      <div class="img properties"></div>
      <span class="title">Propriedades</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>

<style lang="scss" scoped >
  @import "../assets/scss/_mixins";
  @import "../assets/scss/colors";
  .container {
    @include column;
    flex: 1;
    justify-content: center;
    align-items: center;
    .menu {
      @include column;
      width: 100%;
      height: 260px;
      max-width: 800px;
      cursor: pointer;
      margin: 16px 48px;
      position: relative;
      border-radius: 10px;
      border: 2px solid white;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25), 1px 4px 6px rgba(0, 0, 0, 0.25);
      &:hover {
        transition: box-shadow .3s;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25);
        .properties {
          transition: opacity .3s;
          opacity: .6;
        }
        .grower {
          transition: opacity .3s;
          opacity: .5;
        }
      }
      background-color: $primary-color-light;
      @include responsive(m) {
        max-width: 280px;
      }
      .img {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .title {
        z-index: 1;
        font-size: 32px;
        font-weight: bold;
        text-shadow: 1px  1px $primary-color, -1px  1px $primary-color, 1px -1px $primary-color, -1px -1px $primary-color, 1px 1px 2px $secondary-color;
        &::after {
          content: '';
          height: 3px;
          background-color: white;
          display: block;
          border: 1px solid $primary-color;
          box-shadow: 1px 1px 2px $secondary-color;
        }
      }
      .grower {
        background-image: url("../assets/images/grower.jpg");
        opacity: .3;
      }
      .properties {
        background-image: url("../assets/images/properties.jpg");
        opacity: .4;
      }
    }
  }
</style>
