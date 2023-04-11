<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav me-auto my-4 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/cars" class="nav-link">Cars</router-link>
            </li>
        </ul>
            <button class="btn btn-success signin me-3 ms-3" data-bs-toggle="modal" data-bs-target="#authModal" data-bs-whatever="@mdo" @click="signInModal">Signin</button>
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#authModal" data-bs-whatever="@mdo" @click="signUpModal">Register</button>
        </div>
        </div>
    </div>
    </nav>
</template>
    
<script>
  export default {
    methods: {
      signInModal() {
        this.$emit("open-signin");
      },
      signUpModal() {
        this.$emit("open-signup");
      },
    },
  }
</script>
    
    
<style>
.signin {
    background-color: transparent !important;
}
.signin:hover {
    background-color: #198754 !important;
}
</style>
