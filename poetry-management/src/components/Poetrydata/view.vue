<template>
  <div>
    <h4>{{msg}}</h4>
    <div id="ech" style="width: 100%;height:400px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:'不同类型诗词访问数据表'
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function() {
      var myChart = this.$echarts.init(document.getElementById("ech"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["边塞诗", "叙事诗", "山水田园诗", "怀古诗(咏史诗)", "抒情诗"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "边塞诗",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "叙事诗",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "山水田园诗",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "怀古诗(咏史诗)",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "抒情诗",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>
<style scoped>
</style>