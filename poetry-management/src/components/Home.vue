<template>
  <div class="hello">
    <h3 @click="test">{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Poetry-management'
    }
  },
  methods:{
    test:function(){
      console.log(this);
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
</style>
