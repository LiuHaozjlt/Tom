<template>
    <div>
        <div>
            <div style="width：200px; height: 50px;border:2px solid red;" @click="clickCurrValue">{{currValue}}</div>
            <van-tree-select v-if="flag" :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex"
                @click-nav="clickNavTree" />
        </div>
        <!-- 手机品牌：<div v-for="(item,index) in createDOMtre" :key="index" @click="toRiqi(item.text)">
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
        <div>{{ isLogin ? '已登录' : '登录'}}</div> -->
    </div>
</template>
<script>
    // import Vue from 'vue';
    // import { TreeSelect } from 'vant';
    import axius from 'axios'
    import { DatetimeView, XDialog, XButton, TransferDom } from 'vux'
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
                isLogin: false,
                showTime: '2019-09-07',
                showPopup: false,
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
                 },
                txtList: [],
                flag: false,
                currValue: '',
                activeId: 1,
                activeIndex: 0,
                createDOMtre: [{ text: 'iphone' }, { text: '西米' }, { text: 'nokia' }, { text: 'meizu' }],
                items: [
                    {
                         text: '浙江',
                        id: 0,
                         children: [
                         ]
                    },
                    {
                         text: '广州',
                        id: 2,
                         children: [
                         ]
                    }
                ],
            };
        },
        created() {
             let userName = localStorage.getItem("userId")
            if (userName !== null) {
                this.isLogin = true
            } else {
                this.isLogin = false
            }
        },
        mounted() {
            this.setCurrValue();
         },
        methods: {
            clickCurrValue() {
                this.flag = !this.flag;
                for(let i=0;i<this.items.length;i++){
                    this.items[i].children=[];
                }
            },
            setCurrValue() {
                this.currValue = this.items[this.activeIndex].text;
            },
            clickNavTree(index) {
                this.activeIndex = index;
                let list = [];
                if (index == 0) {
                    list = [
                        {
                             text: '温州',
                             id: 1,
                         },
                        {
                            text: '杭州',
                            id: 6
                        }
                    ]
                }else if(index==1){
                    list = [
                        {
                             text: '温州33',
                             id: 3,
                         },
                        {
                            text: '杭州444',
                            id: 4
                        }
                    ]
                }
                this.items[index].children = list
            },
            toRiqi(obj) {
                this.txtList.push(obj);
             },
            toRiqi2() {
                let listStr = JSON.stringify(this.txtList)
                localStorage.setItem("txtList", listStr)
                this.$router.push({ path: "/riqi" });
            },
            changeTime() {
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
        order: 1;
    }
     .van-tree-select__content {
        order: 3;
    }
</style>