<template>
    <div id="auth" class="container">
        <img :src="require('@/assets/img/auth-bg.png')" class="img-backdrop">
        <div class="text-center">
            <img :src="require('@/assets/img/logo.svg')" class="text-center logo" >
        </div>
        <div class="card bg-dark w-100 fixed-bottom rounded-top text-center">
            <div class="card-body py-3">
                <h1 class="text-white">Cartoons to live for</h1>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary">Sign Up</button>
                    <p class="text-medium caption">Start streaming for $9/month or $90/year</p>
                    <button class="btn btn-outline-primary">Log in</button>
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
#auth {
    width: 100%;
    height: 100%;
}
.logo {
    
}
.img-backdrop {
    z-index: -1000;
    position: absolute;
    top: 0;
    left: 0;
    background: cover center;
    overflow: hidden;
}
</style>