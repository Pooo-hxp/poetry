<template>
    <draggable v-model="colors" @update="datadragEnd" :options = "{animation:500}">
            <transition-group>
                <div v-for="element in colors" :key="element.text" class = "drag-item">
                    {{element.text}}
                </div>
            </transition-group>
    </draggable>
</template>

<script>
    import draggable from 'vuedraggable'
    export default{
        data(){
            return{
                msg:"这是测试组件",
                colors: [
                    {
                        text: "Aquamarine",
                    }, 
                    {
                        text: "Hotpink",
                    }, 
                    {
                        text: "Gold",
                    }, 
                    {
                        text: "Crimson",
                    }, 
                    {
                        text: "Blueviolet",
                    },
                    {
                        text: "Lightblue",
                    }, 
                    {
                        text: "Cornflowerblue",
                    }, 
                    {
                        text: "Skyblue",
                    }, 
                    {
                        text: "Burlywood",
                    }
                ],
                startArr:[],
                endArr:[],
                count:0,
            }
        },
        components: {
        　　draggable
        },
        methods:{
            getdata (evt) {
                console.log(evt.draggedContext.element.text)
            },
            datadragEnd (evt) {
                evt.preventDefault();
                console.log(this.colors);
            }
        },
        mounted () {
	        //为了防止火狐浏览器拖拽的时候以新标签打开
            document.body.ondrop = function (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
</script>

<style  scoped>
    .test{
        border:1px solid #ccc;
    }
    .drag-item{
        width: 200px;
        height: 50px;
        line-height: 50px;
        margin: auto;
        position: relative;
        background: #ddd;
        margin-top:20px;
    }
    .ghostClass{
        opacity: 1;
    }
    .bottom{
        width: 200px;
        height: 50px;
        position: relative;
        background: blue;
        top:2px;
        left: 2px;
        transition: all .5s linear;
    }
</style>