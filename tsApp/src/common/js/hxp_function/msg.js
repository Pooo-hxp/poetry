(function () {
    var vm = new Vue({
        el: '.app',
        data: {},
        methods: {
            axios_post: () => {
                /**这是留言功能 */
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
                        location.reload();
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
                            /**这里我思考了一下，还是调用了reverse方法
                             * 这样可以使得数据库中留言倒序排列
                             * 用户实时留言的时候能立刻看到自己的评论
                             */
                            this.list = newlist;
                            console.log('留言数据读取正常,以下为数据列表');
                            console.log(this.list);
                        })
                },
                methods: {
                    tt: function () {
                        alert();
                    }
                },
            }
        }
    })

})()