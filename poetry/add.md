## build 文件夹：用于存放 webpack 相关配置和脚本。开发中仅 偶尔使用 到此文件夹下 
## webpack.base.conf.js 用于配置 less、sass等css预编译库，或者配置一下 UI 库。
## config 文件夹：主要存放配置文件，用于区分开发环境、线上环境的不同。 常用到此文件夹下 config.js 配置开发环境的 端口号、是否开启热加载 或者 设置生产环境的静态资源相对路径、是否开启gzip压缩、npm run build 命令打包生成静态资源的名称和路径等。
## dist 文件夹：默认 npm run build 命令打包生成的静态资源文件，用于生产部署。
## node_modules：存放npm命令下载的开发环境和生产环境的依赖包。
## src: 存放项目源码及需要引用的资源文件。
## src下assets：存放项目中需要用到的资源文件，css、js、images等。
## src下componets：存放vue开发中一些公共组件：header.vue、footer.vue等。
## src下emit：自己配置的vue集中式事件管理机制。
## src下router：vue-router vue路由的配置文件。
## src下service：自己配置的vue请求后台接口方法。
## src下page：存在vue页面组件的文件夹。
## src下util：存放vue开发过程中一些公共的.js方法。
## src下vuex：存放 vuex 为vue专门开发的状态管理器。
## src下app.vue：使用标签<route-view></router-view>渲染整个工程的.vue组件。
## src下main.js：vue-cli工程的入口文件。
## index.html：设置项目的一些meta头信息和提供<div id="app"></div>用于挂载 vue 节点。
## package.json：用于node_modules资源部和启动、打包项目的 npm 命令管理。