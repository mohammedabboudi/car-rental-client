<template>
  <div class="carousel-item active">
    <img :src="img" class="d-block w-100" :alt="title" />
    <div class="cover"></div>
    <div class="carousel-caption d-none d-md-block">
      <h5 class="fs-2 text-uppercase">{{ title }}</h5>
      <p class="fs-4 fw-light text-uppercase">{{ text }}</p>
    </div>
    <div class="scrollDown d-none d-md-block">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "title", "text"],
};
</script>

<style>
.scrollDown {
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 25px;
  height: 25px;
  transform: translateY(-30px) translateX(-50%) rotate(45deg);
}
.carousel-caption {
  margin-bottom: 80px;
}
.scrollDown span {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  animation: animate 1s linear infinite;
  opacity: 0;
}
.scrollDown span:nth-child(1) {
  transform: translate(-12px, -12px);
  animation-delay: -0.2s;
}
.scrollDown span:nth-child(2) {
  transform: translate(0px, 0px);
  animation-delay: -0.1s;
}
.scrollDown span:nth-child(3) {
  transform: translate(12px, 12px);
  animation-delay: 0s;
}
.cover {
  background-color: rgba(0, 0, 0, 0.663);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
@keyframes animate {
  0% {
    top: -5px;
    left: -5px;
    opacity: 0;
  }
  25% {
    top: 0px;
    left: 0px;
    opacity: 1;
  }
  50%,
  100% {
    top: 5px;
    left: 5px;
    opacity: 1;
  }
}
</style>
