import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bs-stepper/dist/css/bs-stepper.min.css';

createApp(App)
    .use(store)
    .use(router)
    .use(VueReCaptcha, { siteKey: process.env.VUE_APP_SITE_KEY })
        .mount('#app')
