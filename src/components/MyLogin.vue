<template>
  <el-dialog
      v-model="dialogVisible"
      :title=message
      width="30%">
    <!--      :before-close="handleClose" -->
    <template #footer>
      <span class="dialog-footer">
<!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
        <el-button type="primary" @click="clear"
        >确认</el-button>
      </span>
    </template>
  </el-dialog>

  <div class="beg-login-bg">
    <div class="beg-top-title">欢迎使用天际CA系统！</div>
    <div class="beg-login-box">
      <el-space direction="vertical">
        <el-input prefix-icon="UserFilled" v-model="username" class="w-50 m-2" placeholder="请输入用户名:"/>
        <el-input prefix-icon="Lock" v-model="password" class="w-50 m-2" type="password" placeholder="请输入密码:"
                  show-password/>
        <el-input prefix-icon="HelpFilled" v-model="captcha" class="w-50 m-2" placeholder="请输入验证码:"/>
        <div id="checkCode" class="code" @click="shuffleCode">{{ trueCaptcha }}</div>

        <br>

        <!--      <el-row class="mb-2">-->
        <el-space wrap>
          <el-button type="primary" size="large" plain @click="onLoginClick">
            <el-icon>
              <Check/>
            </el-icon>
            <span>
            登陆
          </span>
          </el-button>
          <el-button type="success" size="large" plain @click="onRegClick">
            <el-icon>
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
import {Edit, Search, Lock, Unlock, Check} from '@element-plus/icons-vue'
import {ElButton, ElInput, ElSpace, ElIcon} from 'element-plus'
// import {Upload,Check} from '@element-plus/icons-vue'

import axios from "axios";
import APIS from "../modules/api";
import createCode from "@/modules/method";
import {useStore} from "@/store/index";
import JsHttps from "js-https";
import CryptoJS from "crypto-js";

export default {
  name: "MyLogin",
  data: () => ({
    username: "",
    password: "",
    captcha: "",
    trueCaptcha: "",


    store: useStore(),
    dialogVisible: false,
    message: "",
  }),
  components: {ElButton, ElInput, ElSpace, ElIcon, Edit, Check},
  mounted() {
    this.trueCaptcha = createCode(5);
  },
  methods: {
    clear() {
      if(this.message==="登陆成功!"&&this.username==="admin"){
        this.$router.replace({name: 'admin'})
      }else if(this.message==="登陆成功!"&&this.username!=="admin"){
        this.$router.replace({name: 'index'})
      }
      this.captcha = "";
      this.trueCaptcha = createCode(5);
      this.dialogVisible=false;
      this.message="";
    },
    shuffleCode() {
      this.trueCaptcha = createCode(5);
      return this.trueCaptcha;
    },
    onLoginClick() {
      const adminpublickey = this.store.publickey
      const jsHttps = new JsHttps();
      const myRequestData = {
        username: this.username,
        password: this.password,
        captcha: this.captcha
      }
      var encdata=jsHttps.encryptRequestData(myRequestData, adminpublickey)
      const mac={
        mac:CryptoJS.SHA1(encdata.bodyCipher).toString()
      }
      const resdata={
        data:encdata,
        resmac:mac
      }
      console.log("看这里")
      if (this.captcha === this.trueCaptcha) {
        axios.post(APIS.login,
            resdata
        ).then(res => {
          var mydata=jsHttps.decryptResponseData(res.data)
          if (mydata.success === true && mydata.isAdmin === false) {
            this.message="登陆成功!";
            this.dialogVisible = true;
            this.store.username = this.username;
            console.log("看那里")

          } else if (mydata.success === true && mydata.isAdmin === true) {
            this.message="登陆成功!";
            this.store.username = this.username;
            this.dialogVisible = true;
            console.log("你是管理员")
          }else if(mydata.success===false){
            this.message="用户名或密码错误!";
            this.dialogVisible = true;
          }
        }).catch(reason => {
          console.log(reason);
        }).finally(() => {
          console.log("FINALLY");
        })
      } else {
        this.message = "验证码有误!";
        this.dialogVisible = true;
      }
    },
    onRegClick() {
      setTimeout(() => {
        this.$router.push({name: 'register'});
      }, 500);
    }
  }
}
</script>

<style scoped>

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