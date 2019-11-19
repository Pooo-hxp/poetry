(function () {
    var vm = new Vue({
        el: '.app',
        data: {
        },
        methods: {
            axios_post: () => { /**这是留言功能 */
                var params = new FormData();
                let dt = new Date();
                let Y = dt.getFullYear();
                let M = dt.getMonth() + 1;
                let D = dt.getDate();
                let msg = document.getElementById("msg-textinfo").innerHTML;
                const UserName = JSON.parse(localStorage.getItem('UserName'));
                /**获取当前登录的用户名 */
                params.append('UserName', UserName);
                params.append('msg', msg);
                params.append('msgTime', `${Y}.${M}.${D}`);
                axios
                    .post('https://www.xipengheng.cn/AAA/insertMsg.php', params)
                    .then(res => {
                        console.log('留言数据写入正常');
                        location.reload();/**重载页面 */
                    })
            },

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
                        .get('https://www.xipengheng.cn/AAA/selectMsg.php')
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
                    like: function (id, like, index) {
                        $("this>img").attr("src", "src/common/image/icon/赞(前).png");
                        console.log(`点击的当前评论的ID为${id}`);
                        like < 99 ? like = like * 1 + 1/* string->number */
                            : like = "99+";
                        let newmsg = new FormData();
                        newmsg.append('MsgID', id);
                        newmsg.append('like', like);
                        this._data.list[index].Like = like;
                        axios
                            .post('https://www.xipengheng.cn/AAA/updateMsg.php', newmsg)
                            .then(res => {
                                let flag = res.data.infoCode
                                flag == 1 ? console.log('点赞计数写入数据库成功')
                                    : (flag == 3 ? console.log('数据库连接失败，请检查') : console.log('预期外错误'));
                                console.log(`-------------------------`);
                            })
                        /**
                         * 编程思想
                         * 1、点赞/踩icon身上绑定不同函数
                         * 2、把当前点击评论的ID与点赞/踩计数传入函数
                         * 3、立即更改点赞/踩计数写入数据库且不刷新
                         * ps:很僵硬，为了提升用户体验，避免点赞屏闪
                         * 所以当前显示的计数为与数据库中相同的假数据
                         * 无伤大雅，下次进入时获取数据库数据更新
                         */
                    },
                    sick: function (id, sick, index) {
                        console.log(`你点击的条评论的的ID是${id}`);
                        sick < 99 ? sick = sick * 1 + 1
                            : sick = '99+';
                        let newmsg = new FormData();
                        newmsg.append('MsgID', id);
                        newmsg.append('sick', sick);
                        this._data.list[index].Sick = sick;
                        axios
                            .post('https://www.xipengheng.cn/AAA/updateMsg.php', newmsg)
                            .then(res => {
                                let flag = res.data.infoCode
                                flag == 2 ? console.log('踩踩计数写入数据库成功')
                                    : (flag == 3 ? console.log('数据库连接失败，请检查') : console.log('预期外错误'))
                                console.log(`-------------------------`);
                            })
                    }
                },
            }
        }
    })
})()