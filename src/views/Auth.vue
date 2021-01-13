<template>
    <div id="auth" class="container bg-dark">
        <div class="text-center">
            <img :src="require('@/assets/img/logo.svg')" class="text-center" >
        </div>
        <div class="position-absolute bottom-0 card shadow shadow-lg bg-dark rounded-top">
            <div ref="gateway" class="text-center">
                <h1 class="text-white">Cartoons to live for</h1>
                <div class="py-3 d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary">Sign Up</button>
                    <p class="text-medium">Start streaming for $9/month or $90/year</p>
                    <button class="btn btn-primary-outline">Log in</button>
                </div>
            </div>
            <login-card ref="login" />
            <register-card ref="register" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted } from 'vue';
    export default {
        name: 'login',
        setup(){
            return {}
        },
        components: {
            'login-card': defineAsyncComponent(() => import('@/components/auth/login/card.vue')),
            'register-card': defineAsyncComponent(() => import('@/components/auth/register/card.vue'))
        }
    }
</script>

<style lang="scss">
h1 {
    font-size: 24px;
    line-height: 33px;
    font-weight: 800;
}

</style>