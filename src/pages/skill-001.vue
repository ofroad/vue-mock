<template>
    <div class="about">
        <div class="sbox">
            <p>(1)指令动态参数</p>
            <input v-on:[event]="doSomething" />
            <button v-on:click="event = 'focus'">change</button>
            <p>动态参数预期会求出一个字符串，异常情况下值为null，null值可以用于移除绑定，任何其他非字符串类型的值都会触发一个警告</p>
        </div>

        <div class="sbox">
            <p>(2)template中使用方法</p>
            <div>{{ reversedMessage('hello') }}</div>
            <p>methods中提供的方法大多数时候都是用来给其他方法调用的，但是它其实也可以像computed计算属性一样直接写在模版里</p>
        </div>

        <div class="sbox">
            <p>(3)用key管理可复用元素</p>
            <template v-if="loginType === 'username'">
                <label>Username</label>
                <input key="username" placeholder="Enter your username" />
            </template>
            <template v-else>
                <label>Email</label>
                <input key="email" placeholder="Enter your email address" />
            </template>
            <button @click="change">change</button>
            <p>现在切换，每次都会重新渲染，但是label元素还是会被复用，因为它没有加唯一key值</p>
        </div>

        <div class="sbox">
            <p>(4)为已有对象赋值多个新属性</p>
            <div>{{ user.name }}-{{ user.age }}-{{ user.sex }}</div>
            <button @click="test01">点击 test111</button>
            <p>可以用Object.assign为这个对象重新赋值，这样就能添加多个新的响应式属性</p>
        </div>

        <div class="sbox">
            <p>(5)内联方法访问原始DOM事件</p>
            <button @click="share('share info', 'jack', $event)">share</button>
            <button @click="share2($event, '113')">share2</button>
            <button @click="share3('zzz', $event, '111')">share3</button>
            <button @click="share4">share4</button>
            <button @click="share5('222')">share5</button>
            <p>有时在模版中调用方法时，我们需要向方法中传参数，但是同时又要传递原始的DOM事件</p>
        </div>

        <div class="sbox">
            <p>(6).sync修饰符(在子组件当中修改父组件的某个数据时，建议使用sync)</p>
            <!--
                <comp :foo.sync="bar"></comp> 会被扩展为：
                <comp :foo="bar" @update:foo="val => bar = val"></comp>

                当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：
                this.$emit('update:foo', newValue);
            -->
            <!--
                //.sync和v-model都是语法糖
                在原生表单元素中：
                <input v-model="inputValue">  相当于:
                <input v-bind:value="inputValue" v-on:input="inputValue = $event.target.value">

                在自定义组件中:
                <my-component v-model="inputValue"></my-component> 相当于:
                <my-component v-bind:value="inputValue" v-on:input="inputValue = argument[0]"></my-component>
                这个时候，inputValue接受的值就是input事件的回调函数的第一个参数，所以在自定义组件中，要实现数据绑定，还需要$emit去触发input的事件:
                this.$emit('input', value)
            -->
            <div>
                <span>我是父组件中的--{{ title }}</span>
                <textdoc v-bind:title123.sync="title"></textdoc>
            </div>
            <p>.sync就是一个语法糖</p>
        </div>

        <div class="sbox">
            <p>(7)组件中props/methods/data/computed的渲染顺序,以及watch的使用</p>
            <p>props > methods > data > computed</p>
            <renderOrder :name="cname" :vc="kage"></renderOrder>
            <div>
                <p>data可以调用前面的props，methods的属性</p>
                <p>computed中可以调用props，methods，data中的属性</p>
                <button @click="changeCname">在父组件中动态改变传给renderOrder的cname值</button>
                <p>可以发现，当在父组件中动态改变传给renderOrder的cname值时，子组件已经接收到了最新的name</p>
                <p>但是，子组件中，在data里面定义的k(引用了name)并没有随之发生变化</p>
                <p>但是，子组件中，在computed里面定义的kk(引用了name)随之发生了变化</p>
                <p>如果想让k随之发生变化，可在子组件中watch,详见子组件</p>
                <br />
                <button @click="changeKage">在父组件中动态改变传给renderOrder的kage值</button>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import textdoc from '@/components/textdoc.vue';
import renderOrder from '@/components/renderOrder.vue';

export default {
    name: 'skill-001',
    data() {
        return {
            event: 'input',
            loginType: 'username',
            user: {
                name: 'jack'
            },
            title: 'default',
            cname: { name: 'jack' },
            kage: 123
        };
    },
    props: {},
    components: { textdoc, renderOrder },
    methods: {
        doSomething() {
            console.log('sss');
        },
        reversedMessage: function(message) {
            return message
                .split('')
                .reverse()
                .join('');
        },
        change() {
            this.loginType = this.loginType === 'username' ? 'email' : 'username';
        },
        share(info, name, event) {
            //event可以放在最后
            console.log(info, name, event);
        },
        share2(event, a) {
            //event可以放在最前
            console.log(event, a);
        },
        share3(a, event, b) {
            //event可以放在中间
            console.log(a, event, b);
        },
        share4(event, a) {
            //不传参数，event默认是第一个参数
            console.log(event, a);
        },
        share5(a, b) {
            //传一个参数，但不传$event,拿不到envent对象
            console.log(a, b);
        },
        changeCname() {
            this.cname = {
                name: 'tom'
            };
        },
        test01() {
            this.user.age = 100;
        },
        changeKage() {
            this.kage = 666;
        }
    },
    beforeCreate() {
        console.warn('警告2');
    },
    created() {
        this.user = Object.assign({}, this.user, {
            age: 18,
            sex: 'male'
        });
    },
    mounted() {
        console.log('this.$attrs===', this.$attrs);
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
.wrap {
    height: 800px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.box {
    padding: 10px;
}
.sbox {
    padding: 0 0 30px 0;
}
</style>
