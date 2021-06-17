<template>
  <DetailPanel>
    <h1>{{ detail["belediye-ismi"] }}</h1>
    <ul>
      <li v-for="(item, index) in Object.keys(detail)" :key="index">
        <h6>{{ item }}</h6>
        <span>{{ detail[item] }}</span>
      </li>
    </ul>
  </DetailPanel>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sehirlerDetay"]),
    detail() {
      return this.sehirlerDetay[this.$route.params.id];
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
  }
}
</style>
