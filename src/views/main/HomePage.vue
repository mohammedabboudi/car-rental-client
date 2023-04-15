<template>
  <HeaderSection />
  <HeroSection />
  <MainSection>
    <FleetSection />
  </MainSection>
  <FooterSection />
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import MainSection from "@/components/MainSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import FleetSection from "@/components/FleetSection.vue";
import ModalWidget from "@/components/widgets/ModalWidget.vue";
export default {
  components: {
    HeaderSection,
    FooterSection,
    MainSection,
    HeroSection,
    FleetSection,
    ModalWidget,
  },
};
</script>

<style></style>
