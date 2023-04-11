<template>
  <footer class="footer mt-auto py-5">
    <div class="container">
      <LogoWidget :size="{ width: '80px' }" />
      <span class="text-muted">Place sticky footer content here.</span>
    </div>
  </footer>
</template>

<script>
import LogoWidget from "./widgets/LogoWidget.vue";

export default { components: { LogoWidget } };
</script>

<style>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 1.2rem 4rem;
}
</style>
