<template>
    <div id="auth" class="container" style="background-image: url('~@/assets/img/auth-bg.png');">
        <div class="text-center">
            <img :src="require('@/assets/img/logo.svg')" class="text-center" >
        </div>
        <div class="position-absolute bottom-0">
            <div class="card shadow shadow-lg bg-dark w-100 rounded-top">
                <div ref="gateway" class="text-center">
                    <div class="card-body">
                        <h1 class=" card-title text-white">Cartoons to live for</h1>
                        <div class="py-3 d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary">Sign Up</button>
                            <p class="text-medium caption">Start streaming for $9/month or $90/year</p>
                            <button class="btn btn-outline-primary">Log in</button>
                        </div>
                    </div>
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

</style>