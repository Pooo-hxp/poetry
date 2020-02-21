<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <userView></userView>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <configView></configView>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <roleView></roleView>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
      <taskView></taskView>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import role from "./child/role.vue";
import user from "./child/user.vue";
import task from "./child/task.vue";
import config from "./child/config.vue";
export default {
  components: {
    roleView: role,
    userView: user,
    taskView: task,
    configView: config,
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