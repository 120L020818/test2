<template>
  <el-dialog
      v-model="dialogVisible"
      title="您的个人信息显示如下:"
      width="30%"
      style="font-size: 20px;line-height:50px;text-align:center">

    <el-card class="box-card" style="line-height: 50px">
<!--      <el-space direction="vertical" size="20" spacer="|">-->
        <el-row style="font-size: 20px">
          <el-col :span="12" style="text-align: left;">用户名:</el-col>
          <el-col :span="12" style="text-align: left;">{{ username }}</el-col>
        </el-row>

        <el-row style="font-size: 20px">
          <el-col :span="12" style="text-align: left;"> 性别:</el-col>
          <el-col :span="12" style="text-align: left;"> {{ sex === true ? "男" : "女" }}</el-col>
        </el-row>

        <el-row style="font-size: 20px">
          <el-col :span="12" style="text-align: left;">证书可用:</el-col>
          <el-col :span="12" style="text-align: left;"> {{ cerHave === true ? "是" : "否" }}</el-col>

        </el-row>
        <el-row style="font-size: 20px">
          <el-col :span="12" style="text-align: left;">注册日期:</el-col>
          <el-col :span="12" style="text-align: left;"> {{ regDay }}</el-col>

        </el-row>
        <el-row style="font-size: 20px">
          <el-col :span="12" style="text-align: left;">生日:</el-col>
          <el-col :span="12" style="text-align: left;">{{ birthday }}</el-col>

        </el-row>
        <el-row style="font-size: 20px">
          <el-col :span="12" style="text-align: left;">手机号:</el-col>
          <el-col :span="12" style="text-align: left;"> {{ phone }}</el-col>

        </el-row>
        <el-row style="font-size: 20px">
          <el-col :span="12" style="text-align: left;">邮箱:</el-col>
          <el-col :span="12" style="text-align: left;">{{ email }}</el-col>

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
import axios from "axios";
import APIS from "@/modules/api";
import {useStore} from "@/store/index";

export default {
  name: "ChildCASelf",
  data: () => ({
    ID: "",
    dialogVisible: false,
    username: "",
    sex: true,
    birthday: "",
    phone: "",
    email: "",
    regDay: "",
    cerHave: true,
    store:useStore(),
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
    Check,
    // ElButtonGroup,
    ElCol,
    ElRow,
  },
  methods: {
    requestResult() {
      axios.post(APIS.self, {username:this.store.username}).then(res => {
        console.log(res.data);
        this.username = res.data.username;
        this.sex = res.data.sex;
        this.birthday = res.data.birthday;
        this.phone = res.data.phone;
        this.email = res.data.email;
        this.regDay = res.data.regDay;
        this.cerHave = res.data.cerHave;
        this.dialogVisible = true;
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
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

/*.item {*/
/*  margin-bottom: 18px;*/
/*}*/

.box-card {
  width: 480px;
}
</style>