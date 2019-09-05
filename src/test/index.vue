<template>
    <div>
        <el-input style="width:100px" v-model="value"></el-input>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    },
    watch:{
        value(val){
            alert('ok')
        }
    },
    methods:{
        change(){
            // 普通的函数
            function name(){
                // 函数体
            }

            // ES6箭头函数
            ()=>{
                // 函数体，不会改变this指向
            }
        }
    }
}
</script>

