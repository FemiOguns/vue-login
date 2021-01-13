<template>
    <div id="card" class="card shadow shadow-lg bg-dark">
        
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
            cred: {
                email: null,
                password: null
            }
        }),
        methods: {
    
        }
    }
</script>

<style lang="scss">

</style>