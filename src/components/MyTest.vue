<template>
  <div class="beg-login-bg">
    看这里
    <button @click="test" class="btn btn-primary btn-lg">登陆</button>
  </div>
</template>

<script>
export default {
  name: "MyTemp",
  methods: {
    test(){
      this.$router.push({name:'test'})
    }
  }
}
</script>

<style scoped>
@import "../styles/common.css";

</style>