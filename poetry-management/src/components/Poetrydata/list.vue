<template>
  <div>
    <template>
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="data"
      label="日期"
      width="140"
    >
    {{time|filtertime}}
    </el-table-column>
    <el-table-column
      prop="title"
      label="作品名"
      width="210">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容"
      >
    </el-table-column>
    <el-table-column
      prop="author"
       label="作者"
       width="100"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="kind"
      label="标签" 
      width="100"
      :filters="[
      { text: '七言律诗', value: '七言律诗'},
      { text: '五言律诗', value: '五言律诗' },
      {text:'五言古诗',value:'五言古诗'},
      {text:'七言古诗',value:'七言古诗'}
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.kind === '七言律诗' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.kind}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>
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
      Tangshi_key: "杜甫",
      tableData: null,
      time:new Date()
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
      formatter(row, column) {
        return row.author;
      },
      filterTag(value, row) {
        return row.kind === value;
      },
    },
  filters: {
    filtertime: time => {
      let dt = new Date(time);
      let Y = dt.getFullYear();
      let M = dt.getMonth() + 1;
      let D = dt.getDate();
      return `${Y}-${M}-${D}`;
    }
  }
  }
</script>