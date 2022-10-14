<template>
  <div class="beg-login-bg">
    <div class="beg-top-title">欢迎使用天际CA系统！</div>
    <div class="beg-login-box">
    <el-space direction="vertical">
      <el-input prefix-icon="UserFilled" v-model="username" class="w-50 m-2" placeholder="请输入用户名:"  />
      <el-input prefix-icon="Lock" v-model="password" class="w-50 m-2"  type="password" placeholder="请输入密码:" show-password/>
      <el-input prefix-icon="HelpFilled" v-model="captcha" class="w-50 m-2" placeholder="请输入验证码:" />
      <div id="checkCode" class="code" @click="shuffleCode">{{ trueCaptcha }}</div>

      <br>

<!--      <el-row class="mb-2">-->
      <el-space wrap>
        <el-button type="primary" size="large" plain  @click="onLoginClick">
          <el-icon >
            <Check/>
          </el-icon>
          <span>
            登陆
          </span>
        </el-button>
        <el-button type="success" size="large" plain  @click="onRegClick">
          <el-icon >
            <Edit/>
          </el-icon>
          <span>
            注册
          </span>
        </el-button>
<!--      </el-row>-->
      </el-space>
    </el-space>
    </div>
  </div>
</template>


<script>
import { Edit,  Search  ,Lock,Unlock,Check} from '@element-plus/icons-vue'
import {ElButton,ElInput,ElSpace,ElIcon} from 'element-plus'
// import {Upload,Check} from '@element-plus/icons-vue'

import axios from "axios";
import APIS from "../modules/api";
import createCode from "@/modules/method";

export default {
  name: "MyLogin",
  data: () => ({
    username: "",
    password: "",
    captcha: "",
    trueCaptcha: "",
  }),
  // Delete, Share, Upload, Edit, Search
  components: {ElButton,ElInput,ElSpace,ElIcon,Edit,Check},
  mounted() {
    this.trueCaptcha = createCode(5);
  },
  methods: {
    shuffleCode() {
      this.trueCaptcha = createCode(5);
      return this.trueCaptcha;
    },
    onLoginClick() {
      axios.post(APIS.login, {
          username: this.username,
          password: this.password,
          captcha: this.captcha
      }).then(res => {
        console.log(res.data);
        if(res.data.success===true&&res.data.isAdmin===false){
          this.$router.push({name: 'index'})
        }
        else if(res.data.success===true&&res.data.isAdmin===true){
          console.log("你是管理员")
        }
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })


    },
    onRegClick() {
      setTimeout(() => {
        this.$router.push({name: 'register'})

      }, 500);
    }
  }
}
</script>

<style scoped>
@import "../styles/common.css";

.beg-login-box {
  width: 450px;
  height: 300px;
  margin: 10% auto;
  background-color: rgba(127, 127, 127, 0.5);
  border-radius: 10px;
}

.beg-top-title {
  line-height: 200px;
  text-align: center;
  height: 200px;
  weight: 500px;
  margin-top: 100px;
  font-size: 72px;
  font-family: "Aa新华墨竹体 (非商业使用)", serif;
  background-color: rgba(255, 255, 255, 0.7);
}

.code {
  /*验证码样式*/
  font-family: "Aa新华墨竹体 (非商业使用)";
  font-style: italic;
  color: rgb(255, 255, 255, 0.7);
  font-size: 35px;
  border: 0;
  /* padding:2px 3px; */
  letter-spacing: 3px;
  font-weight: bolder;
  float: left;
  cursor: pointer;
  width: 150px;
  height: 36px;
  line-height: 35px;
  text-align: center;
  /* vertical-align:middle; */
  background-color: gray;
}


</style>