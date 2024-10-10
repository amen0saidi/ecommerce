import { createStore } from 'vuex';

// Define your state
const state = {
  products: [],
  cart: [],
  user: null,
};

// Define your mutations
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  ADD_TO_CART(state, product) {
    state.cart.push(product);
  },
  REMOVE_FROM_CART(state, productId) {
    state.cart = state.cart.filter(product => product.id !== productId);
  },
  SET_USER(state, user) {
    state.user = user;
  },
};

// Define your actions
const actions = {
  fetchProducts({ commit }) {
    // Simulating an API call to fetch products
    const products = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 150 },
      // Add more products as needed
    ];
    commit('SET_PRODUCTS', products);
  },
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  removeFromCart({ commit }, productId) {
    commit('REMOVE_FROM_CART', productId);
  },
  setUser({ commit }, user) {
    commit('SET_USER', user);
  },
};

// Define your getters
const getters = {
  allProducts: (state) => state.products,
  cartItems: (state) => state.cart,
  user: (state) => state.user,
};

// Create the store
const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export default store;
