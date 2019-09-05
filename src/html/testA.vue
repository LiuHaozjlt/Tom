<template>
    <div>

        <div>
            <div v-for="(item,index) in arList" :key="index">
                <div>{{item.name}}</div>
                <div>{{item.age}}</div>
                <div>{{item.addre}}</div>
                <div>{{item.area}}</div>
            </div>
            <button @click='quanbu()'>删除</button>
            <button @click='huifu()'>恢复</button>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                ar: [
                    { name: "小明", age: '1', addre: "beijing", area: '胡同' }
                ]

            }
        },
        computed: {
            arList() {
                return this.ar.map(item => item.check= true);
            },
        },
        methods: {
            quanbu() {
                this.ar = this.ar.map(item => ({ ...item, check: false }));
            },
            huifu() {
                this.ar = this.ar.map(item => ({ ...item, check: true }));
            }

        }

    }
</script>