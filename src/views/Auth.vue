<template>
    <div id="auth">
        <div class="container">
            <img :src="require('@/assets/img/auth-bg.png')" class="img-backdrop">
            <img :src="require('@/assets/img/logo.svg')" class="logo" >
                <gateway ref="gateway" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted } from 'vue';

    export default {
        name: 'login',
        components: {
            'gateway': defineAsyncComponent(() => import('@/components/auth/card.vue')),
        },
        data: () => ({
            
        }),
        methods: {
            swapComponent: function(component) {
                this.currentComponent = component;
            }
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