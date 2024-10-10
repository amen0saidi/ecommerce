<template>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
  
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
  
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Handle login logic
        console.log('Login:', {
          email: this.email,
          password: this.password,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for login form */
  </style>
  