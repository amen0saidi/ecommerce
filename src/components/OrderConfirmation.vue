<template>
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>Order ID: {{ orderId }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      orderId: String,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for order confirmation */
  </style>
  