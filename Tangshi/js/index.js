(function () {
	const key = '0c7ebab2461621aeb2c34b3a82e4c702';
	const headurl = 'http://api.tianapi.com/txapi';
	/*接口中需要的key,和常用地址请求头将其定义为常量*/
	var vm = new Vue({
		el: '#hxp',
		data: {
			loadSurvey:true,//重新渲染组件
			selectval:null,//同步搜索框内容
			Tangshi_key:'杜牧',//用来向子组件传值
			liList:['李白','杜甫','李商隐','杜牧','岑参','王维'],
			current:3,//诗人列表及默认选中
			newslist: {}//存放诗词信息
		},
		methods: {
			addClass:function(index){ 
				 this.current=index;
				 console.log('父子组件传值成功');
				 },
/**
 * 首先 vue的点击事件 是用 @click = “clickfun($event)” 属性 在html中绑定的,
 * 在点击的函数中 添加$event 参数就可以
 * clickfun(e) {
 *  e.target 是你当前点击的元素 
 * e.currentTarget 是你绑定事件的元素
 * 
 */
			change_Tangshi_key:function (e) {								
				this.Tangshi_key=e.target.text;
				this.loadSurvey = false;
				/*大坑：一个事件循环tick后再修改，因为dom异步更新要在下一个'tick'更新。*/
				this.$nextTick(() => {
					this.loadSurvey = true
				})
				console.log('组件模板重新渲染成功');
			},
			select:function(){
				this.current=999;
				/*搜索时取消默认列表选中样式*/
				this.Tangshi_key=this.selectval;
				/*同步更新搜索框内容selectval*/
				this.loadSurvey = false;
				this.$nextTick(() => {
					this.loadSurvey = true;
				})
			}
		},
		components: {
			Tangshi_list:{
				template:'#hxp-Tangshi-guding',
				data:function(){
					return{
						list:null
					}
				},
				mounted() {
				axios
				.get('tangshi.json')
				.then(res=>{
					let newlist=res.data.list;
					this.list=newlist;
					console.log(this.list);
				})	
				},
			},
/**
 * 自定义获取实时天气信息组件
 * */
			tianqi: {
				template: '#hxp-tianqi',
				data: function () {
					return {
						tianqi_week: null,
						tianqi_weather: null,
						tianqi_weatherimg: null,
						tianqi_real:null,
						tianqi_lowest: null,
						tianqi_highest: null,
						tianqi_air_level: null,
						tianqi_tips: null
					}
				},
				mounted() {
					let city = '郑州';
					let action = 'tianqi';
					let url = `${headurl}/${action}/?key=${key}&city=${city}`;
					axios
						.get(url)
						.then(res => {
							let data = res.data.newslist[0]
							this.tianqi_real = data.real;
							this.tianqi_week = data.week;
							this.tianqi_weather = data.weather;
							this.tianqi_weatherimg = data.weatherimg;
							this.tianqi_lowest = data.lowest;
							this.tianqi_highest = data.highest;
							this.tianqi_air_level = data.air_level;
							this.tianqi_tips = data.tips;
							console.log(data);
						})
				},
				methods: {
					
				},
			},
	/*
			 * 自定义评论组件
			*/
			pinglun: {
				template: '#hxp-pinglun',
				data: function () {
					return {
					}
				}
			},
			ever: {
				template: '#hxp-ever',
				data() {
					return {
						author: null,
						content: null,
						source: null,
						tqtype: null
					}
				},
				methods: {
				},
				mounted() {
					let action = 'tianqishiju'
					let url = `${headurl}/${action}/?key=${key}&tqtype=3`;
					axios
						.get(url)
						.then(res => {
							let data = res.data.newslist[0];
							this.author = data.author,
								this.content = data.content,
								this.source = data.source,
								this.tqtype = data.tqtype
						})
				},
				filters() {
				},
			},
			/**
			 * 自定义诗词信息组件
			*/
			Tangshi: {
				template: '#hxp-Tangshi',
				data: function () {
					return {
						Tangshi_key: '李白',
						time: new Date,
						newslist: null,
					}
				},
				methods: {
					del(index) {
						this.newslist.splice(index, 1);
					},
				},
				/*存放一些我自定义的数据过滤器*/
				filters: {
					hxpcode: function (title) {
						return title.replace(/。/g, "·");
					},
					hxptime: function (time) {
						let dt = new Date(time);
						let Y = dt.getFullYear();
						let M = dt.getMonth() + 1;
						let D = dt.getDate();
						let h = dt.getHours();
						let m = dt.getMinutes();
						return `${Y}.${M}.${D}.${h}.${m}分`;
					}
				},
				mounted() {
					let action = 'poetries';
					let word = this.Tangshi_key;
					let url = `${headurl}/${action}/?key=${key}&word=${word}&num=7`
					axios
						.get(url)
						.then(res => {
							let data = res.data.newslist;
							this.newslist = data;
							console.log(this.newslist);
							console.log('axios数据请求成功');
						})
				},
				props:['Tangshi_key'],
			}
			
		},
		beforeCreate() {
		},
		created() {
		},
		beforeMount() {
		},
		mounted() {
		},
		beforeUpdate() {
		},
		updated() {
		},
		beforeDestroy() {
		},
		destroyed() {
		}

	});
	/*---顶部导航栏 ------*/
	$(".navplus li").click(function () {
		// confirm(`确认跳转到${text}?`)?console.log('跳转成功'):$(this).removeClass('active');
		var text = $(this).text();
		return confirm(`确认跳转到${text}?`);
	})
}())