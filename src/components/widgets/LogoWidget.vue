<template>
  <div class="logo-wrapper">
    <img class="logo" :style="size" :src="logoSite" alt="CAR RENTAL" />
  </div>
</template>

<script>
export default {
  props: {
    size: Object,
  },
  data() {
    return {
      logoSite: require("@/assets/img/logo.png"),
    };
  },
};
</script>

<style></style>
