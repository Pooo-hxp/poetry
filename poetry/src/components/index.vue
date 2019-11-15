<template>
  <div class="hi">
    <loop></loop>
    <!--轮播图组件 -->
    <poetryList></poetryList>
    <!-- 诗词列表组件 -->
    <weather></weather>
    <!-- 天气组件-->
    <div>
      <!-- 彩蛋  -->
      <div>哈哈哈，恭喜你喜提彩蛋</div>
      <div>然而，没什么奖励</div>
      <div>嘿嘿嘿....</div>
    </div>
  </div>
</template>

<script>
import weather from "./weather";
import poetryList from "./poetryList"
import loop from "./loop";
export default {
  name: "index",
  components: {
    weather,
    poetryList,
    loop
  },
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
