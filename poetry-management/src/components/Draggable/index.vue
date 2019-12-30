<template>
  <div>
    <!--main-->
    <table >
      <draggable  :move="getdata" @update="datadragEnd">
      <tr v-for="(item,id) in tablelist2" :key="id">
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td>{{item.num}}</td>
      </tr>
      </draggable>
    </table>
    <div>提示：拖动可对栏目进行排序</div>
    <!--main end-->
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      tablelist1: [//'栏目名称','发布时间','公告数量'
        { title1:"栏目名称" },
        { title2:"发布时间" },
        { title3: "公告数量" }
      ],
      tablelist2: [
        { id: 1, name: "活动消息1", time: "2016", num: "100" },
        { id: 2, name: "公司消息2", time: "2017", num: "200" },
        { id: 3, name: "个人消息3", time: "2018", num: "300" },
      ]
    };
  },
  methods: {
    //拖动中与拖动结束
    getdata(evt) {
      console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
      console.log("拖动前的索引 :" + evt.oldIndex);
      console.log("拖动后的索引 :" + evt.newIndex);
      console.log(this.tablelist);
    }
  }
};
</script>
<style>
</style>