<template>
    <div>
        接口数据

    </div>
</template>

<script>
    import axius from 'axios'
    var age = {

    }

    export default {
        created() {

            axius.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video', {
                params: {
                    data:{



                    }
                }
            }).then(res => {

            }).catch(err => console.log('没数据'))
        },
        mounted() {

        },
    }
</script>