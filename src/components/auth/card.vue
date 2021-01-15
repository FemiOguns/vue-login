<template>
    <div class="card text-center fixed-bottom bg-dark shadow shadow-lg rounded-top">
        <div class="card-body py-3">
            <h1 class="text-white">Cartoons to live for</h1>
            <button class="btn btn-primary btn-block" @click="swapComponent('register')">Sign Up</button>
            <div class="text-medium py-2">
                Start streaming for $9/month or $90/year
            </div>
            <button class="btn btn-outline-primary btn-block" @click="swapComponent('login')">Log in</button>
        </div>
        <div class=""> 
            <login-card></login-card>
            <register-card></register-card>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

    export default {
        name: 'card',
        data: () => ({

        }),
        methods: {
            swapComponent(com) {

            }
        },
        components: {
            'login-card': defineAsyncComponent(() => import('@/components/auth/login/card.vue')),
            'register-card': defineAsyncComponent(() => import('@/components/auth/register/card.vue'))
        }
    }
</script>

<style>
    
</style>