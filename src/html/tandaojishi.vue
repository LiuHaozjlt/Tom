<template>
    <div>
        <van-button type="info" @click='showPopup'>信息按钮</van-button>
        <van-popup v-model="show" style="width: 200px;height:300px">内容</van-popup>


    </div>
</template>

<script>
    import { Popup } from 'vant';

    Vue.use(Popup);
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);
    export default {
        data() {
            return {
                show: false
            }
        },

        methods: {
            showPopup() {
                this.show = true;
            }
        }

    }
</script>