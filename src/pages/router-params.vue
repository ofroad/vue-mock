<template>
    <div class="about">
        <h1>路由组件传参--使用 props 将组件和路由解耦：</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="login">to login</router-link>
        <div class="wrap">
            <p>Hello,</p>
            <h2 class="hello">name: {{ name }}</h2>
            <p>$attrs:{{ $attrs }}</p>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
    name: 'router-params',
    data() {
        return {};
    },
    props: {
        name: {
            type: String,
            default: 'Vue!'
        }
    },
    components: {},
    methods: {},
    beforeCreate() {
        //注释5
        /*
    注释6
    */
        console.warn('警告2');
    },
    created() {},
    mounted() {
        console.log('this.$attrs===', this.$attrs);
    }
};
</script>

<style scoped lang="scss">
.about {
    background-color: #fff;
    color: #ff0000;
}

a {
    color: #42b983;
}
.wrap {
    height: 800px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.box {
    padding: 10px;
}
</style>
