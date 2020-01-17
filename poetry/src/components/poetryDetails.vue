<template>
    <div>
       <h3>{{details}}</h3> 
    </div>
</template>
<script>
export default {
    name:'poetryDetails',
    data() {
        return {
            details:''
        }
    },
    methods:{
    },
    mounted() {
        /**
         * 获取所点击的诗词详情
        */
      this.details=JSON.parse(sessionStorage.getItem('par'));
    },
}
</script>
<style  scoped>

</style>