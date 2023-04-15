<template>
    <router-link to="/" class="text-decoration-none">Go Back To Home</router-link>
    <div class="container d-flex min-vh-100 justify-content-center align-items-center">
        <FormWidget message="Sign in Now">
            <p class="text-success" v-if="success">{{ success }}</p>
                <form @submit.prevent="handleSubmit" action="/signin" method="post">
                    <div class="mb-3 ">
                    <input type="email" v-model="email" class="form-control" id="formGroupExampleInput" placeholder="Example@gmail.com">
                    </div>
                    <div class="mb-3">
                    <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <router-link to="/register" class="text-decoration-none mt-3 ms-2">Create Account</router-link>
                    <input type="submit" class="btn btn-success" value="Sign in"/>
                    </div>
                </form>
            <p class="text-danger" v-if="error">{{ error }}</p>
    </FormWidget>
    </div>
</template>


<script>
import { useAuthStore } from '@/stores/auth';

import FormWidget from '@/components/widgets/FormWidget.vue';
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

export default {

    components: {
        FormWidget
    },
    setup() {

        const store = useAuthStore();

        const email = ref("")
        const password = ref("")
        const success = ref("")
        const error = ref("")

        const handleSubmit = () => {
            if (!email.value == "" && !password.value == "") {

                    signIn(email.value, password.value);

                } else {

                    error.value ='some values must be entered'
                }
        }

        const signIn = (email, password) => {
            return axios.post('http://localhost:5000/auth/login', { email, password })
                .then(response => {
                    success.value = response.data.message;
                    store.setAccessToken(response.data.accessToken);            
                    error.value = "";
                    setTimeout(() => {
                        router.push('/');
                    }, 3000);
                })
                .catch(err => {
                    success.value = "";
                    error.value = err.response.data.message;
                }
                );
        }

        return { email, password, success, error, handleSubmit }
    }
}
</script>


<style></style>