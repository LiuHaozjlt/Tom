<template>
    <div>
        <div :class={leiming:dingding}>
            元素1
        </div>
        <div class="yuansu2">
            {{num}}
        </div>
        <input type="text" style="border: 3px solid red" v-model="shuru">
        <div>
            元素4
        </div>
        <div>
            元素5
        </div>
        <div class="geshu">{{shuzuchangdu()}}</div>
        <div class="shuxin" @click="shuxin">刷新</div>
        <div class="divA">
            <my-component v-for="(item,index) in dataA" :key='index'  >
                {{item}}
            </my-component>
        </div>
<!--
        <div class="slotzi">slotzi</div> -->
    </div>
</template>
<script>
    var MyComponent = Vue.extend({
        // template: '<div>A custom component!</div>',
        template: '<div> <slot></slot></div>',
        // props: ['wenzi'],
    })
    Vue.component('my-component', MyComponent)
    import Vue from 'vue'
    import vant from 'vant';
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                shuru: '',
                num: 1,
                dingding: 'leiming',
                ss: "dddddddddddd",
                wenzi: 'aaaaaaaaaaaaaa',
                dierge:'deergeshuju',
                dataA:['小明','24','湖南','男']
            }
        },
        methods: {
            shuxin() {
                this.$toast(this.ss)
            },
            shuzuchangdu() {
                return this.$store.state.porpval.length
            },
            jiaA() {
                return this.num++
            },
        },
        mounted() {
        },
    }
</script>
<style>
    .divA{
        display:flex;
        flex-wrap: wrap;
        border:2px solid red;
    }
    .divA div{
        flex: 30%;
    border: 1px solid black;
    word-break: break-all;
    }
    .shuxin {
        width: 30px;
        height: 60px;
        border-radius: 50%;
        background-color: yellow;
    }
    .geshu {
        width: 30px;
        height: 30px;
        background-color: red;
    }
    .yuansu2 {
        width: 30px;
        height: 30px;
        background-color: red;
    }
</style>