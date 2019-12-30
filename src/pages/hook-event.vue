<template>
    <div class="about">
        <h1>函数节流</h1>
        <p>规定在一个单位时间内，只能触发一次函数，如果这个单位时间内触发多次函数，只有一次生效。</p>
        <p>典型的案例就是鼠标不断点击触发，规定在n秒内多次点击只生效一次。</p>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
        <!-- 使用 @hook:mounted="doSomething" 监听子组件的生命周期-->
        <userInfo @hook:mounted="doSomething"></userInfo>
    </div>
</template>
<script>
// @ is an alias to /src
import userInfo from '@/components/userInfo.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import utils from '../utils/index.js';
console.log('utils===', utils);
export default {
    name: 'hook-event',
    data() {
        return {};
    },
    components: { userInfo },
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        },
        doSomething() {
            console.log('userInfo  has mounted');
        },
        dos() {
            const timer = setInterval(() => {
                // 某些定时器操作
                console.log('setInterval fun');
            }, 500);
            // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
            //绑定组件的beforeDestroy事件，在组件的beforeDestroy周期会执行此事件对应处理方法
            //$once只绑定一次
            this.$once('hook:beforeDestroy', () => {
                clearInterval(timer);
            });
        }
    },
    beforeCreate() {
        console.log('==hook-event beforeCreate==');
    },
    created() {
        console.log('==hook-event created==');
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
        console.log('==hook-event beforeMount==');
    },
    mounted() {
        console.log('==hook-event mounted==');
        this.dos();
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
