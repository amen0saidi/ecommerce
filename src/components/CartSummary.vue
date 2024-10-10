<template>
    <div>
      <h2>Cart Summary</h2>
      <p>Total: \${{ total }}</p>
      <button @click="$emit('checkout')">Checkout</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      total: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for cart summary */
  </style>
  