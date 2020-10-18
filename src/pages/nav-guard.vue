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
            <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
            <input type="button" value="更新组件" @click="change" /><br />
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
    name: 'nav-guard',
    data() {
        return {
            mixa: '来自组件内的定义',
            mixb: 'www',
            message: 666
        };
    },
    computed: {
        role() {
            return this.$store.state.role;
        }
    },
    components: {},
    directives: {
        demo: {
            bind: function(el, binding, vnode) {
                console.log('=========directives demo bind==========');
                var s = JSON.stringify;
                el.innerHTML =
                    'name: ' +
                    s(binding.name) +
                    '<br>' +
                    'value: ' +
                    s(binding.value) +
                    '<br>' +
                    'expression: ' +
                    s(binding.expression) +
                    '<br>' +
                    'argument: ' +
                    s(binding.arg) +
                    '<br>' +
                    'modifiers: ' +
                    s(binding.modifiers) +
                    '<br>' +
                    'vnode keys: ' +
                    Object.keys(vnode).join(', ');
            },
            inserted: function() {
                console.log('=========directives demo inserted==========');
            },
            update: function() {
                console.log('=========directives demo update==========');
            },
            componentUpdated: function() {
                console.log('=========directives demo componentUpdated==========');
            },
            unbind: function() {
                console.log('=========directives demo unbind==========');
            }
        }
    },
    methods: {
        getName() {
            // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        },
        change() {
            this.message = 123;
        }
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log('=========router beforeRouteEnter========');
        next();
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log('=========router beforeRouteUpdate========');
        next();
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('=========router beforeRouteLeave========');
        next();
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
