<template>
    <form @submit.prevent="register">
      <h2>Register</h2>
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />
  
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
  
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
  
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      register() {
        // Handle registration logic
        console.log('Register:', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for register form */
  </style>
  