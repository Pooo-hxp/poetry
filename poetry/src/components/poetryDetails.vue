<template>
  <div>
    <div class="container">
      <div class="col-md-3 hxp-li-">
        <ul class="text-left hxp-li-margin">
          <li>
                <img src="../assets/images/photo/foo.jpg" alt="图片资源不存在" width="100px" height="100px" />
          </li>
          <li>
            <!-- <svg class="icon" style="font-size: 25px;">
              <use xlink:href="#icon-BOOKMARKINGSERVICES" />
            </svg>诗词内容 -->
            诗词内容
          </li>
          <li>
            <!-- <svg class="icon" style="font-size: 25px;">
              <use xlink:href="#icon-rili" />
            </svg> -->
            作品解析
          </li>
          <li>
            <!-- <svg class="icon" style="font-size: 25px;">
              <use xlink:href="#icon-xihuan" />
            </svg> -->
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
          <!-- <svg class="icon" style="font-size: 30px;">
            <use xlink:href="#icon-rili" />
          </svg> -->
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