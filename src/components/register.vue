<template>
  <div class="row m-0">
    <div class="col-6 mx-auto">
      <form class="card p-5 m-5" @submit.prevent="regFormSubmit">
        <h3 class="text-center">Sign Up</h3>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="user_reg_details.first_name"
            placeholder="First Name"
          />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="user_reg_details.last_name"
            placeholder="Last Name"
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user_reg_details.email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            v-model="user_reg_details.password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            class="form-control"
            v-model="user_reg_details.confirm_password"
            placeholder="confirm Password"
          />
        </div>
        <button class="btn btn-primary btn-block" @click="signUpForm">
          Sign up
        </button>
        <router-link to="/login" class="text-right">login</router-link>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user_reg_details: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      data: null,
      registeredData: [],
      isLogin: false,
      dataValid: false
    };
  },
  methods: {
    signUpForm() {
      console.log("signUpForm");
    },
    regFormSubmit() {
      this.data = {
        first_name: this.user_reg_details.first_name,
        last_name: this.user_reg_details.last_name,
        email: this.user_reg_details.email,
        password: this.user_reg_details.password,
        confirm_password: this.user_reg_details.confirm_password
      };
      if (this.registeredData.length == 0 || this.validateData()) {
        this.registeredData.push(this.data);
      }
      console.log(this.registeredData);
      axios;
      // .post("http://localhost:8080/register", this.data)
      // .then(res => {
      //   console.log(res);
      // })
      // .catch(err => {
      //   console.log(err);
      // });
    },
    validateData() {
      return this.registeredData.some(element => {
        element.first_name !== this.first_name;
      });
    }
  }
};
</script>
