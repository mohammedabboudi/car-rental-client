<template>
  <HeaderSection />
  <h1>Cars page</h1>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import axios from "axios";
import { onMounted } from "vue";

export default { 
  components: { HeaderSection },
  setup() {

    onMounted(async ()=> {
      try {
        const response = await axios.get('cars', { withCredentials: true });
        console.log(response.data);
      }catch(err) {
        console.log(err);
      }

    });

    

    // return {  }

  },
  
  };
</script>

<style></style>
