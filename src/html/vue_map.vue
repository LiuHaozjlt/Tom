<template>
  <div style="height: 50%">
    <div class="amap-wrapper">
      <div class="amap-page-container">
        <el-amap class="amap-box" vid="map" :zoom="zoom" :center="center" :plugin="plugin">
          <el-amap-marker vid="marker" :label="label" :position="center" style="color: red;">
          </el-amap-marker>
        </el-amap>
      </div>
    </div>
    <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :disabled=false :options="selec" />
    </van-dropdown-menu>
    <van-picker :columns="columns" /> -->
    <div>
      当前的位置是：<span>{{label.content}}{{lng}} {{lat}}</span>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { DropdownMenu, DropdownItem } from 'vant';
  Vue.use(DropdownMenu).use(DropdownItem);
  import { Picker } from 'vant';
  Vue.use(Picker);
  export default {
    data() {
      let vm = this;
      return {
        zoom: 16,
        center: [121.406051, 31.179695],
        label: {
          content: '',
          offset: [10, 12]
        },
        lng: 0,
        lat: 0,
        plugin: [{
          // {
          // 	pName: 'ToolBar',//工具条插件
          // 	position:'LB',
          // },
          // {
          // 	pName: 'MapType',//卫星与地图切换
          // 	defaultType: 0,
          // 	showTraffic:true,//实时交通图层
          // },
          // {
          // 	pName:'OverView',
          // 	isOpen:true//鹰眼是否打开
          // },
          // {
          // 	pName:'Scale'
          // },
          // {
          // 	pName:'Geolocation',//定位插件
          // 	showMarker:true, // 定位成功后显示标志
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 100, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, // 显示定位按钮，默认：true
          buttonPosition: 'RB', // 定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: 'all',
          pName: 'Geolocation',
          events: {
            init(o) {
              //定位成功 自动将marker和circle移到定位点
              o.getCurrentPosition((status, result) => {
                console.log(result)
                vm.center = [result.position.lng, result.position.lat];
                vm.label.content = result.formattedAddress;
                 vm.lng = result.position.lng;
                vm.lat = result.position.lat;
                var geocoder = new AMap.Geocoder({
                  radius: 1000,
                  extensions: 'all'
                })
                geocoder.getAddress([vm.lng, vm.lat], function (status, result) {
                   if (status === 'complete' && result.info === 'OK') {
                    if (result && result.regeocode) {
                      vm.loaded = true
                      vm.label.content = result.regeocode.formattedAddress
                      localStorage.setItem('val', vm.label.content)
                      vm.$nextTick()
                    }
                  }
                })
                vm.$nextTick()
              })
            }
          }
        }
        ],
        columns: [],
        value1: '',//
        valuequ: '',
        value2: 'a',
        selec: [],
        selec2: [],
        option1: [
          { text: '全部商品', value: 0 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
        option3: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
      }
    },
    methods: {
    }
  };
</script>
<style>
  .van-picker-column__wrapper {
    transform: translate3d(0px, 0px, 0px) !important;
  }
   .amap-marker-label {
    width: 100px;
    word-wrap: break-word !important;
    white-space: inherit !important;
  }
   .amap-box {
    height: 30px;
  }
   .a {
    width: 20px;
    height: 20px;
    background: red;
    position: absolute;
    bottom: 75px;
    text-align: center;
  }
   .b {
    margin-left: 45px;
  }
   .el-vue-amap-container,
  .el-vue-amap-container .el-vue-amap {
    height: 100vh;
  }
   .curre_site {
    width: 140px;
    height: 20px;
    font-size: 14px;
    position: absolute;
    bottom: 200px;
  }
</style>
<style type="text/css">
  .biaozhu {
    width: 143px;
    height: 20px;
    border: 2px solid red;
    position: absolute;
    top: 4px;
    left: 29px;
  }
</style>