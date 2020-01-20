<template>
    <div id="app">
        <throttle :time="5000" events="click">
            <button @click="onClick">click+1 {{ val }}</button>
        </throttle>
        <throttle :time="1000" events="click" :isDebounce="true">
            <button @click="onAdd">click+3 {{ val }}</button>
        </throttle>
        <throttle :time="3300" events="mouseleave" :isDebounce="true">
            <button @mouseleave.prevent="onAdd">click+3 {{ val }}</button>
        </throttle>
    </div>
</template>
<script>
import throttle from '@/components/throttle.vue';
export default {
    name: 'debounce-component',
    data() {
        return {
            val: 0
        };
    },
    components: { throttle },
    methods: {
        onClick() {
            this.val += 1;
            console.log('onClick val===', this.val);
        },
        onAdd() {
            this.val += 3;
            console.log('onAdd val===', this.val);
        }
    },
    mounted() {}
};
</script>
