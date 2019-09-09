(function () {
    $.fatNav();
    $('.hxp-size-').niceScroll({
        cursorcolor: "skyblue",//#CC0071 光标颜色 
        cursoropacitymax: 0.5, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
        cursorwidth: "6px", //像素光标的宽度 
        cursorborder: "0", //游标边框css定义 
        cursorborderradius: "3px",//以像素为光标边界半径 
        autohidemode: true //是否隐藏滚动条 
    });
    let obj = JSON.parse(localStorage.getItem('obj'));
    console.log(obj);/*接受前页面传来的数据*/   
    let content = obj.content.split('。');
    content.pop();/*去掉空行并格式化诗词*/
    let title = obj.title;
    let author = obj.author;
    if(obj.translation){
        var translation=obj.translation.replace(/<\/p>/g,"").split('。');
        /*去掉字符串末尾那个P标签并格式化释义*/
        var appreciation=obj.appreciation.replace(/<\/p>/g,"");
    }else{
        /*若数据中心无释义*/
        var  translation=['未检索到数据'];
        var appreciation='未检索到数据';
    }
    var vm1 = new Vue({
        el: '.app1 ',
        data: {
        },
        methods: {
        },
        components: {
            hxp_content: {
                template: '#hxp-content-info',
                data: function () {
                    return {
                        title: title,
                        author: author,
                        content: content,
                    }
                },
                methods: {
                },
            },

        }
    });
    var vm2 = new Vue({
        el: '.app2',
        data: {
        },
        methods: {
        },
        components: {
            hxp_translation: {
                template: '#hxp-translation-info',
                data: function () {
                    return {
                        title: title,
                        author:author,
                        translation: translation,
                    }
                },
                methods: {
                },
            },
        }
    })
    var vm3 = new Vue({
        el: '.app3',
        data: {
        },
        methods: {
        },
        components: {
            hxp_appreciation: {
                template: '#hxp-appreciation-info',
                data: function () {
                    return {
                        appreciation:appreciation,
                    }
                },
            },
        }
    })
}());