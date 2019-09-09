<template>
    <div class="list">
        <li class="item"
            :ref="item"
             @click="handeClick"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend= "handleTouchEnd"
             v-for="item of letter"
             :key="item">{{item}}</li>
    </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      touchstart: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.list) { // 循环A-Z
        letter.push(this.list[i].initial)
      }
      return letter
    }
  },
  methods: {
    handeClick (e) {
      this.$emit('chang', e.target.innerText) // 传给父组件City
    },
    handleTouchStart () {
      // 手指放上
      this.touchstart = true
    },
    handleTouchMove (e) {
      // 手指移动
      if (this.touchstart) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 到蓝色头部的距离
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('chang', this.letter[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      // 手指离开
      this.touchstart = false
    }
  }
}
</script>

<style scoped>
.list{
  display: flex;
  flex-direction:column;
  justify-content: center;
  position:absolute;
  top: 1.58rem;
  right: 30px;
  bottom: 0;
  width: .4rem;
}

.item{
  line-height:20px;
  text-align: center;
  color: #000;
  list-style:none;
}

</style>
