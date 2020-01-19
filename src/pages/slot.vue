<template>
    <div id="app">
        <childa>
            <slot>第一个slot</slot>
            <div>我是传给子组件的slot的内容11</div>
            <h2 slot="header">头部在这</h2>
            <div slot="footer">尾部在这</div>
            <div>我是传给子组件的slot的内容12</div>
            <!-- 作用域插槽 -->
            <template slot="scopeaaa" slot-scope="slotProp">
                {{ slotProp.user123.firstName }}
            </template>
        </childa>

        <br />
        <p>以下是新语法渲染的</p>
        <!-- v2.6.0新语法 -->
        <childb>
            <template v-slot>
                <!--此处的v-slot等同于 v-slot:default-->
                <div>我是传给子组件的slot的内容11</div>
                <div>我是传给子组件的slot的内容12</div>
            </template>
            <template v-slot:header>
                <h2>头部在这</h2>
            </template>
            <template v-slot:footer>
                <div>尾部在这</div>
            </template>
            <!-- <template v-slot:scopebbb="slotProp">
                {{ slotProp.user123.firstName }}
            </template> -->

            <!--用对象解构直接拿到user123-->
            <template v-slot:scopebbb="{ user123 }">
                {{ user123.firstName }}
            </template>
        </childb>
    </div>
</template>
<script>
import childa from '@/components/slot-childa.vue';
import childb from '@/components/slot-childb.vue';
export default {
    name: 'slota',
    data() {
        return {};
    },
    components: { childa, childb },
    methods: {},
    mounted() {}
};
</script>
