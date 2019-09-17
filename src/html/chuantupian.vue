<template>
  <div>
    我现在的位置是：<div>{{valadr}}</div>
    <!-- <div class="nav">
      <mt-button   @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
      <mt-button   @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
      <mt-button   @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>
    </div>
     <div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
     </div> -->
    <!-- <div style="overflow-x: hidden;">
      <van-row style="background:red" type="flex" gutter="20">
        <van-col span="12">
          <div style="background:black;padding: 10px;"></div>
        </van-col>
        <van-col span="12">
          <div style="background:black;padding: 10px;"></div>
        </van-col>
      </van-row>
       <van-row style="background:red;margin-top:10px;" type="flex" gutter="20">
        <van-col span="8">
          <div style="background:black;padding: 10px;"></div>
        </van-col>
        <van-col span="8">
          <div style="background:black;padding: 10px;"></div>
        </van-col>
        <van-col span="8">
          <div style="background:black;padding: 10px;"></div>
        </van-col>
      </van-row>
       <van-row style="background:red;margin-top: 10px;" type="flex" gutter="20">
        <van-col span="12">
          <div style="background:black;padding: 10px;"></div>
        </van-col>
        <van-col span="12">
          <div style="background:black;padding: 10px;"></div>
        </van-col>
      </van-row>
    </div> -->
    <!-- <div>
      <van-uploader :after-read="afterRead" :disabled="isCan">
        <img src="../assets/logo.png" class="img-class" ref="imgS" />
      </van-uploader>
    </div> -->
    <!-- <div>
      <van-collapse v-model="activeNames" class="test" :border="false">
        <van-collapse-item name="1">
          <div slot="title">
            标题1
            <div>
                <img src="../assets/logo.png" width="40" alt="" srcset="">
            </div>
          </div>
          <div slot="title">标题2
               <div>
                  <img src="../assets/logo.png" width="40" alt="" srcset="">
              </div>
          </div>
          <div slot="title">标题3</div>
          <div slot="title">标题4</div>
          <div slot="right-icon"></div>
         <div>内容</div>
        </van-collapse-item>
      </van-collapse>
    </div> -->
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Uploader } from 'vant';
  import { Collapse, CollapseItem } from 'vant';
  import { TabContainer, TabContainerItem } from 'mint-ui';
  import { Row, Col } from 'vant';
  import { Cell } from 'mint-ui';
  Vue.component(Cell.name, Cell);
  Vue.use(Row).use(Col);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.use(Collapse).use(CollapseItem);
  Vue.use(Uploader);
  export default {
    data() {
      return {//
        isCan: true,
        activeNames: [],
        valadr:'',
        active: 'tab-container1',
      }
    },
    mounted() {
      this.valadr = localStorage.getItem("val")
      let userid = localStorage.getItem("userId");
      // debugger;
      if (userid) {
        this.isCan = false
      }
    },


    methods: {
      afterRead(file) {
        this.$refs.imgS.src = file.content
      }
    }
  }
</script>
<style scoped>
  .test /deep/ .van-cell--clickable:active {
    background-color: #ffffff;
  }

  .test /deep/ .van-cell {
    padding: 10px 15px 0px;
  }

  .test /deep/ .van-collapse-item__content {
    padding: 0px 15px;
    color: #323233;
  }

  .test /deep/ .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
</style>