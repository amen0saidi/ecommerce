<template>
    <form @submit.prevent="submitOrder">
      <h2>Checkout</h2>
      <label for="name">Name:</label>
      <input type="text" v-model="name" required />
      
      <label for="address">Address:</label>
      <input type="text" v-model="address" required />
      
      <label for="payment">Payment Method:</label>
      <select v-model="paymentMethod" required>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      
      <button type="submit">Place Order</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        address: '',
        paymentMethod: 'credit-card',
      };
    },
    methods: {
      submitOrder() {
        // Handle order submission
        console.log('Order placed:', {
          name: this.name,
          address: this.address,
          paymentMethod: this.paymentMethod,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for checkout form */
  </style>
  