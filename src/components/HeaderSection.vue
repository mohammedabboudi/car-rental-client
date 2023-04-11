<template>
  <header>
    <LogoWidget :size="{ width: '30px' }" />
    <NavBarWidget
      @open-signin="openSigninModal"
      @open-signup="openSignupModal"
    />
  </header>
</template>

<script>
import NavBarWidget from "./widgets/NavBarWidget.vue";
import LogoWidget from "./widgets/LogoWidget.vue";
export default {
  components: { NavBarWidget, LogoWidget },
  methods: {
    openSigninModal() {
      this.$emit("openSignin");
    },
    openSignupModal() {
      this.$emit("openSignup");
    },
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 1.2rem 2rem;
}
</style>
