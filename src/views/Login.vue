<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 card">
          <div class="col-lg-12">
            <h1>Login.</h1>
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
            <capthca />
            <div class="col-lg-12">
              <button type="submit" class="btn btn-primary btn-block">Log in</button>
              <div class="px-3 text-center">
                  <router-link class="text-secondary" to="/register">Don't have an account</router-link>
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
  name: 'login',
  data: ()=> ({
    cred: {
      email: null,
      password: null
    },
    show: true
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert()
      this.$store.dispatch('login', this.cred).then((user) => {
        alert(user.name ? `Welcome Back ${user.name}`: 'Hello')
        this.$nextTick(() => { this.$router.replace('/home') })
      }).catch(err => console.error(err))
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
  $img : url('https://images.pexels.com/photos/5441742/pexels-photo-5441742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  $col1: rgba(7, 190, 184, 0.6);
  $col2: rgba(152, 223, 234, 0.8);

  #login {
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
            router-link {
              font-size: 12px;
            }
        }
      }
  }
  
</style>