<template>
    <div>
        <button style="width:100px;height:30px;border-radius:50%;" @click="shuaxing">刷新</button>
        <button style="width:30px;height:40px;background-color:red;">{{dA}}</button>

        <div style="width:100px;height:100px;background-color:red;">{{dB}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dA:1,
            dB:9
        }
    },
    methods:{
        shuaxing(){
            this.jiA()
            this.jiaN()

        },
        jiA(){
            return this.dA++
        },
        jiaN(){
            return this.dB--
        }
    }
}
</script>