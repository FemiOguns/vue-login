<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 rounded-3 shadow shadow-lg card">
          <div class="col-lg-12">
            <h1>Login.</h1>
          </div>
          <form class="col-lg-12" @submit="onSubmit" @reset="onReset">
            <div class="form-floating">
              <label class="text-uppercase">username</label>
              <input class="form-control" v-model="cred.email" type="email" required>
            </div>
            <div class="form-floating">
              <label class="text-uppercase">password</label>
              <input class="form-control" v-model="cred.password" type="password" required>
            </div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-primary btn-block">Log in</button>
              <div class="py-3 text-center">
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

  }),
  methods: {

  }
}
</script>

<style lang="scss">
  
</style>