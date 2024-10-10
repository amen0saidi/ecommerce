<template>
    <div class="cart-item">
      <h4>{{ item.name }}</h4>
      <p>Price: \${{ item.price }}</p>
      <p>Quantity: {{ item.quantity }}</p>
      <button @click="removeItem">Remove</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
    methods: {
      removeItem() {
        this.$emit('remove-item', this.item.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-item {
    /* Add styles for cart item */
  }
  </style>
  