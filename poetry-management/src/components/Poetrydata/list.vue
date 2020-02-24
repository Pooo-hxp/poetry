<template>
  <div>
    <template>
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
        <el-table-column prop="data" label="日期" width="140">{{time|filtertime}}</el-table-column>
        <el-table-column prop="title" label="作品名" width="210"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column prop="author" label="作者" width="100" :formatter="formatter"></el-table-column>
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
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.kind === '七言律诗' ? 'primary' : 'success'"
              disable-transitions
            >{{scope.row.kind}}</el-tag>
          </template>
        </el-table-column>
        <!-- 在此进行表头组件设置 -->
        <el-table-column :render-header="renderHeader" width="120">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="cur_page"
        :page-sizes="[5, 7, 10]"
        :page-size="pageNum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      ></el-pagination>
    </template>
    <draggView></draggView>
  </div>
</template>
<script>
/**引入可拖动列表组件 */
import Draggablelist from "./Draggablelist";
export default {
  name: "Poetrylist",
  components: {
    draggView: Draggablelist
  },
  data() {
    return {
      header: "http://api.tianapi.com/txapi",
      key: "?key=0c7ebab2461621aeb2c34b3a82e4c702",
      url: null,
      Tangshi_key: "李白",
      tableData: null,
      time: new Date(),
      /**分页效果 */
      cur_page: 1, //默认展示第一页
      pageNum: 5, //默认每页显示5条数据
      totalCount: 10, //默认总条数为10条
      slot: ""
    };
  },
  mounted() {
    this.url = `${this.header}/poetry/${this.key}&word=${this.Tangshi_key}&num=10`;
    this.$axios.get(this.url).then(res => {
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
    handleSizeChange(val) {
      //操作每页显示几条
      this.pageNum = val;
      //  this.getPackData();//根据用户获取的每页显示页面数量显示页面
      console.log(`当前显示每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //操作当前页
      this.cur_page = val;
      // this.getPackData();//获取用户点击的当前页后刷新页面数据
      console.log(`当前在第 ${val}页`);
    },
/**
 * eleUI 的 Table 组件, 功能十分强大
 * 但是想要在里面渲染一些操作使用的按钮, 需要用到render 函数, 
 * 比如Poptip, 直接render 是不行的, 需要把这个Poptip 封装成一个组件
 */
    renderHeader() {
      return (
     <draggView></draggView>
      );
    }
  },
  /*时间按规范格式输出*/
  filters: {
    filtertime: time => {
      let dt = new Date(time);
      let Y = dt.getFullYear();
      let M = dt.getMonth() + 1;
      let D = dt.getDate();
      return `${Y}-${M}-${D}`;
    }
  }
};
</script>
<style scope>
/* #son {
  position: absolute;
  width: 200px;
  height: 80px;
  top: 20px;
  right: 50px;
  background: #000;
} */
</style>