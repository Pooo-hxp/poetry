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
            <!-- 图标替换 -->
            <img src="../assets/images/icon/内容.png" style="width:40px;height:40px" />
            诗词内容
          </li>
          <div class="col-md-4">
            <div class="row-fluid text-center">
              <h3 class="text-success">《{{details[0].title}}》</h3>
              <h4 class="text-right">--{{details[0].author}}</h4>
              <p v-for="item in poetryinfo">{{item}}</p>
            </div>
          </div>
          <li class="text-center">
            <!-- <svg class="icon" style="font-size: 25px;">
              <use xlink:href="#icon-rili" />
            </svg>-->
            <img src="../assets/images/icon/题型解析.png" style="width:40px;height:40px" />
            作品解析
          </li>
          <div class="col-md-5">{{details[0].intro}}</div>
          <li class="text-center">
            <img src="../assets/images/icon/路标.png" style="width:40px;height:40px" />
            <a href="mailto:hengxipeng@163.com">联系我</a>
          </li>
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
      poetryinfo:'',
      zhujie:'',
      yunyi:''
    };
  },
  methods: {},
  mounted() {
    /**
     * 获取所点击的诗词详情
     * 并分割诗词内容友好化展示
     */
    this.details = JSON.parse(sessionStorage.getItem("par"));
    /**诗词的内容 */
    let data=this.details[0].intro;
    console.log('全文');
    console.log(data);
    console.log('全文');
    this.poetryinfo=this.details[0].content.split('。');
    /**诗词的注解 */
    this.zhujie=data.substr(0,data.indexOf('【韵译】'));
    console.log('注解');
    console.log(this.zhujie);
    console.log('注解');
    /**韵译 */
    console.log('韵译');
    this.yunyi=data.substr(data.indexOf('【韵译】'),data.indexOf('【评析】'));
    console.log(this.yunyi);
    console.log('韵译');

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
  width: 10em;
}
.hxp-fontfamily {
  font-family: STXingkai;
}
.hxp-size- {
  /* height: 20em; */
  overflow-x: hidden;
}
</style>