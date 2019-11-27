<template>
  <div id="app">
    <el-container>
      <el-header>
        后台管理系统
      </el-header>
      <el-container class="container">
        <el-aside width="200px">
          <tree></tree>
          </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import tree from "./components/tree";

export default {
  name: "App",
  components:{
    tree
  }
};
</script>

<style>
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.el-header,
.el-footer {
  background-color: #1d2b40;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #294265;
  color: #ffffff;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #3a3e55;
  text-align: center;
  line-height: 160px;
}
</style>
