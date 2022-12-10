<template>

  <el-dialog
      v-model="dialogVisible"
      :title="message"
      width="30%">
    <!--      :before-close="handleClose" -->
    <template #footer>
      <span class="dialog-footer">
<!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
        <el-button type="primary" @click="dialogVisible = false"
        >确认</el-button>
      </span>
    </template>
  </el-dialog>

  <el-row>
    <el-col :span="6">
    </el-col>

    <el-col :span="10" style="text-align: center">
      <div style="background-color: rgba(233, 238, 243, 0.8) ;border-radius: 10px">
        <el-form
            label-position="right"
            label-width="200px"
            style="max-width: 500px;">
          <span
              style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>请在此处输入证书序号,</span><br>
          <span
              style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>以进行证书获取:</span>

          <el-form-item label="证书序号">
            <el-input v-model=" SerialNumber"/>
          </el-form-item>
        </el-form>
        <br>
        <el-row>
          <el-col :span="12">
            <el-switch
                v-model="value"
                active-text="使用电子信封更新"
                inactive-text="使用浏览器下载"
                style="--el-switch-on-color:#13ce66; --el-switch-off-color: #409eff"
                @click="change"
            />
          </el-col>
          <el-col :span="12" style="text-align: center">
            <el-button plain :type=mcolor @click="getCA">
              点击获取证书
              <el-icon>
                <Download/>
              </el-icon>
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="6">
    </el-col>
    <el-col :span="6">
    </el-col>
  </el-row>
</template>

<script>
import {ArrowLeft, ArrowRight, Download, Check} from "@element-plus/icons-vue"
import {
  ElSwitch,
  ElMessageBox,
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElButton,
  ElButtonGroup,
  ElCol,
  ElRow
} from "element-plus"
import axios from "axios";
import APIS from "@/modules/api";
import {useStore} from "@/store/index";
import JsHttps from "js-https";
import CryptoJS from "crypto-js";

export default {
  name: "ChildCADownload",
  components: {
    ElSwitch,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    Download,
    ElCol,
    ElRow,
  },
  data: () => ({
    dialogVisible: false,
    SerialNumber: "",
    store: useStore(),
    message: "恭喜你,证书已下载成功!",
    value: 0,
    dist: ["primary", "success"],
    mcolor: "primary",
  }),
  mounted() {
  },
  methods: {
    change() {
      console.log(this.value);
      if (this.value === false) {
        console.log("执行这里");
        this.mcolor = "primary";
      } else {
        console.log("执行那里");
        this.mcolor = "success";
      }
      console.log(this.mcolor);
    },
    downloadCA() {
      const adminpublickey = this.store.publickey
      const jsHttps = new JsHttps();
      const myRequestData = {
        username: this.store.username,
        SerialNumber: this.SerialNumber,
      }
      var encdata = jsHttps.encryptRequestData(myRequestData, adminpublickey)
      const mac = {
        mac: CryptoJS.SHA1(encdata.bodyCipher).toString()
      }
      const resdata = {
        data: encdata,
        resmac: mac
      }

      axios.post(APIS.download, resdata, {responseType: 'blob'},).then(res => {
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = window.URL.createObjectURL(new Blob([res.data]))
        a.setAttribute('download', this.SerialNumber + '.json') //设置文件名
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        this.message = "恭喜你,证书已下载成功!";
        this.dialogVisible = true;
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
      this.dialogVisible = true;
    },
    emailCA() {
      const adminpublickey = this.store.publickey
      const jsHttps = new JsHttps();
      const myRequestData = {
        username: this.store.username,
        SerialNumber: this.SerialNumber,
      }
      var encdata = jsHttps.encryptRequestData(myRequestData, adminpublickey)
      const mac = {
        mac: CryptoJS.SHA1(encdata.bodyCipher).toString()
      }
      const resdata = {
        data: encdata,
        resmac: mac
      }

      axios.post(APIS.email, resdata
      ).then(res => {
        var target = jsHttps.decryptResponseData(res.data);
        console.log(target);
        var myurl = "http://192.168.0.102:9876/shop/user/getCA";
        var encdata2 = jsHttps.encryptRequestData(target, adminpublickey)
        console.log(encdata2)
        axios.post(myurl,
            encdata2,
        ).then(res => {
          this.message = "恭喜你,证书已传输成功!";
          this.dialogVisible = true;
          res = jsHttps.decryptResponseData(res.data);
        }).catch(reason => {
          console.log(reason);
        }).finally(() => {
          console.log("FINALLY");
        })
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
    },
    getCA() {
      const adminpublickey = this.store.publickey
      const jsHttps = new JsHttps();
      const myRequestData = {
        SerialNumber: this.SerialNumber,
      }
      var encdata = jsHttps.encryptRequestData(myRequestData, adminpublickey)
      const mac = {
        mac: CryptoJS.SHA1(encdata.bodyCipher).toString()
      }
      const resdata = {
        data: encdata,
        resmac: mac
      }
      var hasIt = false;
      axios.post(APIS.isava, resdata
      ).then(res => {
        var mydata = jsHttps.decryptResponseData(res.data);
        hasIt = mydata.success;
        console.log(hasIt)
        if (hasIt === true) {

          if (this.value === false) {
            console.log("调用了downloadCA")
            this.downloadCA();
          } else {
            console.log("调用了emailCA")
            this.emailCA();
          }

        } else {
          this.message = "序列号有误,请仔细检查。"
          this.dialogVisible = true;
        }
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
    },
  }
}

</script>

<style scoped>

</style>