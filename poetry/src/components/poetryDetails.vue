<template>
  <div>
    <div class="container">
      <div class="col-md-3 hxp-li-">
        <ul class="text-left hxp-li-margin">
          <img src="../assets/images/photo/foo.jpg" alt="图片地址出错.." width="100px" height="100px" />
          <li class="text-center">
            <!-- 图标替换 -->
            <img src="../assets/images/icon/喜欢.png" style="width:40px;height:40px" />
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
      poetryinfo:''
    };
  },
  methods: {},
  mounted() {
    /**
     * 获取所点击的诗词详情
     * 并分割诗词内容友好化展示
     */
    this.details = JSON.parse(sessionStorage.getItem("par"));
    this.poetryinfo=this.details[0].content.split('。')
    console.log( this.poetryinfo);
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