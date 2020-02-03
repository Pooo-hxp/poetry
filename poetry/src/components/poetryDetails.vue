<template>
  <div>
    <div class="container">
      <div class="col-md-3 hxp-li-">
        <ul class="text-left hxp-li-margin">
          <li>
                <img src="../assets/images/photo/foo.jpg" alt="图片地址出错.." width="100px" height="100px" />
          </li>
          <li>
            <!-- 图标替换 -->
              <img src="../assets/images/icon/内容.png"  style="width:60px;height:60px" />
            诗词内容
          </li>
          <li>
            <!-- <svg class="icon" style="font-size: 25px;">
              <use xlink:href="#icon-rili" />
            </svg> -->
              <img src="../assets/images/icon/题型解析.png" style="width:60px;height:60px"  />
            作品解析
          </li>
          <li>
            <a href="mailto:hengxipeng@163.com">联系我</a>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <h2 class="hxp-fontfamily">
          <!-- <svg class="icon" style="font-size: 30px;">
            <use xlink:href="#icon-BOOKMARKINGSERVICES" />
          </svg> -->
          诗词内容
        </h2>
        <!-- /*lead*/ -->
        <div class="container-fluid hxp-size-">
          <div class="app1">
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <h2 class="hxp-fontfamily">
          诗词解析
        </h2>
        <div class="container-fluid hxp-size-">
          <div class="app2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "poetryDetails",
  data() {
    return {
      details: ""
    };
  },
  methods: {},
  mounted() {
    /**
     * 获取所点击的诗词详情
     */
    this.details = JSON.parse(sessionStorage.getItem("par"));
    console.log(this.details);
  }
};
</script>
<style  scoped>
* {
    padding: 0px;
    margin: 0px;
    font-size: 16px;
}

.header{
    padding: 1em;
    border-bottom: 2px solid rgba(243, 237, 237,0.5);
}

ul li{
    list-style: none;
    border-bottom: 1px solid rgba(233, 175, 175, 0.8);
 }

.hxp-li-margin li{
    line-height:3em;
    width: 10em;
}
.hxp-fontfamily{
    font-family: STXingkai;
}
.hxp-size-{
    height: 20em;
    overflow-x: hidden;
}
</style>