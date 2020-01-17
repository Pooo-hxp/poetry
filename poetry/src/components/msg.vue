<template>
  <div>
    <div class="app header">
      <div class="container msg-text">
        <!--
                contenteditable="true"获取div焦点且内容可编辑
                tabindex="0"获取div焦点不可编辑
        -->
        <div class="col-xs-9 col-md-9">
          <div contenteditable="true" class="msg-textinfo" id="msg-textinfo">说点啥吧....</div>
        </div>
        <div class="col-xs-3 col-md-3 msg-btn">
          <button class="form-control btn-success" @click="axios_insert_msg()">发表</button>
        </div>
      </div>
      <div class="container msg-filter">全部评论</div>
      <msginfo></msginfo>
    </div>
  </div>
</template>
<script>
import msginfo from "./msginfo";
export default {
  name: "msgCompon", //抛出当前组件并命名
  components: {
    msginfo
  },
  data() {
    return {
      msginfo: "留言组件",
    };
  },
  methods: {
    axios_insert_msg: function() {
      var formdata = new FormData();
      let dt = new Date();
      let msgTime=`${dt.getFullYear()}.${dt.getMonth()+1}.${dt.getDate()}`;
      let msg = document.getElementById("msg-textinfo").innerHTML;
      const UserName=JSON.parse(localStorage.getItem('UserName'));
      let _this=this;
      UserName?(function(){
        /**
         * 一、备份this指向，防止在IIFE中找不到指向（寻找axios时使用）
         * 二、此表达式意思为：
         *   1、检测当前用户是否登陆
         *    登陆则调用函数发送请求，留言得以写入数据库
         *    未登录则弹窗提示用户未登录，拒绝写入数据库
         */
        formdata.append('UserName',UserName);
        formdata.append('msg',msg);
        formdata.append('msgTime',msgTime);
        _this.$axios
        .post('https://www.xipengheng.cn/AAA/insertMsg.php', formdata)
        .then(res=>{
          console.log('留言数据写入正常');
          location.reload();
        })
      }()):alert('当前检测到您未登陆');
    }
  }
};
</script>
<style scoped>
.header {
  height: 20rem;
}
.msg-text {
  height: 6rem;
  border-bottom: 1px solid rgba(148, 142, 148, 0.3);
}
.msg-text div {
  overflow: hidden;
  height: 5rem;
}
.msg-btn,
.msg-textinfo {
  padding: 0.7rem;
  /* 使文本内容和发表按钮居中，使其更美观 */
}
/* 留言过滤 */
.msg-filter {
  height: 3rem;
  border-bottom: 1px solid rgba(148, 142, 148, 0.3);
}
</style>