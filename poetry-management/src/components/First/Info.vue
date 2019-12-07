<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="800"
    >
    <!-- 为Table 指定最大高度 -->
    <el-table-column
      fixed
      prop="date"
      label="账号注册时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="昵称"
      width="140">
    </el-table-column>
    <el-table-column
      prop="province"
      label="地区"
      width="140">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="140">
    </el-table-column>
    <el-table-column
      prop="Say"
      label="个性签名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="id"
      label="注册id"
      width="140">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作（谨慎）"
      width="320">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          注销此账号
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '小土豆',
          province: '郑州',
          city: '管城区',
          Say: '我是一头长颈鹿，我爱上树',
          id: 200333
        }, {
          date: '2016-05-03',
          name: '小黄瓜',
          province: '郑州',
          city: '惠济区',
          Say: '我是一头大象，我爱吃草',
          id: 200334
        }, {
          date: '2016-05-04',
          name: '小番茄',
          province: '郑州',
          city: '上街区',
          Say: '我是一头牛，我爱晒太阳',
          id: 200335
        }, {
          date: '2016-05-07',
          name: '小茄子',
          province: '郑州',
          city: '金水区',
          Say: '我是一头猪，我爱遛弯',
          id: 200336
        }, {
          date: '2016-05-08',
          name: '小西瓜',
          province: '郑州',
          city: '中原区',
          Say: '我是一只鸡，我爱打鸣',
          id: 200337
        }, {
          date: '2016-05-08',
          name: '小豆角',
          province: '郑州',
          city: '高新区',
          Say: '我是一个文化人，我爱念诗',
          id: 200338
        }, {
          date: '2016-05-09',
          name: '小可爱',
          province: '郑州',
          city: '产业区',
          Say: '我是一个皮球，我爱翻滚',
          id: 200339
        }]
      }
    }
  }
</script>