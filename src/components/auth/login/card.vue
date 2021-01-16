<template>
    <div id="card" v-show="visible" class="card text-center fixed-bottom bg-dark shadow shadow-lg rounded-top">
        <div class="pt-3">
            <span @click="goBack" class="badge rounded-pill bg-accent text-medium">Go Back</span>
        </div>
        <form class="card-body" @submit="login" @reset="resetForm">
            <div class="py-5 text-center h1">
                📧
            </div>
            <div class="form-floating mb-3">
                <input type="email" v-model="username" class="form-control border border-primary border-bottom" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" v-model="password" class="form-control border border-primary border-bottom" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-primary btn-block mb-3" type="submit">Log in</button>
        <div class="text-medium d-block position-bottom">
            <ul class="list-unstyled text-primary">
                <li>
                    <a href="">Privacy Policy</a>
                </li>
                <li>
                    <a href="">Subscription Agreement</a>
                </li>
                <li>
                    <a href="">Data Collection Statement</a>
                </li>
            </ul>
            </div>
        </form>
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'
    import { useStore } from 'vuex'
    export default {
        name: 'card',
        setup(props) {
            console.log(props.showME)
            return { toast: useToast(), store: useStore(), visible: props.showME }
        },
        data: ()=> ({
            username: null,
            password: null
        }),
        methods: {
            login(evt) {
                evt.preventDefault()
                this.store.dispatch('login',{email: this.username, password }).then((res) => {
                    if(res) {
                        this.toast.success('We did it')
                    }
                }).catch(err => this.toast.error(err))
            },
            resetForm(evt) {
                this.username = null
                this.password = null
            },
            goBack() {
                this.$parent.emit('showME', false)
            }
        }
    }
</script>

<style lang="scss">
    .back {
        width: 15px;
        height: 12px;
    }

    .card {
        border-radius: 25px;
        min-height: 40vh;
    }

</style>