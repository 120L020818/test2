<template>
  <div class="common-layout">
    <el-dialog
        v-model="dialogVisible"
        :title=title
        width="30%"
        style="font-size: 20px">
      <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
        >确认</el-button>
      </span>
      </template>
    </el-dialog>


    <el-container>
      <el-header style="text-align: right; font-size: 30px">
        <el-row>
          <el-col :span="3" style="text-align: left">
            <el-radio-group v-model="isCollapse">
              <el-radio-button :label="true" size="small">collapse</el-radio-button>
              <el-radio-button :label="false" size="small">expand</el-radio-button>
            </el-radio-group>
          </el-col>

          <el-col :span="1" style="text-align: left">
            <el-icon style="margin-top:10px">
              <Message/>
            </el-icon>
            <span></span>
          </el-col>
          <el-col :span="7" style="text-align: left" @click="onclick1">
            <span>天际CA管理系统</span>
          </el-col>

          <el-col :span="12">
            <div class="toolbar" style="text-align:right">
              <el-dropdown>
                <el-icon :size="30" color="white" style="margin-right: 10px;margin-top: 3px">
                  <Setting/>
                </el-icon>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="onclick7">个人账号</el-dropdown-item>
                    <el-dropdown-item @click="onclick8">退出登录</el-dropdown-item>
<!--                    <el-dropdown-item  @click="show">测试接口</el-dropdown-item>-->
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>欢迎使用,{{ name }}!</span>
            </div>
          </el-col>
        </el-row>
      </el-header>


      <el-container>


        <el-aside width="200px">
          <!--          <el-row><el-col style="text-align:center"><el-icon :size="50"><Star/></el-icon><h2 class="mb-2">功能列表</h2></el-col></el-row>-->

          <el-menu
              class="el-menu--vertical"
              :collapse="isCollapse"
              @open="handleOpen"
              @close="handleClose"
          >

            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Star/>
                </el-icon>
                <span>功能列表</span>
              </template>
              <el-menu-item-group>
                <!--                <template #title>Group 1</template>-->
                <el-menu-item index="1-1"  disabled="true">
                  <el-icon>
                    <Switch/>
                  </el-icon>
                  <span>证书申请</span>
                </el-menu-item>
                <el-menu-item index="1-2"  disabled="true">
                  <el-icon>
                    <Search/>
                  </el-icon>
                  <span>证书申请结果查询</span>
                </el-menu-item>
                <el-menu-item index="1-3" disabled="true">
                  <el-icon>
                    <Download/>
                  </el-icon>
                  <span>证书下载</span>
                </el-menu-item>
                <el-menu-item index="1-4" @click="onclick5" disabled="true">
                  <el-icon>
                    <CircleCheck/>
                  </el-icon>
                  <span>证书有效性查询</span>
                </el-menu-item>
                <el-menu-item index="1-5" @click="onclick9">
                  <el-icon>
                    <Filter/>
                  </el-icon>
                  <span>证书审核</span>
                </el-menu-item>  <el-menu-item index="1-6" @click="onclick10">
                  <el-icon>
                    <Grid/>
                  </el-icon>
                  <span>可用证书列表</span>
<!--                </el-menu-item>  <el-menu-item index="1-7" @click="onclick11">-->
<!--                  <el-icon>-->
<!--                    <Comment/>-->
<!--                  </el-icon>-->
<!--                  <span>证书有效性查询</span>-->
                </el-menu-item>  <el-menu-item index="1-7" @click="onclick6">
                  <el-icon>
                    <CircleClose/>
                  </el-icon>
                  <span>证书撤销</span>
                </el-menu-item>
              </el-menu-item-group>

            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {useStore} from "@/store/index";
