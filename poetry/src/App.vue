<template>
  <div id="app">
    <router-view></router-view>
    <!-- 首页组件 -->
    <div class="footer">
      <!-- 固定功能项于可视化页脚 -->
      <div class="row hxp-option">
        <div class="col-xs-4 col-md-4 text-center">
          <a>
            <router-link to="/">
              <ol>
                <li><img src="./assets/images/icon/首页.png" title="首页" /></li>
                <li>首页</li>
              </ol>
            </router-link>
          </a>
        </div>
        <div class="col-xs-4 col-md-4 text-center">
          <a>
            <router-link to="/msg">
              <ol>
                <li><img src="./assets/images/icon/日历.png" alt="讨论区" /></li>
                <li>讨论区</li>
              </ol>
            </router-link>
          </a>
        </div>
        <div class="col-xs-4 col-md-4 text-center">
          <a>
            <router-link to="/myInfo">
              <ol>
                <li><img src="./assets/images/icon/心.png" alt="我的信息" /></li>
                <li>我的信息</li>
              </ol>
            </router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import msgC from "./components/myInfo";
export default {
  name: "App",
  components: {
    // msgC
  }
};
</script>

<style>
body {
  background: url(./assets/images/photo/data_bg.jpg);
}

.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 5rem;
  border-top: 1px dotted rgba(144, 76, 76, 0.5);
  background: whitesmoke;
  z-index: 999;
}

.hxp-option img {
  width: 3rem;
  height: 3rem;
}
</style>
