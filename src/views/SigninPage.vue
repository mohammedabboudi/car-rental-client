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
import VueCookies from 'vue-cookies'

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

                    error.value ='some values must be entered';
                    clearMessages();
                }
        }

        const signIn = (email, password) => {
            return axios.post('auth/login', { email, password },{ withCredentials: true })
                .then(response => {
                    success.value = response.data.message;
                    store.setAccessToken(response.data.accessToken);
                    setTimeout(() => {
                        if (response.data.user.role == 'user') {
                            router.push('/');
                        } else {
                            router.push('/dashboard');
                        }
                        clearMessages();
                    }, 3000);
                })
                .catch(err => {
                    if (typeof err.response == 'undefined') {
                        console.log(err);
                    }else {
                        error.value = err.response.data.message;
                        
                    }
                    
                    clearMessages();
                }
                );
        }



        const clearMessages = () => {
                setTimeout(() => { 
                        error.value = '';
                        success.value = '';
                }, 5000);
        }



        return { email, password, success, error, handleSubmit }
    }
}
</script>


<style></style>