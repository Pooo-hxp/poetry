<template>
  <div>
    <div class="container">
      <div class="col-md-3 hxp-li-">
        <ul class="text-left hxp-li-margin">
          <img src="../assets/images/photo/foo.jpg" alt="图片地址出错.." width="100px" height="100px" />
          <li class="text-center">
            <!-- 图标替换 -->
            <img src="../assets/images/icon/star.png" style="width:40px;height:40px" />
            收藏本诗
          </li>
          <li class="text-center">
            <img src="../assets/images/icon/路标.png" style="width:40px;height:40px" />
            <a href="mailto:hengxipeng@163.com">联系我</a>
          </li>
          <li class="text-center">
            <!-- 图标替换 -->
            <img src="../assets/images/icon/内容.png" style="width:40px;height:40px" />
            诗词内容
          </li>
          <div class="col-md-4">
            <div class="row-fluid text-center">
              <h3 class="text-success">《{{details[0].title}}》</h3>
              <h4 class="text-right">--{{details[0].author}}&#12288&#12288</h4>
              <p v-for="item in poetryinfo">{{item}}。</p>
            </div>
          </div>
          <li class="text-center">
            <img src="../assets/images/icon/题型解析.png" style="width:40px;height:40px" />
            作品解析
          </li>
          <div class="col-md-5" style="padding:10px">
            <div>
             <p class="btn-success hxp-title-">注解：</p> 
              <div v-for="(item,index) in note">{{item}}。</div>
            </div>
            <div>
             <p class="btn-danger hxp-title-">韵译：</p> 
            <p>&#12288{{translate}}</p>
            </div>
            <div>
            <p class="btn-info hxp-title-">评析</p>
            <p>&#12288{{comment}}</p></br></br></br>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "poetryDetails",
  data() {
    return {
      details: "",
      poetryinfo: "",
      note: "",
      translate: "",
      comment: ""
    };
  },
  methods: {},
  mounted() {
    /**
     * 获取所点击的诗词详情
     * 并分割诗词内容友好化展示
     * 利用split()方法解决解决数组中末尾总会多一个的bug
     */
    this.details = JSON.parse(sessionStorage.getItem("par"));
    /**诗词的内容 */
    let data = this.details[0].intro;
    console.log("全文");
    console.log(data);
    console.log("全文");
    /**主题诗词展示 */
    this.poetryinfo = this.details[0].content.split("。");
    this.poetryinfo.pop();
    /**截取字符串中对应字段 */
    this.note = data.substr(0, data.indexOf("【韵译】")).substr(5);
    /**截取后分割成数组 */
    this.note=this.note.split('。');
    this.note.pop();
    this.translate = data.substring(
      data.indexOf("【韵译】"),
      data.indexOf("【评析】")
    ).substr(5);
    this.comment = data.substr(data.indexOf("【评析】")).substr(5);
  }
};
</script>
<style  scoped>
* {
  padding: 0px;
  margin: 0px;
  font-size: 16px;
}

.header {
  padding: 1em;
  border-bottom: 2px solid rgba(243, 237, 237, 0.5);
}

ul li {
  list-style: none;
  border-bottom: 1px solid rgba(233, 175, 175, 0.8);
}

.hxp-li-margin li {
  line-height: 3em;
  width: 7em;
}
.hxp-fontfamily {
  font-family: STXingkai;
}
.hxp-title-{
  font-size: 21px;
  font-weight: 600;
  font-family: cursive;
}
</style>