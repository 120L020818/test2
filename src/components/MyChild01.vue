<template >
  <el-row>
    <el-col :span="6">
    </el-col>
    <el-col :span="10">
      <div style="text-align: left;font-family:华文新魏">
        <h1>欢迎使用天际CA管理系统!</h1>
        <h1>您正在使用的是:{{ type }};</h1>
        <h1>您可以进行如下操作:</h1>
        <h1>1.证书申请;</h1>
        <h1>2.证书申请结果查询;</h1>
        <h1>3.证书下载;</h1>
        <h1>4.证书有效性查询;</h1>
        <h1>5.证书手动撤销;</h1>
        <br>
        <h1>功能栏在该页面的左侧,开始使用吧!</h1>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {useStore} from "@/store/index";
import {ElCol,ElRow} from "element-plus"
export default {
  name: "MyChild01",
  data:()=>({
    store:useStore(),
    type:"",
  }),
  mounted() {
    this.type=this.store.username === "admin" ? "管理系统" : "用户系统"
  },
  components:{
    ElCol,
    ElRow,
  }
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