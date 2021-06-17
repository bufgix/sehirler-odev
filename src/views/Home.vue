<template>
  <div
    class="p-relative  d-flex flex-justify-center flex-items-center w-100 h-100"
  >
    <Map @click-city="onClickCity" @hover-city="onHoverCity" />
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  created() {
    this.initSehirDetay();
  },
  computed: {
    ...mapState(["sehirlerDetay"]),
  },
  methods: {
    ...mapActions(["initSehirDetay"]),
    onClickCity(city) {
      console.log(city);
      this.$router.push({ name: "detay", params: { id: city.plaka } });
    },
    onHoverCity(city) {
      console.log(city);
    },
  },
};
</script>
