<template>
    <form @submit.prevent="submit()">
      <div class="login-page">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <button class="bnt" @click="fetch">get</button>
          <div class="card-body">
            <div class="form-group">
              <input
                v-model="form.email"
                class="form-control"
                placeholder="E-mail"
              >
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Senha"
                class="form-control"
                v-model="form.password"
              >
            </div>
  
            <button class="btn btn-primary w-100">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </form>
  </template>
  
  <script>
 import { defineComponent, onMounted } from 'vue';
  import api from '@/services/api.ts';
  import setAuthHeader from '../utils/setAuthHeader';
  
  export default defineComponent({
  name: 'Login',

  setup() {
    const form = {
        email: '',
        password: ''
    };

    const submit = () =>
       api
        .post("/auth/login", form)
        .then(response => {
            localStorage.setItem("jwtToken", response.data.access_token);
            setAuthHeader(response.data.access_token)
            this.$router.push({ name: 'home' })
        })
        .catch((err) => console.log(err.response));

        const fetch = () =>
       api
        .get("/users", {
            headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("jwtToken")}`
            }
        })
        .then((response) => console.log("oii"+localStorage.getItem("jwtToken")))
        .catch((err) => console.log("oii"+localStorage.getItem("jwtToken")));
    

    return{
      form,
      submit,
      fetch
    }
  }
})
  </script>
  
  <style >
  .login-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .card {
      width: 30%;
    }
  </style>
 