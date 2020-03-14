    <!-- 留言区详情组件 -->
    <template id="msg">
     <div>
        <ol class="container msg-list">
            <li class="" v-for="(item,index) in list" :key="index">
                <div class="container hxp-msg-list">
                    <p class="text-left col-md-4">
                        <div class="hxp-msg-list-headpotato ">
                            <img src="../assets/images/photo/foo.jpg" alt="" srcset="">
                            <strong>{{item.UserName}}</strong><br>
                            <em>{{item.MsgTime}}</em>
                        </div>
                    <p>
                    <p class=" col-md-4" style="height: 4rem; overflow: auto;">
                        {{item.Msg}}
                    </p>
                    <p class="text-right col-md-4">
                        <div class="text-right hxp-msg-list-icon">
                            <a href="" @click.prevent='like(item.MsgID,item.Like,index)'>
                                <img src="../assets/images/icon/赞(前).png">（{{item.Like}}）</a>
                                
                            <!-- 
                                这里函数传入当前留言ID号，当前计数，序号
                                为的是写入数据库时能赞/踩计数到对应的评论上
                             -->
                            <a href="" @click.prevent='sick(item.MsgID,item.Sick,index)'>
                                <img src="../assets/images/icon/踩(后).png">（{{item.Sick}}）</a>
                        </div>
                </div>
            </li>  
        </ol>
           <div class="maskingimg" id="maskingimg"></div><!-- 利用positon:absolute/z-index:-1使其固定于最底层 -->
           <div class="maskingcolor"></div> <!-- 利用positon:absolute/z-index:-2使其固定于最底层 -->
   </div>

    </template>
    <script>
    export default {
        name:'msginfo',
        data:function(){
            return{
                   list: null
            }
        },
        methods:{
            like: function (id, like, index) {
                    $("this>img").attr("src", "assets/images/icon/踩(后).png'");//这里有问题，icon异常
                    console.log(`点击的当前评论的ID为${id}`);
                    like < 99 ? like = like * 1 + 1/* string->number */
                        : like = "99+";
                    let newmsg = new FormData();
                    newmsg.append('MsgID', id);
                    newmsg.append('like', like);
                    this._data.list[index].Like = like;
                    this.$axios
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
                    this.$axios
                        .post('https://www.xipengheng.cn/AAA/updateMsg.php', newmsg)
                        .then(res => {
                            let flag = res.data.infoCode
                            flag == 2 ? console.log('踩踩计数写入数据库成功')
                                : (flag == 3 ? console.log('数据库连接失败，请检查') : console.log('预期外错误'))
                            console.log(`-------------------------`);
                        })
    }
        },
        components:{
        },
        mounted(){
           this.$axios 
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
        }
    }
    </script>
    <style  scoped>

/* 展示的留言信息 */
.msg-list{
    height: 50rem;
    /* overflow-y: auto; */
    overflow: auto;
}
.hxp-msg-list-headpotato img{
    height: 3rem;
    width: 3rem;
}
.hxp-msg-list-icon img{
    height: 2rem;
    width: 2rem;
}
.hxp-msg-list {
    margin: 1rem auto;
    color: #394568;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    width: 90%;
    height: 15rem;
    align-items: flex-end;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    font-family: "Open Sans", "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
/*增加背景图层  */
.maskingcolor {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(245, 240, 245, 0.35);
}
/* 背景图 */
.maskingimg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background: url(../assets/images/photo/msg-bg.png);
    background-size: cover;
    filter: blur(1px);
}
    </style>