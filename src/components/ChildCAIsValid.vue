<template>
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
              style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>进行证书有效性查询:</span>

          <el-form-item label="证书序号">
            <el-input v-model="ID"/>
          </el-form-item>
        </el-form>
        <br>

        <el-row>
          <el-col :span="24" style="text-align: center">
            <el-button plain type="primary" @click="isValidResult">
              点击提交查询
              <el-icon>
                <Search/>
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
import {ArrowLeft, ArrowRight, Download, Check, Search} from "@element-plus/icons-vue"
import {
  ElCard,
  ElSpace,
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
  name: "ChildCAIsValid",
  data: () => ({
    ID: "",
    dialogVisible: false,
    SerialNumber: "23333333",
    store:useStore(),
    title:"恭喜你,你的证书是有效的!",
  }),
  components: {
    // ElSpace,
    // ElCard,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    // ElSelect,
    // ElOption,
    ElButton,
    // Check,
    Search,
    // ElButtonGroup,
    ElCol,
    ElRow,
  },
  methods: {
    isValidResult() {
      this.SerialNumber=this.ID;

      const adminpublickey = this.store.publickey
      const jsHttps = new JsHttps();
      const myRequestData={
        username:this.store.username,
        SerialNumber:this.SerialNumber,
      }
      var encdata = jsHttps.encryptRequestData(myRequestData, adminpublickey)
      const mac = {
        mac: CryptoJS.SHA1(encdata.bodyCipher).toString()
      }
      const resdata = {
        data: encdata,
        resmac: mac
      }

      axios.post(APIS.isvalid,
          resdata
      ).then(res => {
        var mydata=jsHttps.decryptResponseData(res.data);
        this.dialogVisible = true;

        if(mydata.success===true){
          console.log(mydata.success);
          this.title="恭喜,您的证书是有效的!";
        }else{
          this.title="您的证书无效!";
        }
        this.dialogVisible = true;
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
      this.dialogVisible = true;
    },
  }
}
</script>

<style scoped>

</style>