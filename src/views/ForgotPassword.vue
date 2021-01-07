<template>
    <div id="forgot-password">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8 card py-3">
                    <div class="col-lg-12">
                        <h1>Forgot Password.</h1>
                    </div>
                    <Stepper />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Stepper = defineAsyncComponent(() => import('@/components/Stepper.vue'))
export default {
    name: 'forgot-password',
    data: ()=> ({
        username: null
    }),
    methods: {
        onSubmit(evt) {
            evt.preventdefault()
            console.log(this.username)
        }
    },
    components: {
        Stepper
    }
}
</script>

<style>

</style>