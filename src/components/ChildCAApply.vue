<template>
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
        <el-input v-model="region"/>
      </el-form-item>
      <el-form-item label="工商注册号">
        <el-input v-model="type"/>
      </el-form-item>
      <el-form-item label="法人姓名">
        <el-input v-model="username"/>
      </el-form-item>
      <el-form-item label="经办人姓名">
        <el-input v-model="username"/>
      </el-form-item>
      <el-form-item label="经办人电话">
        <el-input v-model="username"/>
      </el-form-item>

      <el-form-item label="公钥">
        <el-input v-model="region"/>
      </el-form-item>
      <el-form-item label="申请年限">
        <el-select v-model="years" placeholder="请选择您的申请年限">
          <el-option label="一年" value="shanghai"/>
          <el-option label="两年" value="beijing"/>
          <el-option label="三年" value="shenzhen"/>
        </el-select>
      </el-form-item>
    </el-form>

    <el-row >

   <el-col :span="15" style="text-align: center">
    <el-button-group>
      <el-button type="success">
        <el-icon>
          <Download/>
        </el-icon>
        点击下载密钥生成程序
      </el-button>
      <el-button type="primary">
        点击下载密钥保护程序
        <el-icon>
          <Download/>
        </el-icon>
      </el-button>
    </el-button-group>
   </el-col>

      <el-col :span="9" style="text-align: center">
    <el-button plain type="primary">
      点击提交申请
      <el-icon >
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
import {ArrowLeft, ArrowRight,Download,Check,Upload} from "@element-plus/icons-vue"
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElButtonGroup,ElCol,ElRow} from "element-plus"


export default {
  name: "ChildCAApply",
  data: () => ({
    username: "",
    region: "",
    type: "",
    years: "",
  }),
  components: {
    ElForm,
    ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElButtonGroup,ElCol,ElRow,
    Upload,
    Download,
    // ArrowLeft, ArrowRight
  }
}
</script>

<style scoped>
.el-form-item {
  /*margin-bottom: 50px;*/
  margin-top: 30px;
}
</style>