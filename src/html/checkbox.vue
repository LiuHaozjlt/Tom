<template>
    <div>
        <van-checkbox-group v-model="result">
            <!-- result跟每一个的name要对应，里面有哪几个的，就会选中哪几个   ok? 现在咋不能单选了  checkbox是多选框嗯 单选用radio 还有不明白的吗？
             -->
            <van-cell-group>
                <van-cell v-for="(item, index) in list" :key="index" :title="item.text">
                    <van-checkbox  slot="right-icon" :name="item.text"  v-model="item.John"  />
                </van-cell>
            </van-cell-group>
        </van-checkbox-group>
        <van-button type="default"   @click="webFront()">默认按钮</van-button>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Cell, CellGroup } from 'vant';
    import { Checkbox, CheckboxGroup } from 'vant';
    import { Button } from 'vant';
    import { Field } from 'vant';
    Vue.use(Field);
    Vue.use(Button);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Checkbox).use(CheckboxGroup);
    export default {
        data() {
            return {
                familyName:false,
                list: [{ text: '是', John: false }, { text: '的', John: false }, { text: '人', John: false }],
                testarr: false,
                result: [],
                it: []
            }
        },
        watch: {
            "webFront": function () {
                // if (this.checked) {
                //     this.webFront();
                // }
            }
        },
        computed: {

        },
        methods: {
            toggle(index) {
                this.$refs.checkboxes[index].toggle();
            },
            webFront() {
               this.testarr  =  true;
               for(var i=0;i<this.list.length;i++){
                //    this.list[i].John=true;
                this.result.push(this.list[i].text);
               }
            }
        },
        mounted() {
        },
    }
</script>