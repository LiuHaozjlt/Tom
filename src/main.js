// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueAMap from 'vue-amap'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import publi_css from './css/dlu.css'
import mock from 'mockjs'
import axius from 'axios'
import vant from 'vant';
import 'vant/lib/index.css';
import {
  Alert,
  Confirm,
  Toast
} from 'wc-messagebox'
import 'wc-messagebox/style.css'
import store from './store'
Vue.use(store)
Vue.use(vant)
Vue.use(ElementUI)
Vue.use(VueAMap)
Vue.prototype.axius = axius
Vue.prototype.VueAMap = VueAMap
Vue.prototype.mock = mock
// VueAMap.initAMapApiLoader({
//   key: 'c757e07cf2be665408ef5fb8c0dc4912',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
//     'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.Geocoder'
//   ],
//   v: '1.4.4'
// });
VueAMap.initAMapApiLoader({
  key: 'c757e07cf2be665408ef5fb8c0dc4912',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    'AMap.Geolocation'
  ],
  uiVersion: '1.0'
})
let AlertOptions = {
  title: '', // 默认标题为 '提示'
  btn: {
    text: '',
    style: {} // 可以通过 style 来修改按钮的样式, 比如说粗细, 颜色
  }
}
let ConfirmOptions = {
  title: '',
  style: {}, // 同时应用在 yes, no 两个按钮上面的样式
  yes: {
    text: '确定',
    style: {}
  },
  no: {
    text: '取消',
    style: {}
  }
}
let duration = {
  durtaion: 200,
  location: 'center|top ' // 如果不传递, 默认在底部, 如果传递, 就必须要有值
}
Vue.use(Alert, AlertOptions)
Vue.use(Confirm, ConfirmOptions)
Vue.use(Toast, duration)
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{


  let pathList = [
    "/blank",
    "/",
  ];
  if (pathList.includes(to.path)) {
    next();
    return;
  }
  let userid = localStorage.getItem('userId');
  if(!userid && to.meta && to.meta.requiresAuth) {

    next({ path: '/' });
    return;
  }

  if (userid && (!to.meta || !to.meta.requiresAuth)) {
    next({ path: '/blank' });
    return;
  }
  next()
})
// router.beforeEach((to, from, next) => {
//   if(to.meta.auth) { //是否验证
//       if(window.localStorage.access_token) { //是否登录
//           next()
//       } else { //未登录则跳转到登录页面
//           next({
//               name: 'login',
//               query: {
//                   redirect: to.fullPath
//               }
//           })
//       }
//   } else {
//       next()
//   }
// })
// 页面初始化存值
localStorage.setItem("title", "测试标题");
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
