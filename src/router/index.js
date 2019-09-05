import Vue from 'vue'
import Router from 'vue-router'
import dlu from '../html/dlu'
import yzsjhm from '../html/yanzenshoujihao.vue'
import ljqy from '../html/liji_qiye.vue'
import jrqy from '../html/jiaruqiye.vue'
import cjqy from '../html/chuangjianqiye.vue'
import demoA from '../html/729.vue'
import demoB from '../html/730.vue'
import demoC from '../html/demoC.vue'
import vxuo from '../html/vxuo.vue'
import its from '../html/iS.vue'
import xiaoshou from '../html/xiaoshou/xiaoshou'
import tab_publc from '../html/xiaoshou_public/tab_publc.vue'
import tab from '../html/xiaoshou/xiaoshou_comp/tab'
import tab_b from '../html/xiaoshou/xiaoshou_comp/tab_b'
import tab_c from '../html/xiaoshou/xiaoshou_comp/tab_c'
import cascader from '../html/xiaoshou/cascader.vue'
import vue_m from '../html/vue_map.vue'
import zimuhuadong from '../html/zimuhuadong.vue'
import test from '../test/index.vue'
import testA from '../html/testA.vue'
import jingdt from '../html/jingdutiao.vue'
import chuanicon from '../html/chuantupian.vue'
import checkbox from '../html/checkbox.vue'
import qiandao from '../html/qiandao.vue'
import slider from '../html/slider.vue'
import huanyipi from '../html/huanyipi.vue'
import jiajifeng from '../html/jiajifeng.vue'
import gongge from '../html/gongge.vue'
import quyu from '../html/quyu.vue'
import tree from '../html/tree.vue'
import testapi from '../html/apitest.vue'
import qiehuantitle from '../html/qiehuantitle.vue'
import tandaojishi from '../html/tandaojishi.vue'
import tagtitle from '../html/tagtitle.vue'
import shuru from '../html/shuru.vue'
import riqi from '../html/riqi.vue'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/vxuo',
      name: 'vxuo',
      component: vxuo,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/quyu',
      name: 'quyu',
      component: quyu
    },
    {
      path: '/gongge',
      name: 'gongge',
      component: gongge
    },
    {
      path: '/jiajifeng',
      name: 'jiajifeng',
      component: jiajifeng,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider
    },
    {
      path: '/testapi',
      name: 'testapi',
      component: testapi,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tree',
      name: 'tree',
      component: tree
    },
    {
      path: '/huanyipi',
      name: 'huanyipi',
      component: huanyipi
    },
    {
      path: '/its',
      name: 'its',
      component: its
    },
    {
      path: '/qiandao',
      name: 'qiandao',
      component: qiandao,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/qiehuantitle',
      name: 'qiehuantitle',
      component: qiehuantitle,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/jingdt',
      name: 'jingdt',
      component: jingdt
    },
    {
      path: '/testA',
      name: 'testA',
      component: testA
    },
    {
      path: '/chuanicon',
      name: 'chuanicon',
      component: chuanicon
    },
    {
      path: '/demoB',
      name: 'demoB',
      component: demoB
    },
    {
      path: '/demoA',
      name: 'demoA',
      component: demoA
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }, {
      path: '/cascader',
      name: 'cascader',
      component: cascader
    },
    {
      path: '/',
      name: 'dlu',
      component: dlu
    },
    {
      path: '/yzsjhm',
      name: 'yzsjhm',
      component: yzsjhm
    },
    {
      path: '/ljqy',
      name: 'ljqy',
      component: ljqy
    },
    {
      path: '/jrqy',
      name: 'jrqy',
      component: jrqy
    },
    {
      path: '/cjqy',
      name: 'cjqy',
      component: cjqy
    },
    {
      path: '/xiaoshou',
      name: 'xiaoshou',
      component: xiaoshou,
      children: [{
          path: '/tab',
          name: 'tab',
          component: tab
        },
        {
          path: '/tab_b',
          name: 'tab_b',
          component: tab_b
        },
        {
          path: '/tab_c',
          name: 'tab_c',
          component: tab_c
        },
        {
          path: '/tab_publc',
          name: 'tab_publc',
          component: tab_publc
        }
      ]
    },
    {
      path: '/vue_m',
      name: 'vue_m',
      component: vue_m,
      title: 'dddddddddddddddddddddddddddddd',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/zimuhuadong',
      name: 'zimuhuadong',
      component: zimuhuadong,
    },
    {
      path: '/tandaojishi',
      name: 'tandaojishi',
      component: tandaojishi,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tagtitle',
      name: 'tagtitle',
      component: tagtitle
    },
    {
      path: '/shuru',
      name: 'shuru',
      component: shuru
    },
    {
      path: '/riqi',
      name: 'riqi',
      component: riqi
    }
  ]
})
