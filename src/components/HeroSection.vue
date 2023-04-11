<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <InnerCarousel
        v-for="image in carousel"
        :key="image.title"
        :img="image.img"
        :title="image.title"
        :text="image.text"
      />
    </div>
  </div>
</template>

<script>
import InnerCarousel from "@/components/widgets/InnerCarousel.vue";
export default {
  components: { InnerCarousel },
  data() {
    return {
      carousel: [
        {
          img: require("@/assets/img/hero1.jpg"),
          title: "title 1",
          text: "lorem impsum hsdf huhui erfuh sf lorem impsum hsdf huhui erfuh sf impsum hsdf huhui erfuh sf.",
        },
        {
          img: require("@/assets/img/hero2.jpg"),
          title: "title 2",
          text: "lorem impsum hsdf huhui erfuh sf lorem impsum hsdf huhui erfuh sf impsum hsdf huhui erfuh sf.",
        },
        {
          img: require("@/assets/img/hero3.jpg"),
          title: "title 3",
          text: "lorem impsum hsdf huhui erfuh s lorem impsum hsdf huhui erfuh sff impsum hsdf huhui erfuh sf.",
        },
        {
          img: require("@/assets/img/hero4.jpg"),
          title: "title 4",
          text: "lorem impsum hsdf huhui erfuh sf lorem impsum hsdf huhui erfuh sf impsum hsdf huhui erfuh sf.",
        },
      ],
    };
  },
};
</script>

<style></style>
