<template>
    <div>
      <h1>Login</h1>
      <LoginForm @login="handleLogin" />
    </div>
  </template>
  
  <script>
  import LoginForm from '../components/LoginForm.vue';
  
  export default {
    name: 'LoginView',
    components: {
      LoginForm,
    },
    methods: {
      handleLogin(credentials) {
        // Handle login logic
        console.log('Login credentials:', credentials);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for Login view */
  </style>
  