<template>
    <div>
        <div class='jindt' style="padding-top:30px">
            <van-progress :percentage="num" />
            <div style="width:60px;height:50px;border:1px solid red;">{{number}}</div>
        </div>
        <van-count-down :time="time" ref="countDown" icon="pause-circle-o" :auto-start="false" />
        <button @click='add' ref="countDown">加1%</button>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Progress } from 'vant';
    import { CountDown } from 'vant';
    Vue.use(CountDown);
    Vue.use(Progress);
    export default {
        data() {
            return {
                num: 0,
                number: '',
                time: 30 * 60 * 60 * 1000
            }
        },
        methods: {
            add() {
                this.num += 1;
                this.numaber = this.num + '百分比'
                this.$ref.countDown.start()
                setInterval(function () {
                    console.log(4);
                    clearInterval(intervalId);
                }, 200);
            },
            pause() {
                this.$refs.countDown.pause();
            }
        }
    }
</script>