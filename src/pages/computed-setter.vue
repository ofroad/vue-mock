<template>
    <div class="about">
        <h1>computed中的setter</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
        <br />
        <div class="parent">
            <p>age: {{ age }}</p>
            <p>agenext: {{ agenext }}</p>
            <br />
            <p>computed中默认只有getter,因此改变computed中的数据会报错 <button @click="changAgeNext">改变agenext</button></p>
            <computedChild :title123="kkk(index)" v-for="(item, index) in todo" :key="item.id"></computedChild>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import computedChild from '@/components/computedChild.vue';
import utils from '../utils/index.js';
console.log('utils===', utils);
export default {
    name: 'computed-setter',
    data() {
        return {
            sthGiveChild: '给你100块',
            age: 10,
            todo: [
                { id: '001', name: 'jack001', age: 10 },
                { id: '002', name: 'jack002', age: 11 },
                { id: '003', name: 'jack003', age: 12 },
                { id: '004', name: 'jack004', age: 13 },
                { id: '005', name: 'jack005', age: 14 }
            ]
        };
    },
    computed: {
        // agenext() {
        //     return this.age + 10;
        // }
        agenext: {
            get: function() {
                return this.age + 10;
            },
            set: function(val) {
                console.log('agenext set val===', val);
                this.age = val - 10;
            }
        },
        kkk() {
            //给计算属性传参
            return function(index) {
                return this.todo[index].name + ' %';
            };
        }
    },
    components: { computedChild },
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        },
        changAgeNext() {
            this.agenext = 80;
        }
    },
    beforeCreate() {
        console.log('==computed-setter beforeCreate==');
    },
    created() {
        console.log('==computed-setter created==');
        this.getName();
    },
    beforeMount() {
        console.log('==computed-setter beforeMount==');
    },
    mounted() {
        console.log('==computed-setter mounted==');
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
