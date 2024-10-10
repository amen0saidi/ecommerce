<template>
    <div class="product-card">
      <img :src="product.image" alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>\${{ product.price }}</p>
      <AddToCartButton :product="product" @add-to-cart="onAddToCart" />
    </div>
  </template>
  
  <script>
  import AddToCartButton from './AddToCartButton.vue';
  
  export default {
    components: {
      AddToCartButton,
    },
    props: {
      product: Object,
    },
    methods: {
      onAddToCart(product) {
        this.$emit('add-to-cart', product);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>
  