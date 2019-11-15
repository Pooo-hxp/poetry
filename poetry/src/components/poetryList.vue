<template>
  <div>
    <div class="container">
      <strong>热门诗人：</strong>
      <!-- 推荐：热门诗人列表 -->
      <button class="btn btn-success btn-sm" @click="Change_Tangshi_key($event)">李白</button>
      <button class="btn btn-danger btn-sm" @click="Change_Tangshi_key($event)">杜甫</button>
      <button class="btn btn-warning btn-sm" @click="Change_Tangshi_key($event)">刘禹锡</button>
      <button class="btn btn-info btn-sm" @click="Change_Tangshi_key($event)">李商隐</button>
      <button class="btn btn-danger btn-sm" @click="Change_Tangshi_key($event)">王维</button>
    </div>
    <div class="container">
      <div class="row">
        <!-- 在线搜索表单 -->
        <div class="col-xs-4 col-md-4">
          <input type="text" class="form-control" placeholder="请提供关键字" />
        </div>
        <div class="col-xs-4 col-md-4">
          <select class="form-control" id>
            <option value="唐诗">唐诗</option>
            <option value="宋词">宋词</option>
          </select>
        </div>
        <div class="col-xs-4 col-md-4">
          <button class="hxp-icon form-control">
            <img src="../assets/images/icon/搜索.png" alt />
            搜索
          </button>
        </div>
      </div>
    </div>
    <div class="container hxp-tangshi-list">
      <!--v-if="reload" -->
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
          <tr>
            <td>1</td>
            <td>闻王昌龄左迁龙标</td>
            <td>李白</td>
            <td>2019.11.14</td>
            <td>
              <a href>
                <img src="../assets/images/icon/删除.png" />
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>闻王昌龄左迁龙标</td>
            <td>李白</td>
            <td>2019.11.14</td>
            <td>
              <a href>
                <img src="../assets/images/icon/删除.png" />
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>闻王昌龄左迁龙标</td>
            <td>李白</td>
            <td>2019.11.14</td>
            <td>
              <a href>
                <img src="../assets/images/icon/删除.png" />
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>闻王昌龄左迁龙标</td>
            <td>李白</td>
            <td>2019.11.14</td>
            <td>
              <a href>
                <img src="../assets/images/icon/删除.png" />
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>闻王昌龄左迁龙标</td>
            <td>李白</td>
            <td>2019.11.14</td>
            <td>
              <a href>
                <img src="../assets/images/icon/删除.png" />
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>闻王昌龄左迁龙标</td>
            <td>李白</td>
            <td>2019.11.14</td>
            <td>
              <a href>
                <img src="../assets/images/icon/删除.png" />
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>闻王昌龄左迁龙标</td>
            <td>李白</td>
            <td>2019.11.14</td>
            <td>
              <a href>
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
  data() {}
};
</script>

<<style scoped>
    /**----诗词图标及列表--- */
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