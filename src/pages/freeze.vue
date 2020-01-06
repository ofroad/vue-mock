<template>
    <div class="about">
        <h1>利用Object.freeze提升渲染性能</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="/listpage">to listpage</router-link>
        <br />
        <br />
        <p class="para">
            Object.freeze()
            可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。
        </p>
        <p class="para">
            当你把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter，这些 getter/setter
            对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。
        </p>
        <p class="para">但 Vue 在遇到像 Object.freeze() 这样被设置为不可配置之后的对象属性时，不会为对象加上 setter getter 等数据劫持的方法</p>
        <p class="para">由于 Object.freeze() 会把对象冻结，所以比较适合纯展示类的场景，如果你的数据属性需要改变，可以重新替换成一个新的 Object.freeze()的对象。</p>
        <p v-for="(item, index) in todo" :key="index + new Date()">{{ item.name }}</p>
        <button @click="addData">添加数据</button>
        <button @click="deleteData">删除数据</button>
    </div>
</template>
<script>
// @ is an alias to /src
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import utils from '../utils/index.js';
console.log('utils===', utils);
export default {
    name: 'freeze',
    data() {
        return {
            sthGiveChild: '给你100块',
            age: 10,
            todo: [],
            example: [
                { id: '001', name: 'jack001', age: 10 },
                { id: '002', name: 'jack002', age: 11 },
                { id: '003', name: 'jack003', age: 12 },
                { id: '004', name: 'jack004', age: 13 },
                { id: '005', name: 'jack005', age: 14 }
            ]
        };
    },
    computed: {},
    components: {},
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        },
        addData() {
            this.todo = Object.freeze([...this.todo, ...this.example]);
            //this.todo = [...this.todo, ...this.example];
        },
        deleteData() {
            //Object.freeze后删除会报错
            this.todo.splice(0, 2);
        }
    },
    beforeCreate() {
        console.log('==freeze beforeCreate==');
    },
    created() {
        console.log('==freeze created==');
        this.getName();
    },
    beforeMount() {
        console.log('==freeze beforeMount==');
    },
    mounted() {
        console.log('==freeze mounted==');
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
