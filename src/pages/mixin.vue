<template>
    <div class="about">
        <h1>This is an pc page换个地方好该防护等级放假吗8567867光华科技法规及恢复规划</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="login">to login</router-link>
        <div>
            <input type="button" value="所有角色可见" /><br />
            <input v-if="role === 'superadmin' || role === 'admin'" type="button" value="superadmin和admin可见" /><br />
            <input v-if="role === 'superadmin'" type="button" value="仅superadmin可见" /><br />
            <input v-if="role === 'admin'" type="button" value="仅admin可见" /><br />
            <input v-if="role === 'common'" type="button" value="仅common可见" /><br />
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import mixin from '../mixin/';

export default {
    name: 'mixin',
    data() {
        return {
            mixa: '来自组件内的定义',
            mixb: 'www'
        };
    },
    mixins: [mixin],
    computed: {
        role() {
            return this.$store.state.role;
        }
    },
    components: {},
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        }
    },
    beforeCreate() {
        //注释5
        /*
    注释6
    */
        console.warn('警告2');
    },
    created() {
        console.log('created===组件内定义的钩子被调用');
    },
    mounted() {
        //data有相同的以组件内定义的数据优先
        console.log('mixa==', this.mixa);

        //同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。

        //值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
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
