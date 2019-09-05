<template>
    <div class="ddd">
        <input type="text" class="ip" v-model="shuru" @change="shuruValue">
        <div class="new" v-for="(item,index) in porpval" :key="index">
            <!-- {{item.string}} -->
            <!-- 你没有写东西在这里 -->
            <!-- <p ref='child'  :style="{background:'#'+Math.floor(Math.random()*16777215).toString(16)}" @click="dj(index,item)" >{{item}}</p> -->
            <p ref='child' :style="{background:'#'+Math.floor(Math.random()*16777215).toString(16)}">{{item}}</p>
        </div>
        <button @click="qingk">清空全部</button>
        <div>
            <van-card num="2" :desc='desc' price="2.00" :title="biaoti" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                <div slot="tags">
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                </div>
                <div slot="footer">
                    <van-button size="mini">按钮</van-button>
                    <van-button size="mini">按钮</van-button>
                </div>
            </van-card>
        </div>
    </div>
</template>
<script>
    import vant from 'vant';
    import { Cell, CellGroup } from 'vant';
    import Vue from 'vue'
    import { Card } from 'vant';
    Vue.use(Card);
    Vue.use(Cell).use(CellGroup);
    export default {
        data() {
            return {
                biaoti: <div class="aaaaaa">
                    <div>ss</div>
                    <div>sssssssss</div>
                </div>,
                dd: 'dddddd',
                desc: <div>ddddddddddd</div>,
                shuru: '',
                arl: '你好,你好',
                shuijiyanse: {},//随机颜色,
                datacolor: '',
                indexdata: '',
                mougexiang: ''
            }
        },
        components: {
        },
        props: {
            porpval: {
                type: Array
            }
        },
        mounted() {
            this.shuixianshi()
            console.log(this.desc)
            // this.getRandomColor()
            // let data = this.getRandomColor()
        },
        methods: {
            shuixianshi() {
            },
            //输入值调用一个方法
            shuruValue(i, it) {
                this.indexdata = i
            },
            qingk() {
                // 全部清空
                // let datap = this.$refs.child
                // datap.map((item,index)=>{
                //     if(index != this.indexdata){
                //         item.style.background = ''
                //     }
                // })
            },
            getRandomColor() {
                // return  '#' +
                //     (function(color){
                //     return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
                //     && (color.length == 6) ?  color : arguments.callee(color);
                // })('');
                return '#' + Math.floor(Math.random() * 16777215).toString(16)
            }
        }
    }
</script>
<style>
    .aaaaaa {
        display: flex;
    }
    .van-card__content {
        display: flex
    }
    .ip {
        border: 3px solid black;
        height: 50px;
    }
    .ddd {
        border: 2px solid red;
        height: auto;
    }
</style>