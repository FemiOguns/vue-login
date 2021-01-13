import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import 'bootstrap'
import '@/assets/scss/main.scss'

createApp(App)
    .use(store)
    .use(router)
    .use(Toast)
        .mount('#app')
