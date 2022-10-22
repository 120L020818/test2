<template>

  <el-dialog
      v-model="dialogVisible"
      title="恭喜你,证书已下载成功!"
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
      <div style="background-color: rgba(233, 238, 243, 0.8) ;border-radius: 10px" >
        <el-form
            label-position="right"
            label-width="200px"
            style="max-width: 500px;">
          <span
              style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>请在此处输入证书序号,</span><br>
          <span style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>以进行证书下载:</span>

          <el-form-item label="证书序号">
            <el-input v-model=" SerialNumber"/>
          </el-form-item>
        </el-form>
        <br>

        <el-row >
          <el-col :span="24" style="text-align: center">
            <el-button plain type="primary" @click="downloadCA">
              点击下载证书
              <el-icon >
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
import {ElMessageBox,ElDialog,ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElButtonGroup, ElCol, ElRow} from "element-plus"
import axios from "axios";
import APIS from "@/modules/api";
export default {
  name: "ChildCADownload",
  components: {
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    // ElSelect,
    // ElOption,
    ElButton,
    Download,
    // Check,
    // ElButtonGroup,
    ElCol,
    ElRow,
  },
  data:()=>({
    dialogVisible:false,
    SerialNumber:"",
  }),
  methods:{
    downloadCA(){
      axios.post(APIS.download, {
        SerialNumber:this. SerialNumber,
      }, {responseType: 'blob'},).then(res => {
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = window.URL.createObjectURL(new Blob([res.data]))
        a.setAttribute('download', this.SerialNumber+'.json') // 设置文件名
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        // this.dialogVisible = true;
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })

      this.dialogVisible=true;
    },
  }
}

</script>

<style scoped>

</style>