<template>
  <!--  "您已注册成功!点击跳转"-->
  <el-dialog
      v-model="dialogVisible"
      :title=message
      width="30%">
    <!--      :before-close="handleClose" -->
    <template #footer>
      <span class="dialog-footer">
<!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
        <el-button type="primary" @click="jump"
        >{{ innerMessage }}</el-button>
      </span>
    </template>
  </el-dialog>
  <!--dialogVisible = false-->
  <div class="beg-login-bg">

    <div id="app1">
      <!--required限定必须填不能为空-->
      <br>
      <label>用户名</label><input type="text" v-model="username" required name="name" placeholder="请输入用户名:"
                                  class="input"><br>
      <br>
      <label>性别</label><input type="radio" v-model="sex" name="sex" value="man" checked="true"> 男
      <input type="radio" v-model="sex" name="sex" value="woman"> 女 <br>
      <br>
      <label>密码</label><input type="password" id='pwd' v-model="password" name="pwd" required @input="checkPassword"
                                placeholder="请输入密码:" class="input">
      <br>
      <el-space wrap>
        <div class="demo-progress">
          <el-progress :text-inside="true" :stroke-width="26" :percentage=percent :color="colors"/>
        </div>
      </el-space>
      <br>
      <el-button style="margin-left:20px;font-size: 10px;" :color="colors">{{ Content }}</el-button>


      <br>
      <br>
      <label>生日</label><input v-model="birthDate" type="date" class="input"><br>
      <br>
      <label>手机号</label><input v-model="phoneNumber" type="text" placeholder="请输入手机号:" required
                                  pattern="^1[3456789]\d{9}$"
                                  title="手机号格式错误了!" class="input"><br>
      <br>
      <label>邮箱</label><input v-model="email" name="email" type="email" required placeholder="请输入邮箱:"
                                class="input"><br>
      <br>

      <label @click="sendMyEmail" class="change" title="点我发送验证邮件~">e-验证</label><input v-model="emailCode"
                                                                                                type="text" required
                                                                                                placeholder="请输入邮箱验证码:"
                                                                                                class="input">
      <br>
      <br>

      <label>验证码</label><input type="text" v-model="captcha" id="inputCode" placeholder="请输入验证码:"
                                  class="input"><br>


      <div id="checkCode" class="code" @click="shuffleCode" title="点我更换验证码~">{{ trueCaptcha }}</div>

      <br>
      <br>
      <br>
      <!--      v-model:-->
      <!--      onclick="element.disabled=true"-->
      <div class="checkbox"><input type="checkbox" v-model="isChecked" id="checkbox"
                                   style="margin-right: 10px;">我已阅读并接受
        <router-link to='/agreement'>《天际CA使用须知》</router-link>
        <!--        <a href="/agreement/"-->
        <!--           target="_blank"></a>-->
      </div>
      <button id="register" @click="terLogin">立即注册</button>

    </div>
  </div>
</template>

<script>
import createCode from "@/modules/method";
import {ElButton, ElRow, ElSpace, ElProgress, ElDialog,} from "element-plus";
import axios from "axios";
import APIS from "../modules/api";
import {useStore} from "@/store/index";

