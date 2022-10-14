<template>
  <div class="beg-login-bg1"></div>
</template>

<script>
export default {
  name: "MyChild02"
}
</script>

<style scoped>
@import "../styles/common.css";
.beg-login-bg1 {
  width:100%;
  height: 100vh;
  position: fixed;
  /*overflow-x: hidden;*/
  /*overflow-y: hidden;*/
  background-size: cover !important;
  background-image: url(../assets/bg2.png);
}
</style>