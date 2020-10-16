<template>
    <div class="about">
        <h1>子组件利用$props一次性接收父组件的传值</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
        <br />
        <childprops placeholder="Enter your username" :value="12" :name="age"></childprops>
        <p>在子组件中可用$props一次性接收</p>
    </div>
</template>
<script>
// @ is an alias to /src
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import childprops from '@/components/childprops.vue';
import utils from '../utils/index.js';
console.log('utils===', utils);
export default {
    name: 'cprops',
    data() {
        return {
            sthGiveChild: '给你100块',
            age: 10,
            todo: []
        };
    },
    computed: {},
    components: { childprops },
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        }
    },
    beforeCreate() {
        console.log('==$props beforeCreate==');
    },
    created() {
        console.log('==$props created==');
        this.getName();
    },
    beforeMount() {
        console.log('==$props beforeMount==');
    },
    mounted() {
        console.log('==$props mounted==');
    }
};
</script>

<style scoped lang="scss">
.about {
    overflow: auto;
    background-color: #fff;
}

a {
    color: #42b983;
}
.para {
    padding: 20px;
}
</style>
