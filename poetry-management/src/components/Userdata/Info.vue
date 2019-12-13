<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="700"
    >
    <!-- 为Table 指定最大高度 -->
    <el-table-column
      fixed
      prop="createTime"
      label="账号注册时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="UserName"
      label="昵称"
      width="140">
    </el-table-column>
    <el-table-column
      prop="UserGender"
      label="性别"
      width="140">
    </el-table-column>
    <el-table-column
      prop="city"
      label="图片地址（预留）"
      width="140">
    </el-table-column>
    <el-table-column
      prop="UserSayHi"
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
        tableData:''
      }
    },
    mounted(){
      /**
       * 当此组件加载的时候
       * 从服务器获取用户基础数据
       */
      this.$axios
          .get('https://www.xipengheng.cn/AAA/selectUsers.php')
          .then(res=>{
            res.data.msg=='ok'?
            this.tableData=res.data.message.reverse()
            :console.log('数据库读取失败');
          })
    }
  }
</script>