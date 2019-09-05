<template>
  <div>
    <group>      
      
      <x-address   :title="title" v-model="value" :list="addressData"     class="colA"  ></x-address>     
    </group>  
    <!-- <button @click="handlerClick">地址</button> -->
    <button>二级菜单</button>
    <div class="popsvalue">
     {{renderPorpval}}
    </div>
    
    <demoa   :porpval="renderPorpval"> </demoa>

    <div class="tit"  slot="a"></div>

    <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
  
  </div>
</template>

<i18n>
select address:
  zh-CN: 选择地址
</i18n>

<script>
import { Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from 'vux'
import demoa from '../../components/demo1'
 import {mapGetters} from "vuex"

// console.log(ChinaAddressV4Data);

export default {
  components: {
    Group,
    XAddress,
    XButton,
    Cell,
    demoa
  },
  computed:{
    ...mapGetters(["renderPorpval"])
  },
  data () {
    return {
      // porpval:"科比",
      //porpval:[1,2,3,5,6,7,8],
      title: '地址',
      value_0_1: [],
      value: [],
      title2: '设置值',
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区'],
      showAddress: false,
      data:''
    }
  },
  props:{
   
    
   },
  methods: {
   
    doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    handlerClick(){
      console.log('show')
      this.showAddress = true
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }, 
  },
  mounted(){
   
    // console.log("ddd",this.porpval)
  }


}

</script>

<style>
  .scroller-item-selected{
     color:red!important;
  }

</style>