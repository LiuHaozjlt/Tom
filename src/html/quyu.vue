<template>
    <div style="display: flex">
        <!-- <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu> -->
        <!-- <div class="qy-menu">
            <i class="iconfont self-ico" :class="isWeater? weaterVal: 'icon-qing' "></i>
        </div> -->
        <input type="text" style=" height:30px;border:2px solid red ">
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DropdownMenu, DropdownItem } from 'vant';
    Vue.use(DropdownMenu).use(DropdownItem);
    export default {
        data() {
            return {
                value1: 1,
                value2: 4,
                value3: 8,
                option1: [
                    { text: '全部商品', value: 1 },
                    { text: '新款商品', value: 2 },
                    { text: '活动商品', value: 3 }
                ],
                option2: [
                    { text: '默认排序', value: 4 },
                    { text: '好评排序', value: 5 },
                    { text: '销量排序', value: 6 },
                ],
                option3: [
                    { text: '你', value: 7 },
                    { text: '我', value: 8 },
                    { text: '他', value: 9 },
                ],
                weaterVal: '',
                isWeater: false
            }
        },
        mounted() {
            this.getWeather()
        },
        methods: {
            getWeather () {
               const that  = this
                this.axius.get('https://www.tianqiapi.com/api/?appid=95423573&appsecret=IQNpU66i&version=v6' ).then(function(reponse){
                    that.isWeater =  true
                    let data = reponse.data
                    console.log(data.wea)
                    if(data.wea.indexOf('晴') > -1){
                        that.weaterVal = 'icon-qing'
                    } else if(data.wea.indexOf('暴雨') > -1){
                        that.weaterVal = 'icon-baoyu'
                    }  else if(data.wea.indexOf('雨') > -1){
                        that.weaterVal = 'icon-icon--'
                    }  else if(data.wea.indexOf('多云') > -1){
                        that.weaterVal = 'icon-tianqi'
                    } else if(data.wea.indexOf('雪') > -1){
                        that.weaterVal = 'icon-xue'
                    } else {
                        // 阴天
                        that.weaterVal = 'icon-overcast-sky_icon'
                    }
                        }).catch(() => {})
                }
        },
    }
</script>
<style scoped>
    .qy-menu{
        width: 100%;
        background: #007aff;
        padding: 10px 0;
    }
    .self-ico{
        font-size: 32px;
        color: #fff;
    }
</style>