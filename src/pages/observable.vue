<template>
    <div id="app">
        <p>parent: {{ store.count }}</p>
        <button @click.prevent="handleAdd">父组件 - 加</button>
        <button @click.prevent="handleMinus">父组件 - 减</button>
        <child></child>
        <router-link to="/">to home</router-link><br />
    </div>
</template>
<script>
import child from '@/components/child3.vue';
import { store_observable, mutations } from '../vuex/store_observable';
export default {
    name: 'observable',
    data() {
        return {
            store: store_observable
        };
    },
    components: { child },
    methods: {
        handleAdd() {
            mutations.addCount();
        },
        handleMinus() {
            mutations.minusCount();
        }
    },
    mounted() {}
};
</script>
