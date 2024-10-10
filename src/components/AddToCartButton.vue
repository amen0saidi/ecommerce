<template>
    <button @click="addToCart">Add to Cart</button>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product);
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    /* Add styles for the button */
  }
  </style>
  