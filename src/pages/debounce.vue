<template>
    <div class="about">
        <h1>函数防抖</h1>
        <p>在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。</p>
        <p>典型的案例就是输入框搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，则重新计时。</p>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
        <input type="text" @input="debounce" />
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import utils from '../utils/index.js';
console.log('utils===', utils);
export default {
    name: 'debounce',
    data() {
        return {
            //防抖函数返回的方法
            fd: null
        };
    },
    components: {},
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        },
        search() {
            console.log('开始搜索');
        },
        debounce: function() {
            //执行
            this.fd();
        }
    },
    beforeCreate() {
        console.log('==debounce beforeCreate==');
    },
    created() {
        console.log('==debounce created==');
        this.getName();
        //console.log(getData);
        // getData({ name: '234' }).then(function(data) {
        //   console.log('data===', data);
        // });
        // getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
        //   console.log('data===', data);
        // });
        this.fd = utils.debounce(this.search, 2000);
    },
    beforeMount() {
        console.log('==debounce beforeMount==');
    },
    mounted() {
        console.log('==debounce mounted==');
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
