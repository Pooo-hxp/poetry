<template>
  <div>
    <div class="app header">
      <div class="container msg-text">
        <!--
                contenteditable="true"获取div焦点且内容可编辑
                tabindex="0"获取div焦点不可编辑
        -->
        <div class="col-xs-9 col-md-9">
          <div contenteditable="true" class="msg-textinfo" id="msg-textinfo">说点啥吧，秋梨膏</div>
        </div>
        <div class="col-xs-3 col-md-3 msg-btn">
          <button class="form-control btn-success" @click="axios_post()">发表</button>
        </div>
      </div>
      <div class="container msg-filter">全部评论</div>
       <msginfo></msginfo>
    </div>
   
  </div>
</template>
<script>
import msginfo from './msginfo'
export default {
    name:'msgCompon',//抛出当前组件并命名
    components:{
      msginfo
    },
    data(){
        return{
            msginfo:'留言组件'
        }
    }
};
</script>
<style scoped>
.header{
    height: 20rem;
}
.msg-text{
    height: 6rem;
    border-bottom:1px solid rgba(148, 142, 148,0.3);
}
.msg-text div{
    overflow: hidden;
    height: 5rem;
}
.msg-btn,.msg-textinfo{
    padding: 0.7rem;
    /* 使文本内容和发表按钮居中，使其更美观 */
}
/* 留言过滤 */
.msg-filter{
    
    height: 3rem;
    border-bottom:1px solid rgba(148, 142, 148,0.3);
}
</style>