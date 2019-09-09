<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area"
                v-for="item in list"
                :ref="item.initial"
                :key="item.initial">
                <div class="title border-topbottom">{{item.initial}}</div>
                <ul class="item-list">
                    <li class="item border-bottom"
                         v-for="(listInner, index) in item.list"
                          :key="index"
                    >{{listInner.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    hot: Array,
    list: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () { // 监听列表滚动事件 A-Z
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped>
.list{
  overflow: hidden;
  position:absolute;
  top: 46px;
  left:0;
  right:0;
  bottom:0;
}

.title{
  height: 17px;
  background: #eee;
  padding-left: .2rem;
  color: #666;
  font-size: .26rem;
}
.button-list{
  overflow:hidden;
  padding: .1rem .6rem .1rem .1rem;
}

.button-wrapper{
  float:left;
  width:33.33%;
}

.button{
  margin: .1rem;
  padding: .1rem 0;
  text-align: center;
  border: .02rem solid #ccc;
  border-radius: .06rem;
}

.item{
  line-height: 20px;
  color:#212121;
  padding-left: .2rem;
  font-size: .28rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
