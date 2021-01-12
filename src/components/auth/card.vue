<template>
    <div id="card" class="card-shadow">
        <div class="container text-center"> 
            <h1>Cartoons to live for</h1>
            <button class="sign-up" @click="jump('register')">
                Sign Up
            </button>
            <button class="login" @click="jump('login')">
                Log in
            </button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
    export default {
        name: 'card',
        setup() {

        },
        methods: {
            jump(loc) {

            }
        }
    }
</script>

<style>
    .sign-up {
        
    }
</style>