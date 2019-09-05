<template>
  <div class="dlu">
    <div>
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
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        account: '',
        password: ' '
      };
    },
    created() {
    },
    methods: {
      login() {


        localStorage.setItem("userId", this.account);
        if(this.account==="" || this.password===""){

          this.$router.push({ path: '/tree' })
        }else{

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