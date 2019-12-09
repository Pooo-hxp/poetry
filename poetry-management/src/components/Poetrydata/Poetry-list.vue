<template>
  <div>
    <template>
  <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button>
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="data"
      label="日期"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="title"
      label="作品名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="kind"
      label="类型"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="kind"
      label="标签"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>
    <!-- <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%;height:750px"
    >
      <el-table-column type="index" label="序列" width="100"></el-table-column>
      <el-table-column property="title" label="作品名"></el-table-column>
      <el-table-column property="date" label="更新日期" width="150"></el-table-column>
      <el-table-column property="author" label="作者" width="150"></el-table-column>
      <el-table-column property="kind" label="类型"></el-table-column>
      <el-table-column fixed="right" label="操作" width="320">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >去除列表项</el-button>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
  export default {
 name: "Poetrylist",
  data() {
    return {
      header: "http://api.tianapi.com/txapi",
      key: "?key=0c7ebab2461621aeb2c34b3a82e4c702",
      url: null,
      Tangshi_key: "李商隐",
      tableData: null,
            // currentRow: null
    };
  },
  mounted() {
    this.url = `${this.header}/poetry/${this.key}&word=${this.Tangshi_key}&num=10`;
    this.$axios
    .get(this.url)
    .then(res => {
      this.tableData = res.data.newslist;
      console.log(this.tableData);
    });
  },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
    }
  }
</script>