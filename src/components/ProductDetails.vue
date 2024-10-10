<template>
    <div>
      <h2>{{ product.name }}</h2>
      <img :src="product.image" alt="product.name" />
      <p>Price: \${{ product.price }}</p>
      <p>Description: {{ product.description }}</p>
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
  /* Add styles for product details */
  </style>
  