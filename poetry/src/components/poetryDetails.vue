<template>
    <div>
       <h3>这是诗词详情的内容啊</h3> 
    </div>
</template>
<script>
export default {
    name:'poetryDetails',
    data() {
        return {
            
        }
    },
    methods:{
    },
    mounted() {
      let data=JSON.parse(sessionStorage.getItem('par'));
      console.log('传来的');
      console.log(data);
    },
}
</script>
<style  scoped>

</style>