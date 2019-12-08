<template>
  <div>
    <h4>新增用户年龄分布数据饼状图</h4>
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
              ["product", "2019.08", "2019.09", "2019.10", "2019.11", "2019.12", "2020.01"],
              ["70 后", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ["80 后", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
              ["90", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ["00 后", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
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