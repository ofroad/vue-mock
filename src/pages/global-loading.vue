<template>
    <div class="about">
        <h1>vue中使用jsonp</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="login">to login</router-link>
        <div class="wrap"></div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
    name: 'global-loading',
    data() {
        return {};
    },
    components: {},
    methods: {
        startJsonp() {},
        startJsonp2() {}
    },
    beforeCreate() {
        //注释5
        /*
    注释6
    */
        console.warn('警告2');
    },
    created() {}
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
