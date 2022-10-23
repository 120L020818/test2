<template>
<!--  <router-link to="/login">登陆</router-link>-->
<!--  <router-link to="/register">注册</router-link>-->
<!--  <router-link to="/agreement">协议</router-link>-->
<!--  <router-link to="/temp">Temp</router-link>-->
  <router-view></router-view>
</template>

<script>
import {useStore} from "@/store";

// import myLogin from "@/components/MyLogin";
// import myRegister from "@/components/MyRegister";
// import myAgreement from "@/components/MyAgreement";
// import router from "@/router";
export default {
  name: 'App',
  components: {
  },
  // setup(props){
  //   const store = useStore()
  //   return {
  //     store,
  //   }
  // },
  mounted() {
    this.$router.replace({name:'login'})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
