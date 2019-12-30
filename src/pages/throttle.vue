<template>
    <div class="about">
        <h1>函数节流</h1>
        <p>规定在一个单位时间内，只能触发一次函数，如果这个单位时间内触发多次函数，只有一次生效。</p>
        <p>典型的案例就是鼠标不断点击触发，规定在n秒内多次点击只生效一次。</p>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
        <button @click="throttle">按钮</button>
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
    name: 'throttle',
    data() {
        return {
            //节流函数返回的方法
            thr: null
        };
    },
    components: {},
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        },
        clk() {
            console.log('点击了');
        },
        throttle: function() {
            //执行
            this.thr();
        }
    },
    beforeCreate() {
        console.log('==throttle beforeCreate==');
    },
    created() {
        console.log('==throttle created==');
        this.getName();
        //console.log(getData);
        // getData({ name: '234' }).then(function(data) {
        //   console.log('data===', data);
        // });
        // getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
        //   console.log('data===', data);
        // });
        this.thr = utils.throttle(this.clk, 10000);
    },
    beforeMount() {
        console.log('==throttle beforeMount==');
    },
    mounted() {
        console.log('==throttle mounted==');
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
