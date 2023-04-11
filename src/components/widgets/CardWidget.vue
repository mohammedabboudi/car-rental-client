<template>
  <div class="row row-cols-1 row-cols-md-3">
    <div class="col gap-2 mb-5" v-for="car in cars" :key="car.brand">
      <div class="card">
        <img :src="car.img" class="card-img-top" :alt="car.brand" />
        <div class="card-body">
          <h5 class="card-title">{{ car.brand }}</h5>
          <p class="card-text">{{ car.description }}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        {
          img: require("@/assets/uploads/bmw.jpg"),
          brand: "BMW",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
          img: require("@/assets/uploads/mercedes.jpg"),
          brand: "MERCEDES",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
          img: require("@/assets/uploads/volkswagen.png"),
          brand: "VOLKSWAGEN",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
          img: require("@/assets/uploads/volvo.jpg"),
          brand: "VOLVO",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
          img: require("@/assets/uploads/ford.jpg"),
          brand: "FORD",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
          img: require("@/assets/uploads/fiat.jpg"),
          brand: "FIAT",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
      ],
    };
  },
};
</script>

<style></style>
