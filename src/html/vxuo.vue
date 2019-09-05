<template>
    <div>
        vvvvvvvvvvvvv
        <div @click="tok">{{$store.state.token}} </div>


    </div>
</template>

<script>

    export default {
        data() {
            return {
                yigezhi: '11'

            }
        },

        methods: {
            tok() {
                this.$store.commit('save',this.yigezhi)
            //    console.log()

            }
        }
    }
</script>