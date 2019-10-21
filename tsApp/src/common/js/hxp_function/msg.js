(function(){
    var vm=new Vue({
        el:'.app',
        data:{},
        methods:{
            
        },
        components:{
            hxpmsg:{
                template:'#msg',
                data:function() {
                    return {
                        list:null
                    }
                },
                mounted() {
                    axios
                    .get('https://www.xipengheng.cn/AAA/test.php')
                    .then(res=>{
                        var newlist=res.data.message;
                        this.list=newlist;
                        console.log(this.list);
                    })
                },
                methods: {
                    tt:function(){
                        alert();
                    }
                },
            }
        }
    })
    
})()