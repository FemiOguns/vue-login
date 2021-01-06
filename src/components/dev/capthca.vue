<template>
    <div id="capthca">
        <button @click="recaptcha">Robot Test</button>
    </div>
</template>

<script>
export default {
    name: 'captcha',
    data: ()=> ({

    }),
    methods: {
        async recaptcha() {
            await this.$recaptchaLoaded()
            const token = await this.$recaptcha('#captcha')
            console.log(token)
        }
    }
}
</script>

<style>

</style>