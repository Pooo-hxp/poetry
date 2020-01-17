<template>
  <div>
    <div class="container">
      <strong>热门诗人：</strong>
      <button class="btn btn-success btn-sm" @click="Change_Tangshi_key($event)">李白</button>
      <button class="btn btn-danger btn-sm" @click="Change_Tangshi_key($event)">杜甫</button>
      <button class="btn btn-warning btn-sm" @click="Change_Tangshi_key($event)">刘禹锡</button>
      <button class="btn btn-info btn-sm" @click="Change_Tangshi_key($event)">李商隐</button>
      <button class="btn btn-danger btn-sm" @click="Change_Tangshi_key($event)">王维</button>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-4 col-md-4">
          <input type="text" class="form-control" v-model="selectval" placeholder="请提供关键字" />
        </div>
        <div class="col-xs-4 col-md-4">
          <select class="form-control" v-model="selectval_type" id>
            <option value="唐诗">唐诗</option>
            <option value="宋词">宋词</option>
          </select>
        </div>
        <div class="col-xs-4 col-md-4">
          <button class="hxp-icon form-control" @click="select_ts">
            <img src="../assets/images/icon/搜索.png" alt />
            搜索
          </button>
        </div>
      </div>
    </div>
    <div class="container hxp-tangshi-list">
      <table class="table table-inverse table-responsive table-hover">
        <thead class="thead-inverse">
          <tr>
            <th>序列</th>
            <th>作品名</th>
            <th>作者</th>
            <th>更新时间</th>
            <th>del</th>
          </tr>
        </thead>
        <tbody class="hxp-icon">
          <tr v-for="(item,index) in getlist" :key="index" @click="getDetails(item)">
            <td>{{index+1}}</td>
            <td>{{item.title}}</td>
            <td>{{item.author}}</td>
            <td>{{time|filtertime}}</td>
            <td>
              <a href @click.prevent="del(index)">
                <img src="../assets/images/icon/删除.png" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "poetryList",
  data: function() {
    return {
      header: "http://api.tianapi.com/txapi",
      key: "?key=0c7ebab2461621aeb2c34b3a82e4c702",
      url: null,
      time: new Date(),
      reload: true,
      selectval: null,
      selectval_type: "唐诗",
      Tangshi_key: "李商隐",
      Songci_key: null,
      getlist: null
    };
  },
  methods: {
    del(index) {
      this.getlist.splice(index, 1);
    },
    select_ts: function() {
      /**获取搜索栏信息，判定后，重新渲染组件 */
      this.selectval_type == "宋词"
        ? ((this.Songci_key = this.selectval), (this.Tangshi_key = null))
        : (this.Tangshi_key = this.selectval);
        this.Tangshi_key==null?
        this.url=`${this.header}/songci/${this.key}&word=${this.Songci_key}&num=7`
        :this.url=`${this.header}/poetry/${this.key}&word=${this.Tangshi_key}&num=7`;
      this.$axios.get(this.url).then(res => {
        this.getlist = res.data.newslist;
        console.log(this.getlist);
      });
    },
    Change_Tangshi_key: function(e) {
      /**点击热门诗人，重新渲染组件 */
      let New_poetry_key = $(e.target).html();
      this.Tangshi_key = New_poetry_key;
      this.url = `${this.header}/poetry/${this.key}&word=${this.Tangshi_key}&num=7`;
      this.$axios.get(this.url).then(res => {
        this.getlist = res.data.newslist;
        console.log(this.getlist);
      });
    },
    getDetails:function(e){
      /**
       * 获取当前点击诗词列的详情e
       * 分类存到浏览器中
       */
      let par=[{
        author:e.author,
        content:e.content,
        intro:e.intro,
        kind:e.kind,
        title:e.title
      }]
       sessionStorage.setItem("par",JSON.stringify(par));
       this.$router.push({path:'/poetryDetails'})
       /**
        * 这里我原先是在vue中加的<vue-router>
        * 结果发现是先获取后传过去，导致点击诗词后
        * 展示的是上次的数据，不同步
        * 所以改用点击事件触发路由地址变动
        * 从而解决这个bug
        */
    }
  },
  mounted() {
    this.url = `${this.header}/poetry/${this.key}&word=${this.Tangshi_key}&num=7`;
    this.$axios.get(this.url).then(res => {
      this.getlist = res.data.newslist;
      console.log(this.getlist);
    });
  },
  filters: {
    filtertime: time => {
      let dt = new Date(time);
      let Y = dt.getFullYear();
      let M = dt.getMonth() + 1;
      let D = dt.getDate();
      return `${Y}.${M}.${D}`;
    }
  }
};
</script>

<style scoped>
.hxp-icon img {
  width: 2rem;
  height: 2rem;
}

.hxp-tangshi-list {
  height: 20rem;
  overflow-x: hidden;
  background: skyblue;
}
</style>