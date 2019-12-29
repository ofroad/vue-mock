<template>
    <div class="about">
        <h1>This is an list page换个地方好该防护等级放假吗8567867光华科技法规及恢复规划</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/detailpage">to detailpage</router-link><br />
        <router-link to="/contact">to contact</router-link>
        <userInfo></userInfo>
    </div>
</template>
<script>
// @ is an alias to /src
import userInfo from '@/components/userInfo.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
    name: 'listpage',
    components: { userInfo },
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        }
    },
    beforeCreate() {
        console.log('==listpage beforeCreate==');
    },
    created() {
        console.log('==listpage created==');
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
        console.log('==listpage beforeMount==');
    },
    mounted() {
        console.log('==listpage mounted==');
    },
    activated() {
        console.log('==listpage activated==');
    },
    deactivated() {
        console.log('==listpage deactivated==');
    },
    beforeDestroy() {
        console.log('==listpage beforeDestroy==');
    },
    destroyed() {
        console.log('==listpage destroyed==');
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
</style>
