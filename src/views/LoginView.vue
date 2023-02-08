<template>
  <div class="login">
    <div class="left-form">
      <img src="@/assets/hospital.png" alt="" />
      <h3>life code</h3>
      <span>Quick medical response code</span>
    </div>
    <form onsubmit.prevent="submit">
      <h2>Login</h2>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <label class="forget-password">Forgot Password?</label>
      </div>
      <button type="submit" @click="login()" class="btn btn-primary">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/");
    },
  },
};
</script>
