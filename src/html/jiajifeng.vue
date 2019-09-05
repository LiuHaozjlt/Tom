<template>
    <div>
        加数字：<div>{{number }}</div>
        <router-link to="/qiandao">
            <button>跳转</button>
        </router-link>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'Vuex'
    export default {
        data() {
            return {
                number:''
            }
        },
        created() {
            // this.$store.commit('count')



        },

        computed: {
            ...mapState({ targetUser: state => state.targetUser }),
            // targetUser() { return this.$store.getters.parameter }

        },
        methods: {

        },
        mounted() {
            let app = localStorage.mydata ? localStorage.mydata : '';
            this.number=sessionStorage.getItem('number');
            if(app !== ''){
                console.log("gaga",app)
                // this.$store.commit('jia',parseInt(app))

            }
        },
    }
</script>