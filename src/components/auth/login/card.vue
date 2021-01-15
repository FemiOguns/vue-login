<template>
    <div id="card" class="card text-center fixed-bottom bg-dark shadow shadow-lg rounded-top">
        <!-- icon here -->
        <div class="card-body">
            <div class="form-group">
                <label class="text-center h1 font-weight-bold text-white">Email</label>
                <input class="form-control" type="email" placeholder="">
                <div class="row text-medium text-center">
                    <a class="d-block" href="">Privacy Policy</a>
                    <a href="">Subscription Agreement</a>
                    <a href="">Data Collection Statement</a>
                </div>
            </div>
        </div>
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