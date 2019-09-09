<template>
    <div>
        <div>
            <div style="width：200px; height: 50px;border:2px solid red;" @click="clickCurrValue">{{currValue}}</div>
            <van-tree-select v-if="flag" :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex"
                @click-nav="clickNavTree" />
        </div>
        手机品牌：<div v-for="(item,index) in createDOMtre" :key="index" @click="toRiqi(item.text)">
            {{item.text}}
        </div>
        <div @click="toRiqi2">
            tiaozhuan
        </div>
        <ly-tab v-model="selectedId" :items="selectedItems" :options="options">
        </ly-tab>
        <div>
            <div @click="showPopup = true">{{ showTime }}</div>
            <div v-transfer-dom>
                <x-dialog v-model="showPopup" class="dialog-demo">
                    <div style="padding:15px;">
                        <datetime-view v-model="timeVal"></datetime-view>
                    </div>
                    <div>
                        <x-button @click.native="showPopup = false">返回</x-button>
                        <x-button type="primary" @click.native="changeTime">确定</x-button>
                    </div>
                </x-dialog>
            </div>
        </div>
        <div>{{ isLogin ? '已登录' : '登录'}}</div>
    </div>
</template>
<script>
    // import Vue from 'vue';
    // import { TreeSelect } from 'vant';
    import axius from 'axios'
    import { DatetimeView, XDialog , XButton , TransferDom } from 'vux'
    // Vue.use(TreeSelect);
    export default {
        components: {
            DatetimeView,
            XDialog,
            XButton

        },
        directives: {
            TransferDom
        },
        data() {
            return {
                isLogin: false, // 判断是否已登录
                showTime: '2019-09-07', // 选择日期前 显示的日期
                showPopup:false,
                selectedId: 0,
                timeVal: '2019-09-07',
                selectedItems: [
                    { label: '首页' },
                    { label: '推荐' },
                    { label: 'Android' },
                    { label: '前端' },
                    { label: '后端' },
                    { label: 'iOS' },
                    { label: '产品' },
                    { label: '人工智能' },
                    { label: '设计' }
                ],
                options: {
                    activeColor: '#1d98bd'
                    // 可在这里指定labelKey为你数据里文字对应的字段
                },
                txtList: [],
                flag: false,
                currValue: '',
                activeId: 1,
                activeIndex: 0,
                createDOMtre: [{ text: 'iphone' }, { text: '西米' }, { text: 'nokia' }, { text: 'meizu' }],
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
        created() {
            // 判断是否已登录  当userName 不等于 null 的时候就是有值
            let userName = localStorage.getItem("userId")
            if(userName !== null ){
                this.isLogin = true
            }else{
                this.isLogin = false
            }
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
            toRiqi(obj) {
                this.txtList.push(obj);
                // this.$router.push({ path: "/riqi", query: { text: obj } });
            },
            toRiqi2() {
                let listStr = JSON.stringify(this.txtList)
                localStorage.setItem("txtList", listStr)
                this.$router.push({ path: "/riqi" });
            },
            changeTime(){
                this.showTime = this.timeVal
                this.showPopup = false
            }
        },
    }
</script>
<style scoped>
    .tom {
        border: 2px solid blue;
    }

    .tom::-webkit-scrollbar {
        display: none;
    }

    .tom div {
        display: inline-block;
        border-radius: 20px;
        width: 1000px;
        height: 30px;
        border: 2px solid red;
    }

    .van-tree-select__nav {
        order: 3;
    }

    .van-tree-select__content {
        order: 1;
    }
</style>