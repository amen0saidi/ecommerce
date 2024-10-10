import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

// Load fonts before creating the app
loadFonts();

// Create the Vue application
const app = createApp(App);

// Use plugins
app.use(router);
app.use(store);
app.use(vuetify);

// Mount the app to the DOM
app.mount('#app');
