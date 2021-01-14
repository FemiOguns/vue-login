<template>
    <div id="card" class="">
        
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