<template>
    <div>
        <button @click='add'>换一批</button>
        <div v-for="(item,index) in count" :key='index'>{{item}} </div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        data() {
            return {
            }
        },
        computed: {
            count() {
                return this.$store.state.porpval;
            }
        },
        created() {
        },
        methods: {
            add() {
                this.$store.dispatch('actionIncrease')
            }
        },
        mounted() {
        },
    }
</script>