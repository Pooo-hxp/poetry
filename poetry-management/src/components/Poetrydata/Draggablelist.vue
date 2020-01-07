<template>
  <div>
    <draggable>
        <tr v-for="(item,id) in tablelist" :key="id">
        <td width="50">标志</td>
        <td width="140">{{item|cover}}</td>
        <td width="30">对号</td>
      </tr>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "Draggablelist",
  components: {
    draggable
  },
  data:function(){
      return{
          tablelist:[
              'data',//日期
              'title',//题目
              'content',//内容
              'author'//作者
          ]
      }
  },
  filters:{
      cover:name=>{
          if(name=='data'){
              return '日期'
          }
            if(name=='title'){
              return '题目'
          }
            if(name=='content'){
              return '内容'
          }
            if(name=='author'){
              return '作者'
          }
      }
  }
};
</script>
<style scoped>
</style>>