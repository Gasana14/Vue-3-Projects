import { createApp } from 'vue'
import App from './App.vue'

import Toast from 'vue3-toastify'
// Import the CSS file for styling
import 'vue3-toastify/dist/index.css';

import './assets/style.css'

const app = createApp(App)
app.use(Toast)
app.mount('#app')