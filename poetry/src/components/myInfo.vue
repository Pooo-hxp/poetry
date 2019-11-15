<template>
  <div>
    <div class="app header">
      <div class="container msg-text">
        <!--
                contenteditable="true"获取div焦点且内容可编辑
                tabindex="0"获取div焦点不可编辑
        -->
        <div class="col-xs-9 col-md-9">
          <div contenteditable="true" class="msg-textinfo" id="msg-textinfo">我 是 个人信息</div>
        </div>
        <div class="col-xs-3 col-md-3 msg-btn">
          <button class="form-control btn-success" @click="axios_post()">发表</button>
        </div>
      </div>
      <div class="container msg-filter">全部评论</div>
    </div>
  </div>
</template>
<script>
export default {
    name:'msgCompon',//把当前组件抛出并命名
    data(){
        return{
        }
    }
};
</script>
<style scoped>
</style>