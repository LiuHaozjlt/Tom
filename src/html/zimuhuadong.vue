<template>
<div>
<input type="text" v-model="inpt_val" @input="clik_val">

</div>

</template>
<script>
export default {
  data() {
    return {
      fl: false,
      inpt_val: "",
      val: "",
      ename_: "",
      enam_: "",
      ena_: "",
      en_: ""
    };
  },
  methods: {
    clik_val() {

    },

  },
  mounted() {

  }
};
</script>

<style scoped>
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


