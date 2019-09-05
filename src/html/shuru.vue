<template>
    <div>
        <input v-model="inputValue" type="text"><button @click="data=inputValue">搜索</button>
        <button @click="deleteValue">清除记录</button>
        <div style="width:300px;height:300px;border:2px solid red">{{data}}</div>


    <van-tabs v-model="active" >
            <van-tab title="标签 1">
                    <van-tabs type="card">
                            <van-tab title="标签 1">内容 1</van-tab>
                            <van-tab title="标签 2">内容 2</van-tab>
                            <van-tab title="标签 3">内容 3</van-tab>
                          </van-tabs>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
          </van-tabs>
        </div>

</template>


<script>
    import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
export default {
    data() {
    return {
      active: 2,
      inputValue:'',
      data:'',

    };
  },
  methods:{
      deleteValue(){
          this.data='';t
      }
  }

}
</script>