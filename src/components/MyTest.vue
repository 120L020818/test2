<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
import {ElTable,ElUpload,ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElButtonGroup, ElCol, ElRow} from "element-plus"
import {Download, Upload,UploadFilled} from "@element-plus/icons-vue";
import {useStore} from "@/store";

export default {
  name: "MyTemp",
  data: () => ({
    store: useStore(),
    isCollapse: false,
    name:"",
    tableData: [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
  }),
  components: {
    ElTable,
    // ElUpload,
    // UploadFilled,
    // ArrowLeft, ArrowRight
  },
  methods: {
    // test(){
    //   this.$router.push({name:'test'})
    // }
  }
}
</script>

<style scoped>
@import "../styles/common.css";
</style>