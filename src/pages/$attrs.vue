<template>
    <div id="app">
        <!-- //此处监听了两个事件，可以在B组件或者C组件中直接触发 -->
        <child1 name="tom" :p-child1="child1" :p-child2="child2" v-on:test1="onTest1" v-on:test2="onTest2"> </child1>
    </div>
</template>
<script>
import child1 from '@/components/Child1.vue';
export default {
    name: 'attrs',
    data() {
        return {
            child1: 'child1',
            child2: 'child2'
        };
    },
    components: { child1 },
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
