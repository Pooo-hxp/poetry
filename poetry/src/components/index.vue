<template>
  <div class="hi" v-if="show">
    <loop></loop>
    <!--轮播图组件 -->
    <poetryList></poetryList>
    <!-- 诗词列表组件 -->
    <weather></weather>
    <!-- 天气组件-->
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
      show:true
    };
  }
};
</script>

<style scoped>
</style>
