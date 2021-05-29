<template>
  <div class="d-flex flex-justify-center flex-items-center w-100 h-100">
    <Map @click-city="onClickCity" @hover-city="onHoverCity" />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    onClickCity(city) {
      console.log(city);
    },
    onHoverCity(city) {
      console.log(city);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