import {
  View,Aim,Filter,Grid,
  Setting,
  Message,
  Star,
  DArrowRight,
  Switch,
  Search,
  Download,
  CircleCheck,
  CircleClose,Comment
} from "@element-plus/icons-vue"
import {
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenuItem,
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElRadioGroup,
  ElRadioButton,
  ElSpace,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
} from "element-plus"
import axios from "axios";
import APIS from "@/modules/api";
import JsHttps from "js-https";
import CryptoJS from "crypto-js";
import JSEncrypt from "jsencrypt";
// import {RouterLink} from "vue-router"
export default {
  name: "myAdmin",
  data: () => ({
    store: useStore(),
    isCollapse: false,
    name:"",
    dialogVisible: false,
    title:"双重签名验证失败!",
  }),

  mounted() {
    console.log(this.type)
    this.name=this.store.username;
    this.$router.replace({name: 'child3'});
  },
  components: {
    ElDropdownItem,
    // Aim,
    Filter,Grid,
    // Comment,
    ElDropdownMenu,
    ElDropdown,
    ElHeader,
    ElIcon,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElRadioGroup,
    ElRadioButton,
    // ElSpace,
    ElCol,
    ElRow,
    // RouterLink,
    Setting,
    Message,
    Star,
    Switch,
    Search,
    Download,
    CircleCheck, CircleClose
    // View,
    // DArrowRight,

  },
  methods: {

    show(){
      const adminpublickey=this.store.publickey
      const jsHttps=new JsHttps();
      const myRequestData={ data:"2333"}
      var encdata=jsHttps.encryptRequestData(myRequestData, adminpublickey)
      const mac={
        mac:CryptoJS.SHA1(encdata.bodyCipher).toString()
      }
      const resdata={
        data:encdata,
        resmac:mac
      }
      console.log("233333");
      axios.post(APIS.vrfy, resdata
      ).then(res => {
        var mydata=jsHttps.decryptResponseData(res.data);
        var realdata=mydata.mydata;
        console.log(realdata);

        var encUserName=realdata.pi.userName;
        var encAccount=realdata.pi.account;
        var key=realdata.aes_key;
        var decname = CryptoJS.AES.decrypt(encUserName, key, {
          iv: key,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        decname = CryptoJS.enc.Utf8.stringify(decname);
        console.log('明文：', decname);

        var decaccount = CryptoJS.AES.decrypt(encAccount, key, {
          iv: key,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        decaccount = CryptoJS.enc.Utf8.stringify(decaccount);
        console.log('明文：', decaccount);
        // axios.post()

        var decds= CryptoJS.AES.decrypt(realdata.ds, key, {
          iv: key,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        decds=CryptoJS.enc.Utf8.stringify(decds);

        var pimd = {
          userName: CryptoJS.SHA1(decname).toString(),
          account: CryptoJS.SHA1(decaccount).toString(),
        }
        console.log(pimd);
        console.log(realdata.oimd);
        var pomd = CryptoJS.SHA1(pimd.toString() + realdata.oimd.toString()).toString();

        console.log(pomd);

        var verify = new JSEncrypt();
        verify.setPublicKey(this.store.customer);
        var verified = verify.verify(pomd, decds, CryptoJS.SHA256);
        console.log(verified);

        // const adminpublickey = this.store.publickey
        // const jsHttps = new JsHttps();
        const myRequestData2 = {
          verified:verified
        }
        var encdata2 = jsHttps.encryptRequestData(myRequestData2, adminpublickey)

        axios.post(APIS.log,
            encdata2
        ).then(res => {
          var mydata=jsHttps.decryptResponseData(res.data);
          const myRequestData3 = {
            mydata:2333
          }
          var encdata3 = jsHttps.encryptRequestData(myRequestData3, adminpublickey)

          axios.post(APIS.ret,encdata3).then(
              res=>{
                var mydata=jsHttps.decryptResponseData(res.data);
                console.log(mydata.mydata);
              }
          )

          if(mydata.success===true){
            console.log("结果记录成功!");
            this.title="双重签名验证成功!"
            this.dialogVisible=true;
          }else{
            console.log("记录失败!");
          }
        }).catch(reason => {
          console.log(reason);
        }).finally(() => {
          console.log("FINALLY");
        })

        // var encrypt = new JSEncrypt();
        // var decrypt = new JSEncrypt()
        // var sign = new JSEncrypt();
        // sign.setPrivateKey(customerPrivate);
        // var ds = sign.sign(pomd, CryptoJS.SHA256, "sha256");
        // console.log("双重签名", ds)

      }).catch(reason => {
      }).finally(() => {
      })
    },
    handleOpen() {

    },
    handleClose() {

    },
    onclick1() {
      //暂时没东西
      this.store.count++;
      console.log(this.store.username);
      this.$router.push({name: 'child3'});
    },onclick9(){
      this.$router.push({name: 'adminapply'});
    },onclick5(){
      this.$router.push({name: 'adminvalid'});
    },onclick10(){
      this.$router.push({name: 'adminvalidlist'});
    },
    onclick6() {
      this.$router.push({name: 'admindelete'});
    }, onclick7() {
      this.$router.push({name: 'adminself'});
    }, onclick8() {
      // console.log("看这里:"+this.store.username);
      // console.log("看这里:"+this.store.username);
      axios.post(APIS.logout, {
        username: this.store.username,
      }).then(res => {
      }).catch(reason => {
      }).finally(() => {
      })
      this.store.$reset();
      this.$router.replace({name: 'login'});
    }
  }
}
</script>

<style>
@import "../styles/common.css";

/*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
/*  width: 200px;*/
/*  min-height: 400px;*/
/*}*/

.common-layout {
  width: 100%;
  height: 100vh;
  position: fixed;
  /*overflow-x: hidden;*/
  /*overflow-y: hidden;*/
  background-size: cover !important;
  background-image: url(../assets/bg2.png);

}

.el-container {
  height: 100%;
}

.el-header {
  background-color: rgba(33, 61, 91, 0.5);
  color: white;
  text-align: center;
  margin: 0 0 0 0;
}

.el-aside {
  background-color: rgba(233, 238, 239, 0.5);
  color: white;
  /*text-align: center;*/
  margin: 0 0 0 0;
}

.el-main {
  background-color: rgba(233, 238, 243, 0.5);
  color: #333;
  text-align: center;
  line-height: 160px;
}

/*active-text-color="#ffd04b"*/
/*background-color="#545c64"*/
/*class="el-menu-vertical-demo"*/
/*default-active="2"*/
/*text-color="#fff"*/
.el-menu {
  text-line-through-color: white;
}

.el-sub-menu {
  background-color: rgba(60, 120, 180, 0.6);
  text-align: center;
}

.el-radio {

}

.common-layout .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>