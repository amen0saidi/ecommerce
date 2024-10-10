<template>
    <div>
      <h3>Filters</h3>
      <div>
        <h4>Price Range</h4>
        <input type="range" v-model="priceRange" min="0" max="1000" />
      </div>
      <div>
        <h4>Categories</h4>
        <CategoryList :categories="categories" />
      </div>
    </div>
  </template>
  
  <script>
  import CategoryList from './CategoryList.vue';
  
  export default {
    components: {
      CategoryList,
    },
    props: {
      categories: Array,
      priceRange: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for filter sidebar */
  </style>
  