<template>
  <el-row>
    <el-col :span="6">
    </el-col>

    <el-col :span="10" style="text-align: center">
      <div style="background-color: rgba(233, 238, 243, 0.8) ;border-radius: 10px">

        <el-row>
          <el-col :span="24" style="text-align: center">
            <el-button plain type="primary" @click="requestResult">
              点击查看详细信息
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
export default {
  name: "ChildCASelf",
  data: () => ({
    ID: "",
    dialogVisible: false,
    SerialNumber: "23333333",
  }),
  components: {
    // ElSpace,
    // ElCard,
    // ElDialog,
    // ElForm,
    // ElFormItem,
    // ElInput,
    // ElSelect,
    // ElOption,
    ElButton,
    Check,
    // ElButtonGroup,
    ElCol,
    ElRow,
  },
  methods:{
    requestResult(){

    }
  }
}
</script>

<style scoped>

</style>