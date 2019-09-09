<template>
    <div>
        <div class="swiper-container" ref="swiper" style="border:3px solid red; box-sizing: content-box;">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="">
                    <div>
                        <p>Slide 1</p>
                        <p>Slide 2</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <p>Slide 3</p>
                        <p>Slide 4</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <p>Slide 5</p>
                        <p>Slide 6</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            购买的手机有：<div v-for="(item,index) in text" :key="index">
                {{item}}
            </div>
        </div>
        <van-switch v-model="checked" />
        <!-- <div id="app">
            <button @click="ce">ces</button> <button @click="jian">jian</button>
            <mu-container>
                <mu-flex wrap="wrap">
                    <mu-paper :z-depth="1" class="demo-date-picker">
                        <input type="text" :list='this.date3' style="border:2px solid red">
                        <mu-date-picker :should-disable-date="allowedDates" :date.sync="date3"></mu-date-picker>
                    </mu-paper>
                </mu-flex>
            </mu-container>
        </div> -->
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Button } from 'vant';
    import Calendar from 'vue-calendar-component';
    import { Divider } from 'vant';
    import axius from 'axios'
    import { List } from 'vant';
    import { Loading } from 'vant';
    import { DropdownMenu, DropdownItem } from 'vant';
    import { Picker } from 'muse-ui'
    import 'swiper/dist/css/swiper.css';
    import swiper from 'swiper'
    import { Switch } from 'vant';
    Vue.use(Switch);
    Vue.use(Picker)
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Loading);
    Vue.use(Divider);
    Vue.use(List)
    Vue.use(Button);
    export default {
        data() {
            return {
                text: [],
                checked: true,
                date3: new Date(),
                date4: new Date(),
                price: 150,
                date: '',
                value1: 0,
                value2: 'a',
                option1: [
                    { text: '全部商品', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 }
                ],
                list: [],
                list2: [],
                list3: [],
                finished: false
            }
        },
        created() {
            // this.text= this.$route.query.text;
            let list = JSON.parse(localStorage.getItem("txtList"));
            this.text = list;
            this.service()
        },
        mounted() {
            const self = this;
            setTimeout(function () {
                const height = self.$refs.swiper.children[0].children[0].children[0].clientHeight;
                self.$refs.swiper.style.height = `${height}px`;
                new Swiper('.swiper-container', {
                    direction: 'vertical',
                    height,
                    autoplay: 1000,
                    slidesPerView: 1,
                });
            }, 0);
        },
        methods: {
            ce() {
                this.date3 = this.date3.setDate(this.date3.getDate() - 1);
                this.date3 = new Date(this.date3)
            },
            jian() {
                this.date3 = this.date3.setDate(this.date3.getDate() + 1);
                this.date3 = new Date(this.date3)
            },
            presets() {
                if (this.value1 == 0) {
                    this.output()
                }
                else if (this.value1 == 1) {
                    this.shift()
                    // this.shift() = "";
                    // console.log(typeof this.shift())
                }
                else if (this.value1 == 2) {
                    this.mutate()
                }
            },
            output() {
                this.axius.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then((response => {
                    this.list.push(response.data.result[0])
                }))
            },
            shift() {
                console.log('shift')
                this.axius.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then((response => {
                    this.list2.push(response.data.result[0].type)
                }))
            },
            mutate() {
                console.log('mutate')
                this.axius.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then((response => {
                    this.list3.push(response.data.result[0].sid)
                }))
            },
            service() {
                this.axius.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then((response => {
                    // console.log(response.data.result[0])
                    if (this.value1 == 0) {
                        this.list.push(response.data.result[0])
                    }
                    else if (this.value1 == 1) {
                        this.list2.push(response.data.result[0])
                    }
                    else if (this.value1 == 2) {
                        this.list3.push(response.data.result[0])
                    }
                }))
            },
            onLoad() {
                // 异步更新数据
                // setTimeout(() => {
                //     for (let i = 0; i < 10; i++) {
                //         this.list.push(this.list.length + 1);
                //     }
                // 异步更新数据
                // this.loading = false;
                // 异步更新数据
                // if (this.list.length >= 40) {
                //     this.finished = true;
                // }
                // }, 500);
            }
        },
        components: {
            Calendar
        }
    }
</script>
<style scoped>
    .swiper-container {}
    .swiper-slide p {
        line-height: 10px
    }
</style>