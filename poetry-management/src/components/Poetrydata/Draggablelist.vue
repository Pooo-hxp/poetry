<template>
  <el-popover placement="bottom-end" width="200" trigger="click" title="表头设置">
    <draggable>
      <tr v-for="(item,id) in tablelist" :key="id">
        <td width="50">
          <i class="el-icon-s-operation"></i>
        </td>
        <td width="80">{{item|conver}}</td>
        <td width="60">
          <i class="el-icon-check"></i>
        </td>
      </tr>
    </draggable>
    <el-button slot="reference">
      设置
      <i class="el-icon-setting"></i>
    </el-button>
  </el-popover>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "Draggablelist",
  components: {
    draggable
  },
  data: function() {
    return {
      tablelist: [
        "data", //日期
        "title", //题目
        "content", //内容
        "author" //作者
      ]
    };
  },
  filters: {
    conver: name => {
      if (name == "data") {
        return "日期";
      }
      if (name == "title") {
        return "题目";
      }
      if (name == "content") {
        return "内容";
      }
      if (name == "author") {
        return "作者";
      }
    }
  }
};
</script>
<style scoped>
</style>>