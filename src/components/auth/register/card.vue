<template>
    <div id="card">

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
                password: null,
                phone_number: null
            },
            re_pass: null
        }),
        methods: {
            confirm_password() {

            }
        }
    }
</script>