<template>
    <div id="auth">
        <div class="container">
            <div ref="gateway" class="container text-center bg-dark">
                <h1>Cartoons to live for</h1>
                <div class="py-3">
                    <button class="btn btn-primary">Sign Up</button>
                    <p class="caption">Start streaming for $9/month or $90/year</p>
                    <button class="btn btn-primary-outline">Log in</button>
                </div>
            </div>
            <div ref="login">

            </div>
            <div ref="register">

            </div>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'login',
        components: {
            'login-card': defineAsyncComponent(() => import('@/components/auth/login/card.vue')),
            'register-card': defineAsyncComponent(() => import('@/components/auth/register/card.vue'))
        }
    }
</script>

<style lang="scss">
#auth {
    background-image: url('./assets/img/auth-bg.png');
    overflow: hidden;
}
</style>