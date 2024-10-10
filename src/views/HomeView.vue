<template>
  <div>
    <h1>Welcome to Our Store</h1>
    <SearchBar @search="performSearch" />
    <ProductListingView />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import ProductListingView from './ProductListingView.vue';

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    ProductListingView,
  },
  methods: {
    performSearch(query) {
      // Logic to handle search
      console.log('Search query:', query);
    },
  },
};
</script>

<style scoped>
/* Add styles for Home view */
</style>
