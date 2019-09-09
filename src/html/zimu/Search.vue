<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="serach-item border-bottom" v-show="!hasNoData" >
                  <div class="title">{{letterName}}</div>
                    <ul>
                        <li class="serach-item border-bottom" v-for="item in listItem" :key="item.id">
                      {{item.name}}</li>
                    </ul>
                  </li>
                <li v-show="hasNoData" class="serach-item border-bottom">没有搜索到匹配的数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    list: Array
  },
  data () {
    return {
      keyword: '',
      listItem: [],
      timer: null,
      letterName: ''
    }
  },
  computed: {
    hasNoData () {
      return !this.listItem.length // 没有搜索的条件是否显示
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) { // 清空
        this.listItem = ''
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        const that = this
        for (let i in this.list) {
          this.list[i].list.forEach((value) => { // 匹配搜索的条件
            let py = this.keyword.charAt(0).toUpperCase() + this.keyword.slice(1)
            if (value.pinyin.indexOf(py) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
              that.letterName = that.list[i].initial
            }
          })
        }
        this.listItem = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped>
.search{
    height: 46px;
    padding: 5px 15px;
    background: #03A9F4;
}
.search-input{
    box-sizing: border-box;
    width: 100%;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: .06rem;
    padding: 15px;
    color: #666;
}

.search-content{
   z-index: 1;
    overflow:hidden;
    position:absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
}

    .serach-item{
          line-height: 24px;
        padding-left: 15px;
        color: #666;
        background: #fff;
        list-style: none;
    }
    .title{
  height: 23px;
    background: #eee;
    padding-left: .2rem;
    color: red;
    font-size: 14px;
}

</style>
