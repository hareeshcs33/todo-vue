<template>
  <div class="row m-0">
    <div class="col-6 mx-auto">
      <form class="card p-5 m-5">
        <h3 class="text-center">Login</h3>
        <div class="form-group text-left">
          <label>Email</label>
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group text-left">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button class="btn btn-primary btn-block" @click="loginForm">
          Login
        </button>
        <router-link to="/register" class="text-right">SignUp</router-link>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    loginForm() {
      console.log("loginForm");
    }
  }
};
</script>
