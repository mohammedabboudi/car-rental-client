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
            <button class="btn btn-info">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    props: ['cars']
}

</script>

<style></style>