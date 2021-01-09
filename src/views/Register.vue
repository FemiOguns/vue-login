<template>
  <div id="register" class="wrapper">
    <div class="container">
      <div class="col-lg-6 col-md-8 shadow shadow-lg card">
        <div class="col-lg-12">
          <h1 class="text-uppercase font-weight-bold">Create Account.</h1>
        </div>
        <div ref="register_stepper" id="register_stepper" class="bs-stepper">
          <div class="bs-stepper-header" role="tablist">
            <div class="step" data-target="#user-email">
              <button type="button" class="step-trigger" role="tab" aria-controls="user-email" id="user-email-trigger">
                <span class="bs-stepper-circle">1</span>
                <span class="bs-stepper-label">Email</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#user-password">
              <button type="button" class="step-trigger" role="tab" aria-controls="user-password" id="user-password-trigger">
                <span class="bs-stepper-circle">2</span>
                <span class="bs-stepper-label">Password</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#user-phone">
              <button type="button" class="step-trigger" role="tab" aria-controls="user-phone" id="user-phone-trigger">
                <span class="bs-stepper-circle">3</span>
                <span class="bs-stepper-label">Mobile Phone</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#code">
              <button type="button" class="step-trigger" role="tab" aria-controls="code" id="code-trigger">
                <span class="bs-stepper-circle">4</span>
                <span class="bs-stepper-label">6-Digit Code</span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <div id="user-email" role="tabpanel" class="bs-stepper-pane content fade" aria-labelledby="user-email-trigger">
              <div class="form-group">
                  <label class="text-uppercase">username</label>
                  <input class="form-control" v-model="user.email" type="email" required>
                  <button @click="next" class="btn btn-primary">Next</button>
                </div>
            </div>
            <div id="user-password" role="tabpanel" class="bs-stepper-pane content fade" aria-labelledby="user-password-trigger">
              <div class="form-group">
                  <label class="text-uppercase">password</label>
                  <input class="form-control" v-model="user.password" type="password" required>
                  <input class="form-control" v-model="re_pass" type="password" required>
                <button @click="next" class="btn btn-primary">Next</button>
              </div>
            </div>
            <div id="user-phone" role="tabpanel" class="bs-stepper-pane content fade" aria-labelledby="user-phone-trigger">
              <div class="form-group">
                  <label class="text-uppercase">Phone Number</label>
                  <input class="form-control" v-model="user.phone_number" type="tel" required>
                  <button @click="next" class="btn btn-primary">Next</button>
              </div>
            </div>
            <div id="user-code" role="tabpanel" class="bs-stepper-pane content fade" aria-labelledby="user-code-trigger">
              <div class="form-group">
                  <label class="text-uppercase">6 Digit Code</label>
                  <input class="form-control" v-model="code" type="text" maxlength="6"  required>
                  <button @click="next" class="btn btn-primary">Next</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="py-3 text-center">
            <router-link to="/login" class="text-secondary">Go Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Stepper from 'bs-stepper';
  import { onMounted, ref } from 'vue';

  export default {
    name: 'register',
    setup(){
      const register_stepper = ref(null)
      onMounted(() => {
        this.stepper = new Stepper(register_stepper, {
          linear: true,
          animation: false
        })
      });
    return { register_stepper }
    },
    data: ()=> ({
      user: {
        email: null,
        password: null,
        name: null,
        phone_number: null
      },
      code: null,
      re_pass: null
    }),
    methods: {
      register() {
        this.$store.dispatch('register', {email: this.user.email, password: this.user.password}).then((user) => {
          Object.assign({}, this.user)
          this.$nextTick(() => { this.$router.replace('/home') })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  $img : url('https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  $col1: rgba(230, 126, 34, 0.6);
  $col2: rgba(234,152, 223, 0.8);

  #register {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #07BEB8;  /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient($col1, $col2), $img;
    background: linear-gradient($col1, $col2), $img; /* The least supported option. */
    background-size: cover;
    background-position: center;
      .card {
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
          h1 {
            margin-top: 15px;
            text-align: center;
            font-size: 35px;
            letter-spacing: 2px;
            margin-top: 15px;
            font-weight: bold;
            color: black;
          }
          form {
            margin-top: 25px;
            text-align: left;
              input[type=email],input[type=password] {
                border: none;
                border-bottom: 2px solid #023f4d;
                border-top: 0px;
                border-radius: 0px;
                font-weight: bold;
                outline: 0;
                margin-bottom: 20px;
                padding-left: 0px;
                color: black;
              }
              input:focus {
                border-color: inherit;
                -webkit-box-shadow: none;
                box-shadow: none;
                border-bottom: 2px solid #0DB8DE;
                outline: 0;
              }
        }
      }
  }
</style>