<template>
    <div id="auth" :class="[{backgroundImage: require('@/assets/img/auth-bg.png')},'bg-dark']">
        <div class="container">
            <img :src="require('@/assets/img/logo.svg')" class="logo" >
            <div ref="gateway" class="container text-center">
                <h1 class="text-white-70">Cartoons to live for</h1>
                <div class="py-3">
                    <button class="btn btn-primary">Sign Up</button>
                    <p class="caption">Start streaming for $9/month or $90/year</p>
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

</style>