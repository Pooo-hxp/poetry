<template>
  <div>
    <h4>这是任务组件</h4>
    <button @click="test()">按钮</button>
    <table>
      <thead>
        <th>表头1</th>
        <th>表头2</th>
        <th>表头3</th>
        <th>表头4</th>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: "task",
  data() {},
  methods:{
    test(){
      alert()
      window.open('https://www.baidu.com');
    }
  }
};
</script>
<style scoped>
</style>