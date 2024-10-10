<template>
    <div>
      <input type="text" v-model="query" @input="search" placeholder="Search products..." />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '',
      };
    },
    methods: {
      search() {
        this.$emit('search', this.query);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for search bar */
  </style>
  