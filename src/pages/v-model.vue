<template>
    <div class="about">
        <h1>自定义组件与v-model</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
        <br />
        <div class="parent">
            <p>我是父亲, 对儿子说： {{ sthGiveChild }}</p>
            <child v-model="sthGiveChild"></child>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import child from '@/components/child.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import utils from '../utils/index.js';
console.log('utils===', utils);
export default {
    name: 'v-model',
    data() {
        return {
            sthGiveChild: '给你100块'
        };
    },
    components: { child },
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        }
    },
    beforeCreate() {
        console.log('==v-model beforeCreate==');
    },
    created() {
        console.log('==v-model created==');
        this.getName();
        //console.log(getData);
        // getData({ name: '234' }).then(function(data) {
        //   console.log('data===', data);
        // });
        // getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
        //   console.log('data===', data);
        // });
    },
    beforeMount() {
        console.log('==v-model beforeMount==');
    },
    mounted() {
        console.log('==v-model mounted==');
    }
};
</script>

<style scoped lang="scss">
.about {
    background-color: #fff;
}

a {
    color: #42b983;
}
</style>
