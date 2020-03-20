<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "@/components/Index";
export default {
  name: "App",
  components: {
    Index
  }
};
</script>

<style>
html,
body,
  #app {
    width: 100%;
    height: 100%;
  }
  * {
    padding: 0;
    margin: 0;
  }
</style>
