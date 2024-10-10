<template>
    <div>
      <h2>User Profile</h2>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <button @click="editProfile">Edit Profile</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
    },
    methods: {
      editProfile() {
        // Handle profile edit logic
        console.log('Edit profile:', this.user);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for user profile */
  </style>
  