export default {
  data: () => ({
    username: "",
    sex: "man",
    password: "",
    email: "",
    emailCode: "",
    trueEmailCode: "",
    captcha: "",
    trueCaptcha: "",
    isChecked: "",
    percent: 0,
    colors: "#f56c6c",
    Content: "密码不合法哦~",
    phoneNumber: "",
    birthDate: "1980-01-01",
    dialogVisible: false,

    store: useStore(),
    message: "",
    innerMessage: "",
  }),
  components: {ElProgress, ElSpace, ElDialog,},
  mounted() {
    this.trueCaptcha = createCode(5);
    this.trueEmailCode = createCode(23);
    this.percent = 0;
    this.colors = "#f56c6c";
  },
  methods: {
    shuffleCode() {
      this.trueCaptcha = createCode(5);
      console.log(this.trueCaptcha);
      // return this.trueCaptcha;
    },
    jump() {
      if (this.message === "您已注册成功!点击跳转") {
        this.$router.replace({name: 'index'})
      }

      this.captcha = "";
      this.trueCaptcha = createCode(5);
      this.dialogVisible = false;
      this.message = "";
    },
    checkPassword() {
      var innerPass = this.password;
      var len = this.password.length;
      if (len < 6) {
        this.percent = 0;
        this.Content = "密码不合法哦~";
        return;
      }
      var level = 0;
      var t1 = 0, t2 = 0, t3 = 0;
      var regex11 = /\d/;//所有数字
      var regex12 = /[a-zA-Z]/;//所有字母
      var regex13 = /\W/;//非数字非字母

      for (var i = 0; i < len; i++) {
        if (innerPass.charAt(i).match(regex11)) {
          t1 = 1;
        } else if (innerPass.charAt(i).match(regex12)) {
          t2 = 1;
        } else if (innerPass.charAt(i).match(regex13)) {
          t3 = 1;
        }
      }
      var sum = t1 + t2 + t3;
      level = sum;
      if (len >= 12 && level === 3) level = 4;
      if (level === 0) {
        this.percent = 0;
        this.percent = "#ffffff";
      } else if (level === 1) {
        this.percent = 20;
        this.colors = "#f56c6c";
        this.Content = "密码不安全!"
      } else if (level === 2) {
        this.percent = 40;
        this.colors = "#e6a23c";
        this.Content = "密码比较安全..."
      } else if (level === 3) {
        this.percent = 70;
        this.colors = "#5cb87a";
        this.Content = "密码很安全..."
      } else if (level === 4) {
        this.percent = 100;
        this.colors = "#1989fa";
        this.Content = "密码超级安全!"
      }
    },
    sendMyEmail() {
      console.log(this.email);
      axios.post(APIS.ecode, {
        email: this.email,
      }).then(res => {
        console.log(res.data);
        this.trueEmailCode = res.data.captcha;
      }).catch(reason => {
      }).finally(() => {
      })
    },
    terLogin() {
      /**
       *  判断是否能注册
       *  用户名:前端没有要求,后端需要验证合法性
       *  性别:没有要求
       *  密码:percent数值需要大于等于40
       *  生日:没有要求
       *  手机号:需要合法
       *  邮箱:没有要求
       *  e-验证:必须满足,即emailCode==trueEmailCode
       *  验证码验证:必须满足,即captcha==trueCaptcha
       *  最后的勾选框也要选上isChecked==true
       *  手机号的正则^1[3456789]\d{9}$
       * @type {number}
       */
      var flag1 = 0;
      if (this.percent >= 40) {
        flag1 = 1;
      } else {
        this.message = "密码强度不足!请更换密码!\n";
      }

      var flag2 = 0;
      if (this.captcha === this.trueCaptcha) {
        flag2 = 1;
      } else {
        this.message += "验证码输入错误!\n";
      }

      var flag3 = 0;
      if (this.emailCode === this.trueEmailCode) {
        flag3 = 1;
      } else {
        this.message += "邮箱验证码输入错误!\n";
      }

      var flag4 = 0;
      var reg = /^1[3456789]\d{9}$/
      if (this.phoneNumber.match(reg)) {
        flag4 = 1;
      } else {
        this.message += "手机号格式有误!\n";
      }
      console.log(flag4);

      if (flag1 && flag2 && flag3 && flag4) {
        axios.post(APIS.register, {
          username: this.username,
          sex: this.sex === "man" ? "1" : "0",
          password: this.password,
          birthday: this.birthDate,
          phone: this.phoneNumber,
          email: this.email,
        }).then(res => {
          if (res.data.success === true) {
            console.log(res)
            this.innerMessage = "跳转";
            this.message = "您已注册成功!点击跳转";
            this.store.username = this.username;
            this.dialogVisible = true;
          } else if (res.data.success === false && res.data.hasB4 === true) {
            this.innerMessage = "确认";
            this.message = "用户名冲突,请更换用户名!";
            this.dialogVisible = true;
          }
        }).catch(reason => {
        }).finally(() => {
        })
      } else {
        this.innerMessage = "确认"
        this.dialogVisible = true;
      }


    }
  },


}
</script>

<style scoped>
@import "../styles/common.css";

.demo-progress .el-progress--line {
  margin-left: 40px;
  margin-top: 10px;
  width: 350px;
}

* {
  margin: 0;
  padding: 0;
}

/*协议链接颜色*/
a {
  color: lightblue;
  text-decoration: none;
}

#app1 {
  height: 850px;
  width: 500px;
  text-align: center;
  margin: 20px auto;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px
}

label {
  display: inline-block;
  width: 70px;
  height: 38px;
  text-align: center;
}

/*输入框样式*/
.input {
  font-family: "微软雅黑", serif;
  width: 200px;
  height: 38px;
  border-radius: 4px;
}

/*协议框样式*/
.checkbox {
  font-size: 14px;
  margin-left: 20px;
}

/*注册按钮样式*/
#register {
  font-family: "微软雅黑", serif;
  width: 270px;
  height: 38px;
  border-radius: 5px;
  background: pink;
  border: 1px solid silver;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
}

/* #btn{width: 50px;height: 30px;display: inline-block;float: right;margin-right: 15px;} */
/*以下是密码三个强度对应的颜色*/
.default {
  background: #eeeeee;
}

.weak {
  background: #FF0000;
}

.medium {
  background: #FF9900;
}

.strong {
  background: #33CC00;
}

/*.show使密码强度整个部分向右移动 span是密码强度框的样式*/
.show {
  margin-left: 65px;
}

span {
  display: inline-block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background: #ddd;
  text-align: center;
  margin: 7px 4px;
}

.code {
  /*验证码样式*/
  font-family: "Aa新华墨竹体 (非商业使用)";
  font-style: italic;
  color: rgb(255, 255, 255, 0.7);
  font-size: 35px;
  border: 0;
  margin-left: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* padding:2px 3px; */
  letter-spacing: 3px;
  font-weight: bolder;
  float: left;
  cursor: pointer;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /* vertical-align:middle; */
  background-color: gray;
}

/*更换验证码-文字样式*/
.change {
  text-decoration: none;
  font-size: 14px;
  color: #555c5c;
  /* padding-left:20px; */
  margin-top: 20px;
}

/*更换验证码-鼠标点击文字样式*/
.change:hover {
  text-decoration: underline;
  cursor: pointer;
  message: "点我发送邮件验证码~";
}
</style>