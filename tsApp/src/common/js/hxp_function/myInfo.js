(function(){
/**
 * 这里的逻辑大概是：
 * 1、判定是否点击了设置按钮
 * 1.1 点击了则更换页面组件,
 * 1.2 axio获取当前用的所有信息，
 * 1.3 生成可编辑表格供用户编写
 * 1.4 用户编写完毕进行提交
 * 1.5 信息检查，符合规范后向数据库发送
 * 1.6 返回个人信息页面（重新渲染数据）
 */
    // if( confirm('要跳转吗？')){
    //     alert("跳转了");
    // }else{
    // }
    var vm=new Vue({
        el:'#app',
        data:{
            table:false,/*弹窗是否显示*/
            updateInfo:false,/*修改个人信息*/
            login:true,/*注册、登录*/
            UserName:null,
            PassWord:null,
            UserGender:null,
            UserSayHi:null,
        },
        methods:{
            loginfun:function(){
                this.login=true;
                this.updateInfo=false;
            }, 
            login_axios:function(){
                var formdata=new FormData();
                formdata.append('UserName',this.UserName);
                formdata.append('PassWord',this.PassWord);
                axios
                .post('',formdata)
                .then(res=>{
                    console.log(res);
                })
            },
            updatefun:function(){
                this.updateInfo=true;
                this.login=false;
            },
            close:function(){
                this.table=false;
            },
            setting:function(){
                this.table=true;
                // var formdata=new FormData();
                // formdata.append('UserName','guofeng');
                // axios 
                // .post('https://www.xipengheng.cn/AAA/myInfo.php',formdata)
                // .then(res=>{
                //     this.UserName=res.data.message[0].UserName;
                //     this.UserGender=res.data.message[0].UserGender;
                //     this.UserSayHi=res.data.message[0].UserSayHi;
                // })
            }
        },
    })
})();