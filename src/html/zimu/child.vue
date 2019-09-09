<template>
  <div>
    <div>{{types}}</div>
    <button @click="changeValue">更改types值</button>
    <hr>
    数组：
    <ul>
      <li v-for="(item, index) in arrayList" :key="index"> {{ item.name }}</li>
    </ul>
    <hr>
    对象：
    <div>{{list.name}}</div>
    <slot name="title" text="slot的属性值">默认slot值</slot>
  </div>
</template>

<script>
export default {
  props: {
    types: {
      type: String,
      default: 'hello'
    },
    // 对象
    list: {
      type: Object,
      default: () => {}
    },
    //  数组
    arrayList: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      msg: '子组件'
    }
  },
  methods: {
    changeValue (e) {
      // 是会修改，但是会报错
      // this.types = '在子组件里更改的'
      // e.stopPropagation() // 阻止事件冒泡
      this.$emit('setValue')
    }
  }
}
</script>

<style  scoped>

</style>
