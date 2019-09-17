<template>
  <div class="dlu">
    <div>
      <button @click="yuYan">切换语言</button>
      <div class="logo">
        <img src="" alt="">
      </div>
      <div class="zhanghao_mima">
        <div>
          <span>账号</span>
          <input type="text" v-model='account' placeholder="请填写手机号码">
        </div>
        <div>
          <span>密码</span>
          <input type="text" v-model='password' placeholder="输入密码">
        </div>
      </div>
      <div class="denglu" @click="login">登录</div>
      <router-link to="/yzsjhm">
        <div class="yanzhenma" @click="setvalue()">使用验证码登录</div>
      </router-link>
      <div style="font-size: 30px;" @click="showPopup">{{$t('dlu.test')}}</div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Dialog } from 'vant';
  Vue.use(Dialog);
  export default {
    data() {
      return {
        account: '',
        password: ' ',
        show: false
      };
    },
    components: {
      [Dialog.Component.name]: Dialog.Component
    },
    created() {
    },
    methods: {
      yuYan() {
        if(this.$i18n.locale=="en-US"){
          this.$i18n.locale="zh-CN"
        }else{
          this.$i18n.locale="en-US"
        }
      },
      showPopup() {
        Dialog.confirm({
          title: '标题',
          message: '弹窗内容',
          cancelButtonText: this.$t('dlu.btn1'),
          confirmButtonText: "登录"
        }).then(() => {
          // on confirm
          Dialog.close();
        }).catch(() => {
          // on cancel
          this.$router.push({ path: "/demoA" })
        });
      },
      login() {
        localStorage.setItem("userId", this.account);
        if (this.account === "" || this.password === "") {
          this.$router.push({ path: '/tree' })
        } else {
          this.$router.push({ path: '/vue_m' })
        }
      },
    },
    mounted() {
    },
  };
</script>
<style>
</style>