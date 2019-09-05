<template>
    <div>
        <van-button type="primary" @click="jia">点击这里加数在jjiajifeng里面显示</van-button>
        现在是{{number}}
        <router-link to="/jiajifeng">
            <button>跳转</button>
        </router-link>

    </div>
</template>
<script>
    import { mapState, mapMutations } from 'Vuex'
    import Vue from 'vue'
    import { Button } from 'vant'
    Vue.use(Button);
    export default {
        data(){
            return{
                number:1
            }
        },
        mounted(){
            this.number=Number(sessionStorage.getItem('number'))||1;  //是不是符合要求了？
            this.$store.dispatch('updateLoginStatus',this.number);
        },
        methods: {
            jia() {
                console.log(this.targetUser);
                let data = this.targetUser + 1;
                this.number+=1;
                this.$store.dispatch('updateLoginStatus',this.number);
                sessionStorage.setItem('number',this.number);
               // this.$store.dispatch('setGargetUser',5)
               // this.$store.commit('changeCity')
            }
        },
        computed: {
            ...mapState({ targetUser: state => state.targetUser })
        },
    }
</script>