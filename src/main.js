import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Toast from "vue-toastification"
//import { VueReCaptcha } from 'vue-recaptcha-v3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import "vue-toastification/dist/index.css"

createApp(App)
    .use(store)
    .use(router)
    .use(Toast)
    //.use(VueReCaptcha, { siteKey: process.env.VUE_APP_SITE_KEY })
        .mount('#app')
