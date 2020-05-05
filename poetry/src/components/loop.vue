<template>
  <div class="container">
    <!-- 静态资源：顶部轮播 与动态消息-->
    <div class="row">
      <div
        class="carousel slide"
        id="carousel-example-generic"
        data-ride="carousel"
        data-interval="1500"
        background='red'
      >
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img src="../assets/images/menu/timg1.jpg" alt />
          </div>
          <div class="item">
            <img src="../assets/images/menu/timg4.jpg" alt />
          </div>
          <div class="item">
            <img src="../assets/images/menu/timg5.jpg" alt />
          </div>
        </div>
        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
          left='5rem'
        >
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
      <div
        class="progress-bar progress-bar-warning"
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 100%;"
      >
        <marquee onmouseout="this.start()" onmouseover="this.stop()">
          【最新公告】：亲亲注意哟，在‘宋词’选项卡下搜李白搜不到信息哟！
          毕竟跨越几百年了呢~因篇幅问题，暂只能展示七条呢，搜索也可按作品名，不要漏字错字哟，搜不到的哟
          无聊？刷新一下，天气卡片上有随机寄语哟！
        </marquee>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loop" //组件命名并暴露出去
};
</script>
<style scoped>
*{
}
.carousel-control{
    width: 12%;
}
.carousel-inner {
    position: relative;
    left: 30px;
  width: 32rem;
  height: 23rem;
  background: green;
}
.item {
  width: 32rem;
  height: 28rem;
}
.item img{
    width: 35rem;
    height: 29rem;
}
</style>