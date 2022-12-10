<template>
  <div class="common-layout">
    <el-container>
      <el-header style="text-align: right; font-size: 30px" >
        <el-row>
          <el-col :span="3" style="text-align: left">
            <el-radio-group v-model="isCollapse">
              <el-radio-button :label="true" size="small">collapse</el-radio-button>
              <el-radio-button :label="false" size="small">expand</el-radio-button>
            </el-radio-group>
          </el-col>

          <el-col :span="1" style="text-align: left">
            <el-icon style="margin-top:10px">
              <Message/>
            </el-icon>
            <span></span>
          </el-col>
          <el-col :span="7" style="text-align: left" @click="onclick1">
            <span>天际CA管理系统</span>
          </el-col>

          <el-col :span="12">
            <div class="toolbar" style="text-align:right">
              <el-dropdown>
                <el-icon :size="30" color="white" style="margin-right: 10px;margin-top: 3px">
                  <Setting/>
                </el-icon>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="onclick7">个人账号</el-dropdown-item>
                    <el-dropdown-item @click="onclick8">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>欢迎使用,{{ name }}!</span>
            </div>
          </el-col>
        </el-row>
      </el-header>


      <el-container>


        <el-aside width="200px">
          <!--          <el-row><el-col style="text-align:center"><el-icon :size="50"><Star/></el-icon><h2 class="mb-2">功能列表</h2></el-col></el-row>-->

          <el-menu
              class="el-menu--vertical"
              :collapse="isCollapse"
              @open="handleOpen"
              @close="handleClose"
          >

            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Star/>
                </el-icon>
                <span>功能列表</span>
              </template>
              <el-menu-item-group>
                <!--                <template #title>Group 1</template>-->
                <el-menu-item index="1-1" @click="onclick2">
                  <el-icon>
                    <Switch/>
                  </el-icon>
                  <span>证书申请</span>
                </el-menu-item>
                <el-menu-item index="1-2" @click="onclick3">
                  <el-icon>
                    <Search/>
                  </el-icon>
                  <span>证书申请结果查询</span>
                </el-menu-item>
                <el-menu-item index="1-3" @click="onclick4">
                  <el-icon>
                    <Download/>
                  </el-icon>
                  <span>证书获取</span>
                </el-menu-item>
                <el-menu-item index="1-4" @click="onclick5">
                  <el-icon>
                    <CircleCheck/>
                  </el-icon>
                  <span>证书有效性查询</span>
                </el-menu-item>
                <el-menu-item index="1-5" @click="onclick6">
                  <el-icon>
                    <CircleClose/>
                  </el-icon>
                  <span>证书撤销</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>


        </el-aside>

        <el-main>
          <router-view>
          </router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>
<script>
import {useStore} from "@/store/index";
import {
  View,
  Setting,
  Message,
  Star,
  DArrowRight,
  Switch,
  Search,
  Download,
  CircleCheck,
  CircleClose
} from "@element-plus/icons-vue"
import {
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenuItem,
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElRadioGroup,
  ElRadioButton,
  ElSpace,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
} from "element-plus"
import axios from "axios";
import APIS from "@/modules/api";
// import {RouterLink} from "vue-router"
export default {
  name: "myIndex",
  data: () => ({
    store: useStore(),
    isCollapse: false,
    name:"",
  }),

  mounted() {
    this.$router.replace({name: 'child1'});
    this.name=this.store.username;
  },
  components: {
    ElDropdownItem,
    ElDropdownMenu,
    ElDropdown,
    ElHeader,
    ElIcon,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElRadioGroup,
    ElRadioButton,
    // ElSpace,
    ElCol,
    ElRow,
    // RouterLink,
    Setting,
    Message,
    Star,
    Switch,
    Search,
    Download,
    CircleCheck, CircleClose
    // View,
    // DArrowRight,

  },
  methods: {

    handleOpen() {

    },
    handleClose() {

    },
    onclick1() {
      //暂时没东西
      this.store.count++;
      console.log(this.store.username);
      this.$router.push({name: 'child1'});
    },
    onclick2() {
      this.$router.push({name: 'caApply'});
    }, onclick3() {
      this.$router.push({name: 'caRequest'});
    }, onclick4() {
      this.$router.push({name: 'caDownload'});
    }, onclick5() {
      this.$router.push({name: 'caIsValid'});
    }, onclick6() {
      this.$router.push({name: 'caDelete'});
    }, onclick7() {
      this.$router.push({name: 'caSelf'});
    }, onclick8() {
      this.$router.replace({name: 'login'});
      axios.post(APIS.logout, {
        username: this.store.username,
      }).then(res => {
      }).catch(reason => {
      }).finally(() => {
      })
      this.store.$reset();
    }
  }
}
</script>

<style>

.common-layout {
  width: 100%;
  height: 100vh;
  position: fixed;
  /*overflow-x: hidden;*/
  /*overflow-y: hidden;*/
  background-size: cover !important;
  background-image: url(../assets/bg2.png);

}

.el-container {
  height: 100%;
}

.el-header {
  background-color: rgba(33, 61, 91, 0.5);
  color: white;
  text-align: center;
  margin: 0 0 0 0;
}

.el-aside {
  background-color: rgba(233, 238, 239, 0.5);
  color: white;
  /*text-align: center;*/
  margin: 0 0 0 0;
}

.el-main {
  background-color: rgba(233, 238, 243, 0.5);
  color: #333;
  text-align: center;
  line-height: 160px;
}

/*active-text-color="#ffd04b"*/
/*background-color="#545c64"*/
/*class="el-menu-vertical-demo"*/
/*default-active="2"*/
/*text-color="#fff"*/
.el-menu {
  text-line-through-color: white;
}

.el-sub-menu {
  background-color: rgba(60, 120, 180, 0.6);
  text-align: center;
}

.el-radio {

}

.common-layout .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>