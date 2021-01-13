<template>
    <div id="auth">
        <div class="container">
            <img :src="require('@/assets/img/auth-bg.png')" class="img-backdrop">
            <img :src="require('@/assets/img/logo.svg')" class="logo" >
            <div class="card fixed-bottom bg-dark shadow shadow-lg rounded-top">
                <div class="card-body py-3">
                    <h1 class="text-white">Cartoons to live for</h1>
                    <button class="btn btn-primary btn-block">Sign Up</button>
                    <div class="text-medium text-center caption py-2">
                        <p>Start streaming for $9/month or $90/year</p>
                    </div>
                    <button class="btn btn-outline-primary btn-block">Log in</button>
                </div>
                <login-card ref="login" />
                <register-card ref="register" />
            </div>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.img-backdrop {
    position: absolute;
    z-index: -1000;
    top: 0;
    left: 0;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    overflow: hidden;
}
</style>