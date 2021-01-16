<template>
    <div id="card" class="card text-center fixed-bottom bg-dark shadow shadow-lg">
        <div class="card-body py-3" v-if="!selected.login && !selected.register">
            <h1 class="text-white">Cartoons to live for</h1>
            <button class="btn btn-primary btn-block" @click="swap('register')">Sign Up</button>
            <div class="text-medium py-2">
                Start streaming for $9/month or $90/year
            </div>
            <button class="btn btn-outline-primary btn-block" @click="swap('login')">Log in</button>
        </div>
        <div v-if="selected.login || selected.register"> 
            <login-card :class="{'d-none': !selected.login}"></login-card>
            <register-card :class="{'d-none': !selected.register}"></register-card>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';

    export default {
        name: 'card',
        data: () => ({
            selected: {
                login: false,
                register: false
            }
        }),
        methods: {
            swap(com) {
                switch (com) {
                    case 'login':
                        this.selected.login = true
                        break;
                    case 'register':
                        this.selected.register = true
                        break;
                    default:
                        break;
                }
            }
        },
        components: {
            'login-card': defineAsyncComponent(() => import('@/components/auth/login/card.vue')),
            'register-card': defineAsyncComponent(() => import('@/components/auth/register/card.vue'))
        },
        setup() {
            const loginRef = ref("login")
            const registerRef = ref("register")
            return { loginRef, registerRef }
        }
    }
</script>

<style>
    .card {
        border-radius: 25px;
    }
</style>