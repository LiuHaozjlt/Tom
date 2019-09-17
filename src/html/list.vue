<template>
    <div>
        <div style="border:2px solid red;height:400px">
            <div v-for="(item,index) in arrrr" :key="index">{{item.MMall}}{{item.happymmall}}</div>

        </div>
        <div>
            显示<input v-model="num" @input="optimization" />条数据
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                num: '',
                arrrr: [],
                namedModules: [],
                isNew:false,

                about: [
                    { MMall: 1, happymmall: '网上购物' },
                    { MMall: 2, happymmall: '网上商城' },
                    { MMall: 3, happymmall: '数码产品' },
                    { MMall: 4, happymmall: '手机' },
                    { MMall: 5, happymmall: '相机' },
                    { MMall: 6, happymmall: '电商教程' }
                ]
            }
        },
        created() {
            this.isNew=true;
            this.arrrr = this.about;
            this.optimization()
        },
        methods: {
            optimization() {
                let x = parseInt(this.num);
                if(this.isNew){
                    this.isNew=false;
                    x=localStorage.getItem("dqNum");
                    this.num=x;
                }

                if (x) {
                    this.arrrr = [];
                    for (let i = 0; i < x; i++) {
                        this.arrrr.push(this.about[i]);
                    }
                    localStorage.setItem("dqNum",x);
                }
            }

        },
        mounted() {








        }
    }
</script>