<template>
    <div>
      <h1>Your Cart</h1>
      <CartSummary :cart-items="cartItems" @remove-item="removeItem" />
      <RouterLink to="/checkout">Proceed to Checkout</RouterLink>
    </div>
  </template>
  
  <script>
  import CartSummary from '../components/CartSummary.vue';
  
  export default {
    name: 'CartView',
    components: {
      CartSummary,
    },
    data() {
      return {
        cartItems: [], // Fetch or manage cart items
      };
    },
    methods: {
      removeItem(item) {
        // Logic to remove item from cart
        console.log('Remove item:', item);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for Cart view */
  </style>
  