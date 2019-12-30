<template>
    <div class="about">
        <h1>引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染。那么有哪些解决办法呢?</h1>
        <p>1.不使用scoped 省略（个人不推荐）</p>
        <p>2.在模板中使用两次style标签：</p>
        <p>3.穿透scoped >>></p>
        <userInfo></userInfo>
        <br />
        <br />
        <br />
        <br />
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
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
    name: 'scope',
    data() {
        return {};
    },
    components: { userInfo },
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        }
    },
    beforeCreate() {
        console.log('==scope beforeCreate==');
    },
    created() {
        console.log('==scope created==');
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
        console.log('==scope beforeMount==');
    },
    mounted() {
        console.log('==scope mounted==');
    }
};
</script>

<style scoped lang="scss">
.about {
    background-color: #fff;
    /*/deep/和>>>都不行,需要用::v-deep */
    ::v-deep .uinfo {
        color: #ff0000;
        font-size: 60px;
    }
}

a {
    color: #42b983;
}
</style>
