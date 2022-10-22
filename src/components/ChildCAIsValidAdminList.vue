<template>
  <el-dialog
      v-model="dialogVisible"
      title="恭喜你,你的证书是有效的!"
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
    <el-col :span="4">
    </el-col>

    <el-col :span="14" style="text-align: center">
      <div style="background-color: rgba(233, 238, 243, 0.8) ;border-radius: 10px">

        <el-table :data="tableData" stripe style="width: 100%;border-radius: 10px">
          <el-table-column prop="authority" label="组织机构"/>
          <el-table-column prop="ID" label="工商号"/>
          <el-table-column prop="username" label="法人姓名"/>
          <el-table-column prop="chargename" label="经办人姓名"/>
          <el-table-column prop="chargephone" label="经办人电话"/>
          <el-table-column prop="expiretime" label="失效时间"/>
        </el-table>

      </div>
    </el-col>
    <el-col :span="4">
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

export default {
  name: "ChildCAIsValidAdminList",
  data: () => ({
    ID: "",
    dialogVisible: false,
    SerialNumber: "23333333",
    tableData: [],
  }),
  components: {
    // ElSpace,
    // ElCard,
    ElDialog,
    // ElForm,
    // ElFormItem,
    // ElInput,
    // ElSelect,
    // ElOption,
    ElButton,
    // Check,
    // Search,
    // ElButtonGroup,
    ElCol,
    ElRow,
  },
  mounted() {
    axios.post(APIS.isvalidlistadmin, {}).then(res => {
      this.tableData = res.data.data
    }).catch(reason => {
      console.log(reason);
    }).finally(() => {
      console.log("FINALLY");
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>