<template>
    <div>
        <van-pull-refresh class="xl_css" v-model="isLoading" @refresh="onRefresh" :head-height="90">
            <p style="height: 300px">刷新次数: {{ count }}</p>
            <div slot="loosing">
                <div>aaaaa</div>
            </div>
            <div slot="loading">
                <div class="one-vw">
                    <van-loading type="spinner" />
                    <div>
                        <div>下拉刷新111</div>
                        <div>最后更新：{{times}}</div>
                    </div>
                </div>
            </div>

        </van-pull-refresh>

        <!-- <div :class={leiming:dingding}>
            元素1123div
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
        </div> -->
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
    export default {
        data() {
            return {
                count: 1,
                isLoading: false,
                times: "",
                distance: {
                    distance: 200
                },
                shuru: '',
                num: 1,
                dingding: 'leiming',
                ss: "dddddddddddd",
                wenzi: 'aaaaaaaaaaaaaa',
                dierge: 'deergeshuju',
                dataA: ['小明', '24', '湖南', '男']
            }
        },
        methods: {
            onRefresh() {
                this.getTime()
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 5000);
            },
            shuxin() {
                this.$toast(this.ss)
            },
            shuzuchangdu() {
                return this.$store.state.porpval.length
            },
            jiaA() {
                return this.num++
            },
            getTime() {
                var time = new Date();
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                var day = time.getDate();
                var seperator1 = "-"

                //获取时分秒
                var h = time.getHours();
                var m = time.getMinutes();
                var s = time.getSeconds();

                //检查是否小于10
                h = this.check(h);
                m = this.check(m);
                s = this.check(s);
                this.times =   h + ":" + m + ":" + s;
            },
            check(i) {
                var num;
                i < 10 ? num = "0" + i : num = i;
                return num;
            }
        },
        mounted() {
        },
    }
</script>
<style scoped>
    .divA {
        display: flex;
        flex-wrap: wrap;
        border: 2px solid red;
    }

    .divA div {
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

    .xl_css /deep/ .van-pull-refresh__head {
        line-height: normal;
    }

    .one-vw {
        display: flex;
        justify-content: center;
    }
</style>