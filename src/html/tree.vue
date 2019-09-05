<template>
    <div>
        <div>
            <div style="width：200px; height: 50px;border:2px solid red;" @click="clickCurrValue">{{currValue}}</div>
            <van-tree-select v-if="flag" :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex" @click-nav="clickNavTree" />

        </div>
        手机品牌：<div v-for="(item,index) in createDOMtre" :key="index" @click="toRiqi(item.text)">
            {{item.text}}
        </div>

        <div @click="toRiqi2">
            tiaozhuan
        </div>

    </div>
</template>
<script>
    import Vue from 'vue';
    import { TreeSelect } from 'vant';
    import axius from 'axios'
    Vue.use(TreeSelect);
    export default {
        data() {
            return {
                txtList:[],
                flag: false,
                currValue: '',
                activeId: 1,
                activeIndex: 0,
                createDOMtre:[{text:'iphone'},{text:'西米'},{text:'nokia'},{text:'meizu'}],
                items: [
                    {
                        // 导航名称
                        text: '浙江',
                        id: 0,
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识
                                id: 1,
                                // 禁用选项

                            },
                            {
                                text: '杭州',
                                id: 6
                            }
                        ]
                    },
                    {
                        // 导航名称
                        text: '广州',
                        id: 2,
                        // 该导航下所k有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州ddddddddddd',
                                // id，作为匹配选中状态的标识
                                id: 3,
                                // 禁用选项

                            },
                            {
                                text: '杭州aaaaaaaaaaaa',
                                id: 4
                            }
                        ]
                    }
                ],
            };
        },
        mounted() {
            this.setCurrValue();
        },
        methods: {
            clickCurrValue() {
                this.flag = true;

            },
            setCurrValue() {
                this.currValue = this.items[this.activeIndex].text;
            },
            clickNavTree(index) {
                this.activeIndex = index;
            },
            toRiqi(obj){
                this.txtList.push(obj);
                // this.$router.push({ path: "/riqi", query: { text: obj } });
            },
            toRiqi2(){
                let listStr=JSON.stringify(this.txtList)
                localStorage.setItem("txtList",listStr)
                this.$router.push({ path: "/riqi"});
            }
        },
    }
</script>

<style>

    .van-tree-select__nav {
        order: 3;
    }

    .van-tree-select__content {
        order: 1;
    }

</style>