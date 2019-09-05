<template>
    <div>
        isssssssssssssssssssssss
        <div v-if='zujianAB==""'>
                <div> {{forchildmsg}}</div>
        </div>
        <div v-else>
            <div :is='zujianAB'></div>
        </div>
        <Button @click='anyi'>按1</Button>
        <Button @click='aner'>按2</Button>









    </div>
</template>
<script>
    import Vue from 'vue'
    import dema from '../html/729.vue'
    import demb from '../html/730.vue'
    import { Button } from 'vant';
    Vue.use(Button);
    export default {
        data() {
            return {
                forchildmsg: 'aaaaaaaaaaaaaaaaaaa',
                zujianAB: '',
                zujianA: dema,
                zujianB: demb
            }
        },
        methods: {
            anyi() {
                this.zujianAB = this.zujianA
            },
            aner() {
                this.zujianAB = this.zujianB
            }
        },
        components: {
            dema,
            demb
        }
    }
</script>