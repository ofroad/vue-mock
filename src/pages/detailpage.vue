<template>
    <div class="about">
        <h1>This is an detailpage page换个地方好该防护等级放假吗8567867光华科技法规及恢复规划</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import { mapState } from 'vuex';
export default {
    name: 'detailpage',
    data() {
        return {};
    },
    computed: {
        ...mapState(['from'])
    },
    components: {},
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        }
    },
    beforeCreate() {
        console.log('==detailpage beforeCreate==');
    },
    created() {
        console.log('==detailpage created==');
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
        console.log('==detailpage beforeMount==');
    },
    mounted() {
        console.log('==detailpage mounted==');
    },
    activated() {
        console.log('==detailpage activated==');
    },
    deactivated() {
        console.log('==detailpage deactivated==');
    },
    beforeDestroy() {
        console.log('==detailpage beforeDestroy==');
    },
    destroyed() {
        console.log('==detailpage destroyed==');
    },
    beforeRouteLeave(to, from123, next) {
        console.log('componet beforeRouteLeave');
        //在全局beforeEach里面做进入路由的判断，在组件(页面)里面做离开路由的判断
        if (to.name !== 'listpage') {
            //从detail页离开时，如果不是去list页面，则将detail页面的上一个路由的keepAlive设为false
            //from为当前路由的上一个路由(从vuex里面取的)
            console.log('this.from===', this.from);
            this.from.meta.keepAlive = false;
        }
        next();
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
