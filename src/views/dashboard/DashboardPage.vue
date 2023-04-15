<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Vue Rental Car</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search">
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <form @submit.prevent="handleLogout">
            <button type="submit" class="btn btn-success">Logout</button>
          </form>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item d-flex">
              <span data-feather="home" class="align-text-bottom"></span>
              <router-link to="/dashboard/orders" class="nav-link" aria-current="page">Orders</router-link>
          </li>
          <li class="nav-item d-flex">
              <span data-feather="file" class="align-text-bottom"></span>
              <router-link to="/dashboard/cars" class="nav-link" aria-current="page">Cars</router-link>
          </li>
          <li class="nav-item d-flex">
              <span data-feather="shopping-cart" class="align-text-bottom"></span>
              <router-link to="/dashboard/employees" class="nav-link" aria-current="page">Employees</router-link>
          </li>
          <li class="nav-item d-flex">
              <span data-feather="users" class="align-text-bottom"></span>
              <router-link to="/dashboard/users" class="nav-link" aria-current="page">Users</router-link>
          </li>
          <li class="nav-item d-flex">
              <span data-feather="brands" class="align-text-bottom"></span>
              <router-link to="/dashboard/brands" class="nav-link" aria-current="page">Brands</router-link>
          </li>
          <li class="nav-item d-flex">
              <span data-feather="layers" class="align-text-bottom"></span>
              <router-link to="/dashboard/settings" class="nav-link" aria-current="page">Settings</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
      </div>
      <div class="main">
        <router-view />
      </div>
    </main>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

export default {
    setup() {
      const store = useAuthStore();
      let authenticated = store.authenticated;
      const handleLogout = () => {
        return axios.delete('api/auth/logout').then(response => {
            store.clearAccessToken();
            authenticated = store.authenticated;
            router.push('/');
        })
      }

      return { authenticated, handleLogout }
    }
};
</script>

<style>

body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  height: calc(100vh - 48px);
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

</style>
