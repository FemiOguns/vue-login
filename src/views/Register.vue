<template>
  <div id="register" class="wrapper">
    <div class="main container">
    </div>
  </div>
</template>

<script>
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
    methods: {
      register() {
        return
      }
    }
  }
</script>

<style scoped lang="scss">
.logo {
  position: absolute;
  width: 83px;
  height: 83px;
  left: 150px;
  top: 150px;
}
#register {
  position: absolute;
  width: 694.65px;
  height: 600px;
  left: -119px;
  top: 0px;
  opacity: 0.4;
  z-index: -5;
}
</style>