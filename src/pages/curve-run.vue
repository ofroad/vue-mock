<template>
    <div>
        <div>元素曲线运动</div>
        <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:enter-cancelled="enterCancelled">
            <div id="ball" ref="ball" v-show="item"></div>
        </transition>
        <button @click="start">开始</button>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
    name: 'curve-run',
    data() {
        return {
            item: false
        };
    },
    props: {
        name: {
            type: String,
            default: 'Vue!'
        }
    },
    components: {},
    methods: {
        start() {
            this.item = !this.item;
        },
        beforeEnter(el) {
            console.log('==beforeEnter==');
            console.log('==el==', el);
            //el.style.transition = 'transform 15.88s linear';
        },
        enter(el, done) {
            console.log('==enter==');
            el.style.transform = 'translate3d(300px,500px,0)';
            done();
        },
        afterEnter(el) {
            console.log('==afterEnter==', el);
        },
        enterCancelled() {
            console.log('==enterCancelled==');
        }
    },
    beforeCreate() {},
    created() {},
    mounted() {}
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
.wrap {
    height: 800px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.box {
    padding: 10px;
}
#ball {
    width: 50px;
    height: 50px;
    background-color: #42b983;
    border-radius: 100%;
    transition: transform 15.88s linear;
}
.fade-enter-active {
    // transition: transform 25s cubic-bezier(0.3, -0.25, 0.7, -0.15);
    transition: transform 15.88s linear;
}
.fade-enter-to {
    transform: translate3d(500px, 600px, 0);
}
.fade-enter {
}
</style>
