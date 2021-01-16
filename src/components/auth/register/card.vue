<template>
    <div id="card" v-show="visible" class="card text-center fixed-bottom bg-dark shadow shadow-lg rounded-top">
        <div class="card-body">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="stepper-email-tab" data-bs-toggle="tab" href="#stepper-email" role="tab" aria-controls="stepper-email" aria-selected="true">Email</a>
                    <a class="nav-link" id="stepper-password-tab" data-bs-toggle="tab" href="#stepper-password" role="tab" aria-controls="stepper-password" aria-selected="false">Password</a>
                    <a class="nav-link" id="stepper-verify-tab" data-bs-toggle="tab" href="#stepper-verify" role="tab" aria-controls="stepper-verify" aria-selected="false">Verify</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="stepper-email" role="tabpanel" aria-labelledby="stepper-email-tab">
                    <div class="form-floating">
                        <input type="email" v-model="user.email" class="form-control border border-primary border-bottom" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <button @click="next" class="btn btn-primary btn-block">Next</button>
                </div>
                <div class="tab-pane fade" id="stepper-password" role="tabpanel" aria-labelledby="stepper-password-tab">
                    <div class="form-floating">
                        <input type="password" v-model="user.password" class="form-control border border-primary border-bottom" placeholder="password">
                        <label for="floatingInput">Password</label>
                    </div>
                    <button @click="next" class="btn btn-primary btn-block">Next</button>
                </div>
                <div class="tab-pane fade" id="stepper-verify" role="tabpanel" aria-labelledby="stepper-verify-tab">
                    <div class="form-floating">
                        <input type="tel" v-model="user.phone" class="form-control border border-primary border-bottom" placeholder="password">
                        <label for="floatingInput">Phone</label>
                    </div>
                    <button @click="next" class="btn btn-primary btn-block">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'
    import { useStore } from 'vuex'
    export default {
        name: 'card',
        setup(context,props) {
            const toast = useToast();
            const visible = props.showME
            return { toast, visible }
        },
        data: ()=> ({
            user: {
                email: null,
                password: null,
                phone_number: null
            },
            re_pass: null
        }),
        methods: {
            confirm_password() {

            },
            register() {
                this.store.dispatch('register', {email: user.email, password: user.password}).then((res) => {
                    console.log(res)
                })
            }
        }
    }
</script>