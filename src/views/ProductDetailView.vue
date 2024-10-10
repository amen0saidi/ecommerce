<template>
    <div>
      <ProductDetails :product="product" @add-to-cart="addToCart" />
    </div>
  </template>
  
  <script>
  import ProductDetails from '../components/ProductDetails.vue';
  
  export default {
    name: 'ProductDetailView',
    components: {
      ProductDetails,
    },
    data() {
      return {
        product: {}, // Fetch product details based on route params
      };
    },
    methods: {
      addToCart(product) {
        // Logic to add product to cart
        console.log('Add to cart:', product);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for Product Detail view */
  </style>
  