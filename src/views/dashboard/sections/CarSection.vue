<template>
    <div class="d-flex justify-content-between pb-4">
        <h1>Our Cars</h1>
        <button class="btn btn-success new-car" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">New Car</button>
    </div>
    <h1 v-if="error" class="text-info">{{ error }}</h1>
    <CarCardWidget :cars="cars" />
    <ModalWidget>
        <form @submit.prevent="createNewCar" class="p-5" enctype="multipart/form-data">
        <input type="text" placeholder="Brand" v-model="brand">
        <input type="text" placeholder="Model" v-model="model">
        <input type="file" placeholder="Image" @change="handleFileChange">
        <input type="text" placeholder="Year" v-model="year">
        <input type="number" placeholder="Price" v-model="price">
        <input type="submit" value="create">
        </form>
    </ModalWidget>
    
</template>

<script>
import CarCardWidget from '@/components/widgets/CarCardWidget.vue';
import ModalWidget from '@/components/widgets/ModalWidget.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
export default {
    components: { CarCardWidget, ModalWidget },
    setup() {
        const cars = ref([]);
        const error = ref(null);

        // FORM FIELDS :

        const brand = ref('');
        const model = ref('');
        const image = ref(null)
        const year = ref('');
        const price = ref('');
        
        onMounted(async ()=> {
            try {
                const response = await axios.get('cars', { withCredentials: true });
                cars.value = await response.data;
            }catch(err) {
                error.value = 'no data available for the moment!'
            }

        });

        const createNewCar = async () => {
            const formData = new FormData();
            formData.append('brand', brand.value);
            formData.append('model', model.value);
            formData.append('image', image.value);
            formData.append('year', year.value);
            formData.append('price', price.value);
            try {
                const response = axios.post('cars', formData);
                console.log(response);
                // location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        const handleFileChange = (event) => {
            return image.value = event.target.files[0];
        }

        return { createNewCar, handleFileChange, cars, error, brand, model, image, year, price }
    }
}
</script>

<style></style>