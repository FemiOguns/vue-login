<template>
    <div id="card" class="card-shadow">
        
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'
    export default {
        name: 'card',
        setup() {
            const toast = useToast();
            return { toast }
        },
        data: ()=> ({
            tmp: {
                email: null,
                password: null
            }
        }),
        methods: {

        }
    }
</script>

<style lang="scss">
#card {
    position: absolute;
    width: 100%;
    height: 347px;
    left: 0px;
    top: 465px;
    background: $dark;
}
</style>