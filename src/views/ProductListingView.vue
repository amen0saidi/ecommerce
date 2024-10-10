<template>
    <div>
      <h1>Product Listing</h1>
      <CategoryList @filter="filterProducts" />
      <div class="product-grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  import CategoryList from '../components/CategoryList.vue';
  
  export default {
    name: 'ProductListingView',
    components: {
      ProductCard,
      CategoryList,
    },
    data() {
      return {
        products: [], // Fetch products from API or store
        filteredProducts: [], // Filtered product list
      };
    },
    methods: {
      filterProducts(category) {
        // Logic to filter products based on selected category
        console.log('Filter by category:', category);
      },
      addToCart(product) {
        // Logic to add product to cart
        console.log('Add to cart:', product);
      },
    },
    mounted() {
      // Fetch all products and set to filteredProducts
      this.filteredProducts = this.products;
    },
  };
  </script>
  
  <style scoped>
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  /* Add styles for Product Listing view */
  </style>
  