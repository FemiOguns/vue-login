<template>
  <div id="register" class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 shadow shadow-lg card">
          <div class="col-lg-12">
            <h1 class="text-uppercase font-weight-bold">Create Account.</h1>
          </div>
            <div ref="register_stepper" class="bs-stepper">
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
                  <div class="step" data-target="#confirm-password">
                      <button type="button" class="step-trigger" role="tab" aria-controls="confirm-password" id="confirm-password-trigger">
                          <span class="bs-stepper-circle">3</span>
                          <span class="bs-stepper-label">Confirm Password</span>
                      </button>
                  </div>
                  <div class="line"></div>
                  <div class="step" data-target="#user-phone">
                      <button type="button" class="step-trigger" role="tab" aria-controls="user-phone" id="user-phone-trigger">
                          <span class="bs-stepper-circle">5</span>
                          <span class="bs-stepper-label">Mobile Phone</span>
                      </button>
                  </div>
                  <div class="line"></div>
                  <div class="step" data-target="#code">
                      <button type="button" class="step-trigger" role="tab" aria-controls="code" id="code-trigger">
                          <span class="bs-stepper-circle">6</span>
                          <span class="bs-stepper-label">6-Digit Code</span>
                      </button>
                  </div>
              </div>
              <form @submit="onSubmit" @reset="onReset">
              <div class="bs-stepper-content fade">
                  <div id="step-1" class="content">
                    <div class="form-group">
                      <div class="form-floating">
                        <label class="text-uppercase">username</label>
                        <input class="form-control" v-model="user.email" type="email" required>
                      </div>
                      <button @click="next" class="btn btn-primary">Next</button>
                    </div>
                  </div>
                  <div id="step-2" class="content">
                    <div class="form-group">
                      <div class="form-floating">
                        <label class="text-uppercase">password</label>
                        <input class="form-control" v-model="user.password" type="password" required>
                      </div>
                      <button @click="next" class="btn btn-primary">Next</button>
                    </div>
                    </div>
                  <div id="step-3" class="content">
                    <div class="form-group">
                      <div class="form-floating">
                        <label class="text-uppercase">confirm</label>
                        <input class="form-control" v-model="re_pass" type="password" required>
                      </div>
                      <button @click="next" class="btn btn-primary">Next</button>
                    </div>
                    </div>
                  <div id="step-4" class="content">
                    <div class="form-group">
                      <div class="form-floating">
                        <label class="text-uppercase">Phone Number</label>
                        <input class="form-control" v-model="user.phone_number" type="tel" required>
                      </div>
                      <button @click="next" class="btn btn-primary">Next</button>
                    </div>
                    </div>
                  <div id="step-5" class="content">
                    <div class="form-group">
                      <div class="form-floating">
                        <label class="text-uppercase">6 Digit Code</label>
                        <input class="form-control" v-model="code" type="text" maxlength="6"  required>
                      </div>
                      <button @click="next" class="btn btn-primary">Next</button>
                    </div>
                    </div>
                    <div id="step-6" class="content text-center">
                        <button type="submit" class="btn btn-primary mt-5">Submit</button>
                    </div>
              </div>
                </form>
            </div>
            <div class="col-lg-12">
              <div class="py-3 text-center">
                <router-link to="/login" class="text-secondary">Go Back</router-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from 'bs-stepper'

export default {
  name: 'register',
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
  mounted() {
    this.stepper = new Stepper(this.$refs.register_stepper, {
        linear: false,
        animation: true
    })
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert()
      this.$store.dispatch('register', this.user).then((user) => {
        this.$nextTick(() => { this.$router.replace('/home') })
      })
    },
    onReset(evt) {
      evt.preventDefault()
      this.$nextTick(() => { Object.asign({}, this.cred) })
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