<template>
<div class="home">
  <nav class="navbar navbar-light bg-primary">
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button> -->

    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          life code
        </a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/admin">Admin</router-link>
          <router-link class="dropdown-item" to="/patientrecord">Patient record</router-link>
          <router-link class="dropdown-item" to="/addpatient">Add Patient</router-link>
          <router-link class="dropdown-item" to="/addcentercare">Add Center Care</router-link>
        </div>
      </li>
    </ul>
    <div class="user-register">
      <img src="@/assets/user-register.png" alt="" @click="register" />
    </div>
    <!-- </div> -->
  </nav>
</div>
</template>

<script>
export default {

methods: {
  register() {
    this.$router.push("/login");
  },
},
};
</script>

<style></style>

