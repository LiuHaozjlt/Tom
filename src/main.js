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
import './assets/iconfont/iconfont.css'
import Mint from 'mint-ui'
import VueI18n from 'vue-i18n'

import 'mint-ui/lib/style.css'


import {
  Alert,
  Confirm,
  Toast
} from 'wc-messagebox'
import 'wc-messagebox/style.css'
import store from './store'
import LyTab from 'ly-tab'
Vue.use(VueI18n)

Vue.use(LyTab)
Vue.use(store)
Vue.use(vant)
Vue.use(Mint);
Vue.use(ElementUI)
Vue.use(VueAMap)
Vue.prototype.axius = axius
Vue.prototype.VueAMap = VueAMap
Vue.prototype.mock = mock
const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh.js'), // 中文语言包
    'en-US': require('./common/lang/en.js') // 英文语言包
  }
})


if (process.env.NODE_ENV === 'development') {
  require('./mock') // simulation data
}

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
  location: 'center|top '
}
Vue.use(Alert, AlertOptions)
Vue.use(Confirm, ConfirmOptions)
Vue.use(Toast, duration)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  let pathList = [
    "/blank",
    "/",
  ];
  if (pathList.includes(to.path)) {
    next();
    return;
  }
  let userid = localStorage.getItem('userId');
  if (!userid && to.meta && to.meta.requiresAuth) {
    next({
      path: '/'
    });
    return;
  }
  if (userid && (!to.meta || !to.meta.requiresAuth) && to.path != "/chuanicon") {
    next({
      path: '/blank'
    });
    return;
  }
  if (!userid && (to.path !== "/demoA" && to.path !== "/demoB")) {
    next({
      path: '/'
    });
    return;
  }
  next()
})

localStorage.setItem("title", "测试标题");
new Vue({
  el: '#app',
  i18n, // 不要忘记
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
