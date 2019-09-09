<template>
  <div>
    <!-- <input type="text" v-model="inpt_val" @input="clik_val">
    <div class="div" v-for="(item,index) in list" :class="{active:ide ==index}" :key="index">{{item.date}} <br>
      {{item.txt}}</div>
    <div v-for="(itm, index) in hourList" :key="itm">{{itm}}</div> -->
    <div class="city">
      <Search :list="cities"></Search> <!--  ///搜索 -->
      <List :letter="letter" :list="cities"></List> <!--  ///城市列表 -->
      <Alphabet @chang="handleLetterChang" :list="cities"></Alphabet> <!--   //A-Z  -->
    </div>
  </div>
</template>
<script>
  import Search from './zimu/Search'
  import List from './zimu/List'
  import Alphabet from './zimu/Alphabet'
  export default {
    data() {
      return {
        cities: [], // 城市列表
        letter: '',// A-Z
        fl: false,
        inpt_val: "",
        val: "",
        ename_: "",
        enam_: "",
        ena_: "",
        en_: "",
        list: [],
        ide: 0, //默认选择第一个
        hourList: []
      };
    },
    components: {
      Search,
      List,
      Alphabet
    },
    created: function () { //created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
      var dateObj = {};
      for (var i = 0; i < 5; i++) {
        dateObj = this.getDate(i); //把返回的日期赋值给对象
        let obj = {
          date: dateObj,
          txt: ''
        }
        if (i == 0) {
          obj.txt = '今天'
        } else if (i == 1) {
          obj.txt = '明天'
        } else {
          obj.txt = '周' + '日一二三四五六'.charAt(new Date(dateObj).getDay())
        }
        this.list.push(obj); //把对象添加到数组里面，然后渲染到页面
      }
      console.log(this.list)
      this.getHourData()
    },
    methods: {
      getCityInfo() {
        this.axius.get('/city/list').then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res) {
        this.cities = res.data.city
        console.log(res.data)
      },
      handleLetterChang(letter) { // 接受子组件传过来的
        //            console.log(letter)
        this.letter = letter
      },
      clik_val() {
      },
      getDate(n) {
        var ss = 24 * 60 * 60 * 1000; //一天的毫秒数86400
        var timestamp = new Date().getTime(); //获取当前时间戳
        var date1 = new Date(ss * n + timestamp) //加上n天的国际标准日期
        var newTime = date1.toLocaleString(); //把日期转换成2018/6/4 下午10:45:19 格式
        var arr = newTime.split(" "); //把2018/6/4提取出来
        var arr2 = arr[0].split('/'); //把年月日数字单独提出来
        // 年月日 arr2[x]  0  年 1月 2 日
        return arr2[1] + '-' + arr2[2]; //拼接成我们需要的格式返回
      },
      getHourData() {
        let data = []
        for (let h = 10; h < 19; h++) {
          if (h == 12 || h == 13 || h == 18) {
            data.push((h - 1) + ':30')
          }
          data.push(h + ':00')
        }
        this.hourList = data
      }
    },
    mounted() {
      this.getCityInfo()
    },
  };
</script>
<style scoped>
  .city {
    height: 400px;
  }
  .list {
    width: 100px;
    height: 500px;
    border: 2px solid red;
  }
  .list span {
    display: block;
  }
  input {
    width: 200px;
    height: 20px;
    border: 2px solid red;
  }
  .rig_conta {
    width: 10px;
    height: 500px;
    border: 2px solid black;
    position: fixed;
    right: 0;
    z-index: 9999;
  }
</style>