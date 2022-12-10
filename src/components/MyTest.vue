<template>
  <el-button type="success" @click="onClick"></el-button>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180"/>
    <el-table-column prop="name" label="Name" width="180"/>
    <el-table-column prop="address" label="Address"/>
  </el-table>
</template>

<script>
import {
  ElTable,
  ElUpload,
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
import {Download, Upload, UploadFilled} from "@element-plus/icons-vue";
import {useStore} from "@/store";
import JsHttps from "js-https";
import axios from "axios";
import APIS from "@/modules/api";
import CryptoJS from "crypto-js"
export default {
  name: "MyTest",
  data: () => ({
    store: useStore(),
    isCollapse: false,
    name: "",
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
    ElTable, ElButton,
  },
  methods: {
    onClick() {
      const adminpublickey = this.store.publickey
      const jsHttps = new JsHttps();
      const myRequestData = {
        test: "hello!!"
      }
      var encdata=jsHttps.encryptRequestData(myRequestData, adminpublickey)
      const mac={
        mac:CryptoJS.SHA1(encdata.bodyCipher).toString()
      }
      const resdata={
        data:encdata,
        resmac:mac
      }
      axios.post(APIS.bank,encdata
      ).then(res => {
        console.log(res);
        console.log(jsHttps.decryptResponseData(res.data));
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
</style>