<template>
  <div class="hxp-weather">
    <div class="hxp-weather-header">
      <!-- <img :src="weather_weatherimg" alt=""> -->
      <!--暂定-->
      <img src="../assets/images/icon/qing.png" alt />
      <a id="jinrishici-sentence">今日诗词....</a>
    </div>
    <div class="hxp-weather-footer">
      <div class="text-center hxp-weather-footer-left">
        <h2>17°C</h2>
        <em>2019.11.22</em>
      </div>
      <div class="hxp-weather-footer-right">
        <ol>
          <li>今天：星期三</li>
          <li>天气：晴天</li>
          <li>气温：14°C/22°C</li>
          <li>空气质量：优</li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'weather', //把当前组件命名并暴露出去
    data:function(){
        return{
          
        }
    }
}
</script>
<style  scoped>
.hxp-weather {
    margin: 1rem auto;
    color: #394568;
    background: linear-gradient(to bottom, #d1d8eb 40%, #222 100%);
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    width: 80%;
    height: 15rem;
    align-items: flex-end;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    font-family: "Open Sans", "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}

.hxp-weather-header {
    width: 100%;
    height: 50%;
}

.hxp-weather-footer {
    width: 100%;
    height: 50%;
    background: whitesmoke;
}

.hxp-weather-footer-left,
.hxp-weather-footer-right {
    width: 50%;
    height: 5rem;
    float: left;
}
</style>