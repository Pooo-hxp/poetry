<template>
  <div>
    <h4>用户年龄分布数据饼状图</h4>
    <div id="ech" style="width: 100%;height:600px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function() {
      var myChart = this.$echarts.init(document.getElementById("ech"));

      setTimeout(function() {
        var option = {
          legend: {},
          tooltip: {
            trigger: "axis",
            showContent: false
          },
          dataset: {
            source: [
              ["product", "2019.11", "2019.12", "2019.01", "2019.02", "2019.03", "2020.04"],
              ["70 后", 31, 20, 37, 33, 43, 58],
              ["80 后", 26, 32, 33, 43, 63, 45],
              ["90 后", 24, 37, 43, 46, 35, 62],
              ["00 后", 35, 37, 49, 52, 43, 39]
            ]
          },
          xAxis: { type: "category" },
          yAxis: { gridIndex: 0 },
          grid: { top: "55%" },
          series: [
            { type: "line", smooth: true, seriesLayoutBy: "row" },
            { type: "line", smooth: true, seriesLayoutBy: "row" },
            { type: "line", smooth: true, seriesLayoutBy: "row" },
            { type: "line", smooth: true, seriesLayoutBy: "row" },
            {
              type: "pie",
              id: "pie",
              radius: "30%",
              center: ["50%", "25%"],
              label: {
                formatter: "{b}: {@2019.08} ({d}%)"
              },
              encode: {
                itemName: "product",
                value: "2019.08",
                tooltip: "2019.08"
              }
            }
          ]
        };

        myChart.on("updateAxisPointer", function(event) {
          var xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: "pie",
                label: {
                  formatter: "{b}: {@[" + dimension + "]} ({d}%)"
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        });

        myChart.setOption(option);
      });
    }
  }
};
</script>
<style scoped>
</style>