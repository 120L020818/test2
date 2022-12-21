<template>
  <el-dialog
      v-model="dialogVisible"
      title="即将进行初始查询"
      width="30%"
      style="font-size: 20px;line-height:50px;text-align:center">
    <template #footer>
      <span class="dialog-footer">
<!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
        <el-button type="primary" @click="search"
        >确认</el-button>
      </span>
    </template>
  </el-dialog>


  <el-row>
    <el-col :span="4"></el-col>
    <el-col :span="14" style="text-align: center">
      <div style="background-color: rgba(233, 238, 243, 0.8) ;border-radius: 10px">
        <el-table :data="tableData" stripe
                  style="width: 100%;border-radius: 10px">
          <el-table-column prop="authority" label="组织机构"/>
          <el-table-column prop="ID" label="工商号"/>
          <el-table-column prop="username" label="法人姓名"/>
          <el-table-column prop="chargename" label="经办人姓名"/>
          <el-table-column prop="chargephone" label="经办人电话"/>
          <el-table-column prop="expiretime" label="失效时间"/>
          <el-table-column label="操作" style="text-align: right;">
            <template #default="scope">
              <el-button link type="primary" size="big" @click="handleClickPass(scope.$index)">通过</el-button>
              <el-button link type="primary" size="big" @click="handleClickRefuse(scope.$index)">拒绝</el-button>
            </template>
          </el-table-column>
        </el-table>


      </div>


    </el-col>

  </el-row>


</template>

<script>
import {
  ElTable,
  ElTableColumn,
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
  name: "ChildCAApplyAdmin",
  data: () => ({
    dialogVisible: false,
    store: useStore(),
    tableData: '',
  }),

  mounted() {
    const jsHttps=new JsHttps();
    const adminpublickey=this.store.publickey
    const myRequestData={
      "temp":233,
    }
    axios.post(APIS.applyadmin, jsHttps.encryptRequestData(myRequestData,adminpublickey)).then(res => {
      console.log(res)
      res=jsHttps.decryptResponseData(res.data);
      console.log(res.data.data)
      this.tableData = res.data.data
    }).catch(reason => {
      console.log(reason);
    }).finally(() => {
      console.log("FINALLY");
    })
  },
  components: {
    ElCol, ElRow, ElButton, ElTableColumn, ElTable
  },
  methods: {
    handleClickPass(index) {
      console.log(this.tableData[index]);
      const adminpublickey=this.store.publickey
      const jsHttps=new JsHttps();
      const myRequestData={
        "ID": this.tableData[index].ID,
      }
      axios.post(APIS.applypass, jsHttps.encryptRequestData(myRequestData,adminpublickey)
      ).then(res => {
        const jsHttps=new JsHttps();
        const adminpublickey=this.store.publickey
        const myRequestData={
          "temp":233,
        }
        axios.post(APIS.applyadmin, jsHttps.encryptRequestData(myRequestData,adminpublickey)).then(res => {
          console.log(res)
          res=jsHttps.decryptResponseData(res.data);
          console.log(res.data.data)
          this.tableData = res.data.data
        }).catch(reason => {
          console.log(reason);
        }).finally(() => {
          console.log("FINALLY");
        })
      }).catch(reason => {
        console.log(reason);
      }).finally(() => {
        console.log("FINALLY");
      })
    },
    handleClickRefuse(index) {
      const adminpublickey=this.store.publickey
      const jsHttps=new JsHttps();
      const myRequestData={
        "ID": this.tableData[index].ID,
      }
      console.log(this.tableData[index]);
      axios.post(APIS.applyrefuse, jsHttps.encryptRequestData(myRequestData,adminpublickey)
      ).then(res => {
        const jsHttps=new JsHttps();
        const adminpublickey=this.store.publickey
        const myRequestData={
          "temp":233,
        }
        axios.post(APIS.applyadmin, jsHttps.encryptRequestData(myRequestData,adminpublickey)).then(res => {
          console.log(res)
          res=jsHttps.decryptResponseData(res.data);
          console.log(res.data.data)
          this.tableData = res.data.data
        }).catch(reason => {
          console.log(reason);
        }).finally(() => {
          console.log("FINALLY");
        })
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