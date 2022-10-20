<template>
  <el-dialog
      v-model="dialogVisible"
      title="您的申请已提交!"
      width="30%"
      style="font-size: 20px;line-height:50px;text-align:center">

    <el-card class="box-card" style="line-height: 50px">
      <!--      <el-space direction="vertical" size="20" spacer="|">-->
      <el-row style="font-size: 20px">
        <el-col :span="12" style="text-align: left;">用户名:</el-col>
        <el-col :span="12" style="text-align: left;">{{ username }}</el-col>
      </el-row>

      <el-row style="font-size: 20px">
        <el-col :span="12" style="text-align: left;">组织机构:</el-col>
        <el-col :span="12" style="text-align: left;">{{ authority }}</el-col>
      </el-row>

      <el-row style="font-size: 20px">
        <el-col :span="12" style="text-align: left;">工商注册号:</el-col>
        <el-col :span="12" style="text-align: left;"> {{ justiceID }}</el-col>

      </el-row>
      <el-row style="font-size: 20px">
        <el-col :span="12" style="text-align: left;">法人姓名:</el-col>
        <el-col :span="12" style="text-align: left;"> {{ username }}</el-col>

      </el-row>
      <el-row style="font-size: 20px">
        <el-col :span="12" style="text-align: left;">经办人姓名:</el-col>
        <el-col :span="12" style="text-align: left;">{{ admin }}</el-col>

      </el-row>
      <el-row style="font-size: 20px">
        <el-col :span="12" style="text-align: left;">经办人手机:</el-col>
        <el-col :span="12" style="text-align: left;">{{ adminphone }}</el-col>

      </el-row>
      <el-row style="font-size: 20px">
        <el-col :span="12" style="text-align: left;">申请年限:</el-col>
        <el-col :span="12" style="text-align: left;"> {{ years }}{{ years !== "" ? "年" : "" }}</el-col>

      </el-row>

      <!--      </el-space>-->
      <!--          <span>你的注册信息:</span>-->
      <!--          <el-button class="button" text>操作按钮</el-button>-->
      <!--      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>-->
    </el-card>
    <!--    <template #footer>-->
    <!--      <span class="dialog-footer">-->
    <!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
    <!--        <el-button type="primary" @click="dialogVisible = false"-->
    <!--        >确认</el-button>-->
    <!--      </span>-->
    <!--    </template>-->
  </el-dialog>


  <el-row>
    <el-col :span="6"></el-col>
    <el-col :span="10" style="text-align: center">
      <div style="background-color: rgba(233, 238, 243, 0.8) ;border-radius: 10px">

        <el-form
            label-position="right"
            label-width="200px"
            style="max-width: 500px;"
        >
      <span
          style='font-size: 40px;font-family:"Aa新华墨竹体 (非商业使用)", serif;text-align:left'>请在此处申请证书:</span>
          <el-form-item label="组织机构" margin-top=10px>
            <el-input v-model="authority"/>
          </el-form-item>
          <el-form-item label="工商注册号">
            <el-input v-model="justiceID"/>
          </el-form-item>
          <el-form-item label="法人姓名">
            <el-input v-model="username"/>
          </el-form-item>
          <el-form-item label="经办人姓名">
            <el-input v-model="admin"/>
          </el-form-item>
          <el-form-item label="经办人电话">
            <el-input v-model="adminphone"/>
          </el-form-item>

          <el-form-item label="公钥">
            <el-input v-model="publickey"/>
          </el-form-item>
          <el-form-item label="申请年限">
            <el-select v-model="years" placeholder="请选择您的申请年限">
              <el-option label="一年" value="1"/>
              <el-option label="两年" value="2"/>
              <el-option label="三年" value="3"/>
            </el-select>
          </el-form-item>
        </el-form>

        <el-row>

          <el-col :span="15" style="text-align: center">
            <el-button-group>
              <el-button type="success" @click="dlGenerator">
                <el-icon>
                  <Download/>
                </el-icon>
                点击下载密钥生成程序
              </el-button>
              <el-button type="primary" @click="dlProtector">
                点击下载密钥保护程序
                <el-icon>
                  <Download/>
                </el-icon>
              </el-button>
            </el-button-group>
          </el-col>

          <el-col :span="9" style="text-align: center">
            <el-button plain type="primary" @click="onClick">
              点击提交申请
              <el-icon>
                <Upload/>
              </el-icon>
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {ArrowLeft, ArrowRight, Download, Check, Upload} from "@element-plus/icons-vue"
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElButtonGroup, ElCol, ElRow} from "element-plus"
import axios from "axios";
import APIS from "@/modules/api";
import {useStore} from "@/store/index";


export default {
  name: "ChildCAApply",
  data: () => ({
    username: "",
    authority: "",
    justiceID: "",
    admin: "",
    adminphone: "",
    years: "",
    publickey: "",
    dialogVisible: false,
    store: useStore(),
  }),
  components: {
    ElForm,
    ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElButtonGroup, ElCol, ElRow,
    Upload,
    Download,
    // ArrowLeft, ArrowRight
  },
  methods: {
    onClick() {
      axios.post(APIS.apply, {
        username:this.username,
        authority:this.authority,
        justiceID:this.justiceID,
        admin:this.admin,
        adminphone:this.adminphone,
        years:this.years,
        publickey:this.publickey,
      }).then(res => {
        this.dialogVisible = true;
        console.log(res.data);
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
    },
    dlGenerator() {
      axios.post(APIS.dlgen, {
        username: this.store.username,
      }, {responseType: 'blob'},).then(res => {
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = window.URL.createObjectURL(new Blob([res.data]))
        a.setAttribute('download', 'generate.exe') // 设置文件名
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        // this.dialogVisible = true;
        console.log(res.data);
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
    },
    dlProtector() {
      axios.post(APIS.dlpro, {
        username: this.store.username,
      }, {responseType: 'blob'},).then(res => {
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = window.URL.createObjectURL(new Blob([res.data]))
        a.setAttribute('download', 'protect.exe') // 设置文件名
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        // this.dialogVisible = true;
        console.log(res.data);
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
    }
  }
}
</script>

<style scoped>
.el-form-item {
  /*margin-bottom: 50px;*/
  margin-top: 30px;
}
</style>