<template>
    <div id="forgot-password">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8 card py-3">
                    <div class="col-lg-12">
                        <h1>Forgot Password.</h1>
                    </div>
                    <form class="col-lg-12" @submit="onSubmit" @reset="onReset">
                        <div class="form-floating">
                            <label class="text-uppercase">username</label>
                            <input class="form-control" v-model="username" type="email" required>
                        </div>
                        <div class="col-lg-12">
                            <button type="submit" class="btn btn-primary btn-block">Reset Password</button>
                            <p class="pt-3 text-center text-secondary">Already have an account.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>