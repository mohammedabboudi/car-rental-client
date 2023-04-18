<template>
     <router-link to="/" class="text-decoration-none">Go Back To Home</router-link>
<div class="container d-flex min-vh-100 justify-content-center align-items-center">
    <FormWidget message="Create an Account">
        <p class="text-success" v-if="success">{{ success }}</p>
        <form @submit.prevent="handleSubmit" action="/register" method="post">
            <div class="mb-3">
            <input type="text" v-model="firstname" class="form-control" id="firstname" placeholder="First name">
            </div>
            <div class="mb-3">
            <input type="text" v-model="lastname" class="form-control" id="lastname" placeholder="Last name">
            </div>
            <div class="mb-3">
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="mb-3">
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="mb-3 d-flex justify-content-center">
                <input type="password" v-model="confirmPassword" class="form-control" id="Confirmpassword" placeholder="Password Confirmation">
            </div>
            <div class="mb-3 d-flex justify-content-between">
                <router-link to="/signin" class="text-decoration-none mt-3 ms-2">Sign in</router-link>
            <input type="submit" class="btn btn-success" value="Create Account"/>
            </div>
        </form>
        <p class="text-danger" v-if="error">{{ error }}</p>
   </FormWidget>
</div>
</template>

<script>
import axios from 'axios';
import FormWidget from '@/components/widgets/FormWidget.vue';
import { ref } from 'vue';
import router from '@/router';
export default {
    components: { FormWidget },
    setup() {
            const firstname = ref("");
            const lastname = ref("");
            const email = ref("");
            const password = ref("");
            const confirmPassword = ref("");
            const success= ref("");
            const error = ref("");

            const handleSubmit = () => {
                if (!firstname.value == "" && !lastname.value == "" && !email.value == "" && !password.value == "" && !confirmPassword.value == "") {
                    if (password.value == confirmPassword.value) {
                        error.value = ""
                        signUp(firstname.value, lastname.value, email.value, password.value);
                    } else {
                        error.value = "the confrmation password doesn't match the password"
                        clearMessages();
                    }
                } else {
                    error.value ='some values must be entered'
                    clearMessages();
                }
            }

            const signUp = async (first_name, last_name, email, password) => {

                try {
                    const response = await axios.post('auth/signup', { first_name, last_name, email, password })
                    success.value = response.data.message;

                    setTimeout(() => { 
                        error.value = '';
                        success.value = '';
                        router.push('/signin');
                    }, 5000);

                } catch (err) {
                    error.value = err.response.data.message;
                    clearMessages();
                }

            }


            const clearMessages = () => {
                setTimeout(() => { 
                        error.value = '';
                        success.value = '';
                }, 5000);
            }
            

            return { firstname, lastname, email, password, confirmPassword, handleSubmit, error, success }
    }
}
</script>

<style></style>