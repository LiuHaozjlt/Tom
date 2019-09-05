<template>
    <div>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="(item,index) in  employees" :key='index' :title="item.firstName" @click="change">
            </van-sidebar-item>
        </van-sidebar>
        <van-tag round v-for="(item,index) in users" :key='index'>{{item.name}} </van-tag>
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Sidebar, SidebarItem } from 'vant';
    import { Tag } from 'vant';
    import { Button } from 'vant';

    Vue.use(Button);
    Vue.use(Tag);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    export default {
        data() {
            return {
                navlist: '',
                activeKey: 0,
                employees: [
                    { firstName: "Bill"  },
                    { firstName: "George"  },
                    { firstName: "Thomas"  },
                    { firstName: "Gates"  },
                    { firstName: "Bush"  },
                    { firstName: "Carter" }
                ],
                users: [
                    { name: "刘备", age: 30 },
                    { name: "关羽", age: 25 },
                    { name: "张飞", age: 28 }
                ]
            };
        },
        created() {
        },
        methods: {
            change(index) {
                this.users[index].name = this.employees[index].lastName;
            },
            example1() {

            }
        },
    }
</script>