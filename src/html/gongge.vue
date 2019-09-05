<template>
    <div>
        <div class='ssss'>
            <div class="ddd" style="text-decoration:line-through;color:red;">
                ddddddddd
            </div>
            <div>
                <van-grid :gutter="10">
                    <van-grid-item v-for="value in 2" :key="value" icon="photo-o" text="文字" />
                </van-grid>
                <van-grid :gutter="10">
                    <van-grid-item v-for="value in 2" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Grid, GridItem } from 'vant';
    Vue.use(Grid).use(GridItem);
    export default {
    }
</script>
<style>
    .ssss {
        display: flex;
    }
    .ddd {
        height: 500px;
        width: 50%;
        border: 1px solid red;
    }
    .van-grid-item__content {
        padding: 0 !important
    }
</style>