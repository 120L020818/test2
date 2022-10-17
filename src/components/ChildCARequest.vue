<template>

  <el-dialog
      v-model="dialogVisible"
      title="恭喜你,您的申请已经审核通过!"
      width="30%"
      style="font-size: 20px">

    <el-card class="box-card">

        <div class="card-header">
          <el-button class="button" text @click="copyNumber">点击此处复制证书序号</el-button>
        </div>
    </el-card>
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
              style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>请在此处输入工商注册号,</span><br>
      <span
          style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>以查询证书申请结果:</span>

      <el-form-item label="工商注册号">
        <el-input v-model="ID"/>
      </el-form-item>
    </el-form>
    <br>

    <el-row>
      <el-col :span="24" style="text-align: center">
        <el-button plain type="primary" @click="requestResult">
          点击提交查询
          <el-icon>
            <Check/>
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
import {copyText} from "vue3-clipboard";
import axios from "axios";
import APIS from "@/modules/api";
import {useStore} from "@/store/index";
export default {
  name: "ChildCARequest",
  data: () => ({
    ID: "",
    dialogVisible: false,
    SerialNumber: "23333333",

    store:useStore(),
  }),
  components: {
    // ElSpace,
    ElCard,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    // ElSelect,
    // ElOption,
    ElButton,
    Check,
    // ElButtonGroup,
    ElCol,
    ElRow,
  },
  methods: {
    requestResult() {
      // axios.post(APIS.request, {
      //   SerialNumber:this.SerialNumber,
      // }).then(res => {
      //   console.log(res.data);
      //   if(res.data.success===true){
      //     this.$router.replace({name: 'index'});
      //   }
      // }).catch(reason => {
      //   console.log(reason);
      // }).finally(() => {
      //   console.log("FINALLY");
      // })

      this.dialogVisible = true;
    },
    copyNumber(){
        copyText(this.SerialNumber, undefined, (error, event) => {
          if (error) {
            alert('复制时发生错误!')
            console.log(error)
          } else {
            alert('证书序号已复制,接下来请前往下载页面进行证书下载。')
            console.log(event)
          }
        })
    }
}}
</script>

<style scoped>
.el-form-item {
  /*margin-bottom: 50px;*/
  margin-top: 30px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>