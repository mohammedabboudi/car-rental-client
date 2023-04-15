<template>
  <header>
    <LogoWidget :size="{ width: '30px' }" />
    <NavBarWidget />
  </header>
</template>

<script>
import NavBarWidget from "./widgets/NavBarWidget.vue";
import LogoWidget from "./widgets/LogoWidget.vue";
export default {
  components: { NavBarWidget, LogoWidget },
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
