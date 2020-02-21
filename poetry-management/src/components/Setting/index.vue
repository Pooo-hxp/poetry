<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <userView></userView>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <roleView></roleView>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
import role from "./child/role.vue";
import user from "./child/user.vue";
// import user from "./child/user.vue";
// import user from "./child/user.vue";
export default {
  components: {
    roleView: role,
    userView: user,
  },
  data() {
    return {
      activeName: "second",
      flag: "index"
    };
  },
  methods: {},
  mounted: {}
};
</script>
<style  scoped>
</style>