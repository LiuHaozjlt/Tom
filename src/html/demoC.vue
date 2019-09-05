<template>
    <div >
        <van-grid square>
            <van-grid-item v-for="value in 12" :key="value" icon="photo-o" text="文字" />
        </van-grid>



    </div>
</template>



<script>
    import Vue from 'vue'
    import { Grid, GridItem } from 'vant';

    Vue.use(Grid).use(GridItem);
    export default {
        data() {

            return {
                // bum: new Object
                // treeA:new Object,
                // treeB:new Object,
                // treeC:new Object
            }
        },
        methods: {
            // bumeng() {
            //     this.bum.name = "部门"
            //     console.log(this.bum)

            // }
            // jishu(){
            //     this.tree.name = "技术部"

            // },
            // xiaoshou(){
            //     this.tree.name = '销售部'

            // },
            // xinzheng(){
            //     this.tree.name = "行政部"

            // }
        },
        mounted() {
            // this.bumeng()


        },
    }
</script>



<style>
    

</style>