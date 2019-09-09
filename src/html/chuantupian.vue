<template>
  <div>
    <div>
      <van-uploader  :after-read="afterRead">
        <img src="../assets/logo.png" class="img-class" ref="imgS"/>
        </van-uploader>
    </div>
  </div>
</template>
 <script>
  import Vue from 'vue';
  import { Uploader } from 'vant';
   Vue.use(Uploader);
  export default {
    data() {
      return {
        // fileSrc: undefined
      }
    },
    mounted() {

    },
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file.content);
        this.$refs.imgS.src = file.content
      }
    }
  }
</script>