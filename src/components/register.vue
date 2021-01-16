<template>
    <div class="row m-0">
        <div class="col-6 mx-auto">
            <form class="card p-5 m-5" @submit.prevent="regFormSubmit">
                <h3 class="text-center">Sign Up</h3>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" v-model="confirm_password" placeholder="confirm Password"/>
                </div>
                <button class="btn btn-primary btn-block">Sign up</button>
                <router-link to="/login" class="text-right">login</router-link>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    },
    methods: {
        regFormSubmit(){
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password
            };

            axios.post('http://localhost:8080/register', data)
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>