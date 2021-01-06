<template>
  <div id="register" class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 card">
          <div class="col-lg-12">
            <h1 class="text-uppercase font-weight-bold">Create Account.</h1>
          </div>
          <form v-if="show" class="col-lg-12" @submit="onSubmit" @reset="onReset">
            <div class="form-floating">
              <label class="text-uppercase">username</label>
              <input class="form-control" v-model="cred.email" type="email" required>
            </div>
            <div class="form-floating">
              <label class="text-uppercase">password</label>
              <input class="form-control" v-model="cred.password" type="password" required>
            </div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-danger btn-block">Register</button>
              <div class="px-3 text-center">
                <router-link to="/login" class="text-secondary">Go Back</router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data: ()=> ({
    cred: {
      email: null,
      password: null
    }
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert()
      this.$store.dispatch('register', this.cred).then((user) => {
        alert(`Welcome Back ${user}`)
        this.$nextTick(() => { this.$router.replace('/home') })
      })
    },
    onReset(evt) {
      evt.preventDefault()
      Object.assign({}, this.cred)
      this.show = false
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
        margin-top: 75px;
        height: auto;
        background: white;
        text-align: center;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        display: flex;
        justify-content: center;
        align-items: center;
          h1 {
            margin-top: 15px;
            text-align: center;
            font-size: 50px;
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
              label {
                margin-bottom: 0px;
                font-size: 10px;
                color: #6C6C6C;
                font-weight: bold;
                letter-spacing: 1px;
              }
            p {
              font-size: 12px;
            }
        }
      }
  }
</style>