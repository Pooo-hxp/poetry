<template>
  <div class="hello">
    <el-container style="height:100%">
      <el-aside style="width:251px">
        <el-menu router
          
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        ><!--default-active="1"   默认打开的目录序号 :default-openeds=[1]-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>后台首页</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/Draggable">我是导航1</el-menu-item>
              <el-menu-item index="1-2">我是导航2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="注册的账号信息">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

            <!-- 查询功能导航 -->
          <el-submenu index="2">
            <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span slot="title">用户数据分析平台</span>
            </template>
             <el-menu-item-group>
              <el-menu-item index="/Userdata/info">
              <i class="el-icon-search"></i>用户数据查询
              </el-menu-item>
              <el-menu-item index="/Userdata/view">
              <i class="el-icon-s-data"></i>用户年龄分布
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

            <!-- 应用管理导航 -->
        <el-submenu index="3">
            <template slot="title">
            <i class="el-icon-s-grid"></i>
            <span slot="title">诗词数据分析平台</span>
            </template>
             <el-menu-item-group>
                <el-menu-item index="/Poetrydata/list">
                <i class="el-icon-search"></i>热门诗词查询
                </el-menu-item>
                <el-menu-item index="/Poetrydata/view">
                <i class="el-icon-s-data"></i>诗词浏览分布
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <!-- disabled 加禁用 -->
            <!-- 信息功能 -->
          <el-menu-item index="4">
            <i class="el-icon-loading"></i>
            <span slot="title">当前登录账号信息</span>
          </el-menu-item>
            <!-- 设置功能 -->
          <el-menu-item index="/Setting" >
            <i class="el-icon-setting"></i>
            <span slot="title">后台账号设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <h2>{{msg}}</h2>
        </el-header>
        <el-main>
          <!-- 右侧内容,用于切换组件 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "唐诗系统后台管理系统"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  scoped>
.hello {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/**冲掉eleUI自带的边框线，解决上下不齐bug*/
.el-menu {
  border: none;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #53a8ff;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>