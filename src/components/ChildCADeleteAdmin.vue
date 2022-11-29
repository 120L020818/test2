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
              style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>在此可以进行证书手动撤销:</span><br>
          <el-form-item label="证书序号">
            <el-input v-model="ID"/>
          </el-form-item>
        </el-form>
        <br>
        <el-row>
          <el-col :span="24" style="text-align: center">
            <el-button plain type="primary" @click="deleteResult">
              点击撤销证书
              <el-icon>
                <Remove/>
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
import {ArrowLeft, ArrowRight, Download, Check, Remove} from "@element-plus/icons-vue"
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

export default {

  name: "ChildCADeleteAdmin",
  data: () => ({
    ID: "",
    dialogVisible: false,
    SerialNumber: "23333333",
    title:"你的证书已经手动撤销了!",
    store:useStore(),
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
    Remove,
    // ElButtonGroup,
    ElCol,
    ElRow,
  },
  methods:{
    deleteResult() {
      const jsHttps=new JsHttps();
      const adminpublickey=this.store.publickey
      this.SerialNumber=this.ID
      const myRequestData={
        SerialNumber:this. SerialNumber,
      }
      axios.post(APIS.deleteadmin, jsHttps.encryptRequestData(myRequestData,adminpublickey)
      ).then(res => {
        res=jsHttps.decryptResponseData(res.data);
        console.log(res)
        if(res.success===false){
          this.title="撤销失败!"
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