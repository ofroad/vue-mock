<template>
    <div id="app">
        <!-- //此处监听了两个事件，可以在B组件或者C组件中直接触发 -->
        <child1 :p-child1="child1" :p-child2="child2" v-on:test1="onTest1" v-on:test2="onTest2"> </child1>
    </div>
</template>
<script>
import Child1 from './Child1.vue';
export default {
    data() {
        return {};
    },
    components: { Child1 },
    methods: {
        onTest1() {
            console.log('test1 running...');
        },
        onTest2() {
            console.log('test2 running');
        }
    }
};
</script>
