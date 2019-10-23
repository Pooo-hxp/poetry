(function () {
    var vm = new Vue({
        el: '.app',
        data: {},
        methods: {
            axios_post: () => { /**这是留言功能 */
                var params = new FormData();
                let dt = new Date();
                let Y = dt.getFullYear();
                let M = dt.getMonth() + 1;
                let D = dt.getDate();
                let msg = document.getElementById("msg-textinfo").innerHTML;
                params.append('UserName', 'xipengheng');
                params.append('msg', msg);
                params.append('msgTime',`${Y}.${M}.${D}`);
                axios
                    .post('https://www.xipengheng.cn/AAA/liuyan.php', params)
                    .then(res => {
                        console.log('留言数据写入正常');
                        location.reload();/**重载 */
                    })
            }
        },
        components: {
            hxpmsg: { /**获取所有用户留言数据 */
                template: '#msg',
                data: function () {
                    return {
                        list: null
                    }
                },
                mounted() {
                    axios
                        .get('https://www.xipengheng.cn/AAA/test.php')
                        .then(res => {
                            var newlist = res.data.message.reverse();
                            /**这里我后期优化一下，调用了reverse方法
                             * 使得数据库中留言倒序排列，最新留言在上方
                             * 用户实时留言的时候能立刻看到自己的评论
                             */
                            this.list = newlist;
                            console.log('留言数据读取正常,以下为数据列表');
                            console.log(this.list);
                        })
                },
                methods: {
                    like: function (id,like) {
                        console.log(`点击的当前评论的ID为${id}`);
                        console.log(`当前评论的点赞量是${like}`);
                        like=like*1+1;
                        console.log('转换后它的数据类型为'+typeof like);/**转为number型*/
                        console.log(`点击后当前评论点赞为${like}`);
                        console.log(`-------------------------`);
                        let newmsg=new FormData();
                        newmsg.append('MsgID',id);
                        newmsg.append('like',like);
                        axios
                        .post('https://www.xipengheng.cn/AAA/updataMsg.php',newmsg)
                        .then(res=>{
                            console.log(this);
                        })
                        /**
                         * 编程思想
                         * 1、点赞/踩icon身上绑定不同函数
                         * 2、把当前点击评论的ID与点赞/踩计数传入函数
                         * 3、即时更改点赞/踩计数写入数据库且不刷新
                         * ps:很僵硬，为了用户体验，点赞不刷新页面
                         * 所以当前显示计数为与数据库中相同的假数据
                         * 无伤大雅，下次进入时获取数据库数据更新
                         */
                    },
                    sick:function(id,sick){
                        console.log(`你点击的条评论的的ID是‘${id}’`);
                        console.log(`目前的点踩数是${sick}`);
                    }
                },
            }
        }
    })

})()