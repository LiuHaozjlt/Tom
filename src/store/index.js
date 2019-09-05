import Vue from 'vue'
import Vuex from 'vuex'
import mock from 'mockjs'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    yigeshu: {
      num: 0
    },
    loginInfo: {
      account: '',
      password: ''
    },
    showLoading: false,
    porpval: [1, 2, 3, 5, 6, 7, 8],
    targetUser: 0
  },
  getters: {
    showLoading(state) {
      return state.showLoading;
    },
    parameter(state){
      console.log(this)

      return  state.targetUser
    }


  },
  mutations: {
    jia(state,data){
      // localStorage.setItem('mydata',JSON.stringify(data))
      state.targetUser = data
      console.log("sss",data)
    },

    get_total(state, value) {
      state.targetUser = parseInt(state.targetUser)
      state.targetUser = parseInt(state.targetUser) + value
      let lac = state.targetUser
      localStorage.setItem('value', lac)
    },
    changeCity(state, value) {
      // state.targetUser = parseInt(localStorage.getItem('value'))
      state.targetUser=Number(value);
      //我怀疑这个文件没生效   这么多报错
    },
    count(state,value){m
           state.targetUser = parseInt(localStorage.getItem('value'))
    },
    increment(state) {
      let code = []
      let sp = state.porpval
      let spl = sp.length
      for (var i = 0; i < spl; i++) {
        var index = Math.floor(Math.random() * spl);
        code.push(index)
      }
      state.porpval = code;
    },
    showLoading(state) {
      state.showLoading = true;
      setTimeout(() => state.showLoading = false, 3000);
    },
    hideLoading(state) {
      state.showLoading = false;
    },
    valueToken(state) {}
  },
  actions: {
    actionIncrease({
      commit
    }) {
      commit('increment')
    },
    setGargetUser(context, value) {
      context.commit('get_total', value)
    },
    updateLoginStatus(context,value){
      context.commit('changeCity',value)
    }
  }
})
