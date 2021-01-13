<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,600;0,800;1,300;1,600;1,800&display=swap');

body {
    font-family: 'Nunito Sans', sans-serif;
}

h1 {
    font-size: 24px;
    line-height: 33px;
    font-weight: 800;
}

h2 {
    font-size: 20px;
    line-height: 27px;
    font-weight: 800;
}

h3 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 800;
}

h4 {
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
}

p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
}

  #app {
    width: 100%;
    height: 100%;
  }

</style>
