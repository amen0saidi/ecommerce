<template>
    <div>
      <h3>Categories</h3>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categories: Array,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for category list */
  </style>
  