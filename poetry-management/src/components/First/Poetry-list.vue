<template>
  <div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column type="index" label="序列" width="100"></el-table-column>
      <el-table-column property="date" label="更新日期" width="150"></el-table-column>
      <el-table-column property="name" label="作者" width="150"></el-table-column>
      <el-table-column property="address" label="作品名"></el-table-column>
      <el-table-column fixed="right" label="操作" width="320">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >去除列表项</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: "Poetrylist",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "李白",
          address: "海上明月"
        },
        {
          date: "2016-05-04",
          name: "李白",
          address: "庐山谣寄卢侍御虚舟"
        },
        {
          date: "2016-05-01",
          name: "李白",
          address: "下终南山过斛斯山人宿置酒"
        },
        {
          date: "2016-05-03",
          name: "李白",
          address: "	子夜秋歌"
        }
      ],
      currentRow: null
    };
  },

  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>