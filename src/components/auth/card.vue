<template>
    <div class="card fixed-bottom bg-dark shadow shadow-lg rounded-top">
        <div class="card-body py-3 text-center">
            <h1 class="text-white">Cartoons to live for</h1>
            <button class="btn btn-primary btn-block" @click="swapComponent('register-card')">Sign Up</button>
            <div class="text-medium py-2">
                Start streaming for $9/month or $90/year
            </div>
            <button class="btn btn-outline-primary btn-block" @click="swapComponent('login-card')">Log in</button>
        </div>
        <login-card ref="login" />
        <register-card ref="register" />
    </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted } from 'vue';
    export default {
        name: 'card',
        setup() {

        },
        methods: {

        },
        components: {
            'login-card': defineAsyncComponent(() => import('@/components/auth/login/card.vue')),
            'register-card': defineAsyncComponent(() => import('@/components/auth/register/card.vue'))
        }
    }
</script>

<style>
    .sign-up {
        
    }
</style>