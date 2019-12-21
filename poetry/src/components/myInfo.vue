<template>
  <div class="app header">
    <div class="container header-info">
      <div class="row header-info-ps">
        <!-- <img src="src/common/image/icon/日历.png" alt=""> -->
      </div>
      <div class="row header-info-div">
        <!--头像及个人昵称 -->
        <div class="col-xs-5 col-md-4 header-info-image"></div>
        <div class="col-xs-7 col-md-6 header-info-name">
          <table class="table">
            <tbody class="hxp-icon">
              <tr>
                <td id="transform">
                  <img src="../assets/images/icon/头像.png" alt />
                  &#12288{{UserName}}
                </td>
              </tr>
              <tr>
                <td>
                  <img src="../assets/images/icon/签名.png" alt />
                  {{UserSayHi}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="container header-list">
      <table class="table table-hover table-inverse">
        <tbody>
          <tr>
            <td>
              <a>
                <img src="../assets/images/icon/番茄.png" alt srcset />我的昵称
              </a>
            </td>
            <td>{{UserName}}</td>
            <td>
              <a href>></a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#Collection" data-toggle="collapse">
                <img src="../assets/images/icon/喜欢.png" alt srcset />个性签名
              </a>
            </td>
            <td>{{UserSayHi}}</td>
            <td>
              <a href>></a>
            </td>
          </tr>
          <tr>
            <td>
              <a>
                <img src="../assets/images/icon/性别.png" alt srcset />性别
              </a>
            </td>
            <td>{{UserGender}}</td>
            <td>
              <a href>></a>
            </td>
          </tr>
          <tr>
            <td>
              <a>
                <img src="../assets/images/icon/路标.png" alt srcset />我的收藏
              </a>
            </td>
            <td></td>
            <td>
              <a href>></a>
            </td>
          </tr>
          <tr @click="setting">
            <td>
              <a>
                <img src="../assets/images/icon/设置.png" alt srcset />设置/登录
              </a>
            </td>
            <td></td>
            <td>></td>
          </tr>
          <tr @click="questionTable">
            <td>
              <a>
                <img src="../assets/images/icon/调查问卷.png" alt srcset />调查问卷
              </a>
            </td>
            <td></td>
            <td>></td>
          </tr>
        </tbody>
      </table>
      <dl>
        <dt>昵称：</dt>
        <dd>- 昵称即用户标识，故不支持更改；</dd>
        <dt>个性签名：</dt>
        <dd>- 请不要超过十五个字；</dd>
        <dt>性别：</dt>
        <dd>- 默认为GG，可选项为GG或MM；</dd>
        <dt>注：</dt>
        <dd>更换头像图片:开发中....</dd>
      </dl>
    </div>
    <div class="login" v-if="table">
      <div class="menu">
        <button class="btn-success" @click="loginfun">想登录/注册?</button>
        <button class="btn-warning" @click="updatefun">想修改个人信息？</button>
        <p class="text-right">
          <a @click="close">关闭</a>
        </p>
      </div>
      <table class="table table-hover table-inverse" v-if="login">
        <tbody>
          <tr>
            <td>账号(昵称)</td>
            <td>
              <input type="text" v-model="UserName" />
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <input type="password" v-model="PassWord" />
            </td>
          </tr>

          <th></th>
          <th>
            <button class="btn btn-info btn-sm" @click="login_axios">登录</button>
            <button class="btn btn-danger btn-sm" @click="createLogin_axios">注册</button>
          </th>
        </tbody>
        <thead>
          <mark>*不区分大小写</mark>
        </thead>
      </table>
      <table class="table table-inverse" v-if="updateInfo">
        <tbody>
          <tr>
            <td>当前账号名</td>
            <td>
              <input type="text" class="form-control" disabled="disabled" :value="UserName" />
              <span class="text-warning">（*账号名不支持更改哟!）</span>
            </td>
          </tr>
          <tr>
            <td>个性签名</td>
            <td>
              <input type="text" class="form-control" v-model="UserSayHi" />
              <span class="text-warning">（*十五字以内哟~）</span>
            </td>
          </tr>
          <tr>
            <td>性别</td>
            <td>
              <select name id class="form-control" v-model="UserGender">
                <option value="GG">GG</option>
                <option value="MM">MM</option>
                <option disabled="disabled">(性别不可搞错哟)</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>头像上传预留</td>
            <td>
              <input type="text" class="form-control" disabled="disabled" />
            </td>
          </tr>
          <th>
            <button class="btn btn-info btn-sm" @click="updateInfo_axios">确认修改</button>
          </th>
          <th>
            <button class="btn btn-danger btn-sm" @click="close">不想改辽</button>
          </th>
        </tbody>
      </table>
    </div>
    <div class="login" v-if="table2">
      <div class="menu">
        <button class="btn-warning" @click="updatefun">感谢您参与我们的调查问卷</button>
        <p class="text-right">
          <a @click="close">关闭</a>
        </p>
      </div>
      <table class="table table-inverse">
        <tbody>
          <tr>
            <td class="text-success">您的姓名</td>
            <td>
              <input type="text" class="form-control" v-model="UserSayHi" />
            </td>
          </tr>
          <tr>
            <td>性别</td>
            <td>
              <select name id class="form-control" v-model="UserGender">
                <option value="GG">GG</option>
                <option value="MM">MM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>年龄所属</td>
            <td>
              <select name id class="form-control" v-model="UserGender">
                <option value="00后" selected>00后</option>
                <option value="90后">90后</option>
                <option value="80后">80后</option>
                <option value="70后">70后</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>爱好类型</td>
            <td>
              <select name id class="form-control" v-model="UserGender">
                <option value="唐诗" selected>唐诗</option>
                <option value="宋词">宋词</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>宝贵意见</td>
            <td>
              <input type="text" class="form-control" value="暂不接受，请留言区指出" disabled="disabled" />
            </td>
          </tr>
          <th>
            <button class="btn btn-info btn-sm">确认提交</button>
          </th>
        </tbody>
      </table>
    </div>
    <div class="maskingimg" id="maskingimg"></div>
    <div class="maskingcolor"></div>
  </div>
</template>
<script>
export default {
  name: "msgCompon", //把当前组件抛出并命名
  data() {
    return {
      table: false /*弹窗是否显示*/,
      table2: false,
      updateInfo: false /*修改个人信息*/,
      login: true /*注册、登录*/,
      UserName: null,
      PassWord: null,
      UserGender: null,
      UserSayHi: null
    };
  },
  methods: {
    /**登录 */
    login_axios: function() {
      var formdata = new FormData();
      formdata.append("UserName", this.UserName);
      formdata.append("PassWord", this.PassWord);
      this.$axios
        .post("https://www.xipengheng.cn/AAA/login.php", formdata)
        .then(res => {
          /**验证账号和密码
           * 成功时返回1
           * 错误时返回2
           * 数据库连接失败时返回0
           */
          res.data.infoCode == 1
            ? (() => {
                this.table = false;
                console.log("登录成功");
                window.localStorage.setItem(
                  "UserName",
                  JSON.stringify(this.UserName)
                );
                window.localStorage.setItem(
                  "PassWord",
                  JSON.stringify(this.PassWord)
                );
                history.go(0);
              })()
            : res.data.infoCode == 2
            ? alert("账号密码错误或不存在")
            : alert("数据库连接失败，请稍后再试或联系管理员");
        });
    },
    //     /**注册 */
    createLogin_axios: function() {
      var formdata = new FormData();
      let dt = new Date();
      let createTime = `${dt.getFullYear()}-${dt.getMonth() +
        1}-${dt.getDate()}`;
      formdata.append("UserName", this.UserName);
      formdata.append("PassWord", this.PassWord);
      formdata.append("createTime", createTime);

      this.$axios
        .post("https://www.xipengheng.cn/AAA/createLogin.php", formdata)
        .then(res => {
          console.log(res);
          /**验证注册用的账号和密码
           * 账号已存在返回1
           * 账号注册成功返回2
           * 数据库连接失败时返回0
           */
          res.data.infoCode == 1
            ? (() => {
                console.log("当前账号已被注册");
                this.UserName = "";
                alert("当前账号已被注册，请更换账号名");
              })()
            : res.data.infoCode == 2
            ? alert("注册成功，请登录")
            : alert("数据库连接失败，请稍后再试或联系管理员");
        });
    },
    /**修改个人信息 */
    updateInfo_axios: function() {
      var formdata = new FormData();
      formdata.append("UserName", this.UserName);
      formdata.append("PassWord", this.PassWord);
      formdata.append("UserGender", this.UserGender);
      formdata.append("UserSayHi", this.UserSayHi);
      this.$axios
        .post("https://www.xipengheng.cn/AAA/updateInfo.php", formdata)
        .then(res => {
          console.log(res);
          this.table = false;
        });
    },
    loginfun: function() {
      this.login = true;
      this.updateInfo = false;
    },
    updatefun: function() {
      this.updateInfo = true;
      this.login = false;
    },
    close: function() {
      this.table = false;
      this.table2 = false;
    },
    setting: function() {
      this.table = true;
    },
    questionTable: function() {
      this.table2 = true;
    }
  },
  mounted() {
    this.UserName = JSON.parse(localStorage.getItem("UserName"));
    var formdata = new FormData();
    formdata.append("UserName", this.UserName);
    this.$axios
      .post("https://www.xipengheng.cn/AAA/myInfo.php", formdata)
      .then(res => {
        this.UserName = res.data.message[0].UserName || "";
        this.UserGender = res.data.message[0].UserGender || "";
        this.UserSayHi = res.data.message[0].UserSayHi || "";
        /**
         * 若有信息显示信息，没有信息返回空
         * 防止当前用户资料为空时渲染null
         */
      });
  }
};
</script>
<style scoped>
#app img {
  width: 2rem;
  height: 2rem;
}

#transform {
  border-top: 1px solid transparent;
}
.maskingcolor {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: rgba(245, 228, 245, 0.35);
}

.maskingimg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: url(../assets/images/photo/info-bg.png);
  background-size: cover;
  filter: blur(1px);
}
.header-info {
  width: 100%;
  height: 16rem;
  background: rgba(251, 225, 246, 0.355);
}
.header-info-ps {
  height: 25%;
  width: 100%;
}

.header-info-div {
  height: 75%;
  width: 100%;
}
.header-info-image {
  background: url(../assets/images/photo/foo.jpg);
  background-size: cover;
  border: 4px solid white;
  border-radius: 50%;
  height: 100%;
}
.header-list {
  width: 100%;
  height: 70%;
  height: 45rem;
  background: rgba(245, 244, 245, 0.345);
}
/* 隐藏的登录页面 */
.login {
  position: absolute;
  width: 90%;
  height: 60%;
  left: 2rem;
  top: 2rem;
  padding: 2rem;
  border-radius: 20px;
  background: url(../assets/images/photo/data_bg.jpg);
}
</style>