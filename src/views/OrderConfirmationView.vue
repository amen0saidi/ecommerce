<template>
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order! Your order number is: {{ orderNumber }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderConfirmationView',
    data() {
      return {
        orderNumber: '12345', // Replace with dynamic order number
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for Order Confirmation view */
  </style>
  