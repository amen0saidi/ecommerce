<template>
    <div>
      <h2>Order Summary</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - \${{ item.price }} (x{{ item.quantity }})
        </li>
      </ul>
      <p>Total: \${{ total }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: Array,
      total: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for order summary */
  </style>
  