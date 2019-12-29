<template>
    <div>
        <div>元素运动</div>
        <transition appear @before-enter="beforeEnter" @after-enter="afterEnter">
            <div id="ball" ref="ball" v-show="item"></div>
        </transition>
        <button @click="start">开始</button>

        <!-- <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
        <button @click="start2">开始</button> -->
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
            item: false,
            show: true
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
        start2() {
            this.show = !this.show;
        },
        beforeEnter(el) {
            console.log('==beforeEnter==', el);
            // 设置transform值
            //el.style.transform = `translate3d(30px,50px , 0)`;
            // 设置透明度
            //el.style.opacity = 0;
        },
        enter(el, done) {
            console.log('==enter==');

            done();
        },
        afterEnter(el) {
            console.log('==afterEnter==', el);
            el.style.transition = 'transform .88s cubic-bezier(0.49, -0.29, 0.75, 0.41)';
            //el.style.transition = 'transform 1.88s linear';
            el.style.transform = 'translate3d(300px,500px,0)';
            el.style.opacity = 1;

            el.addEventListener('transitionend', () => {
                el.setAttribute('style', '');
                this.item = false;
            });
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
}

.slide-fade-enter-active {
    transition: all 10.3s ease;
}
.slide-fade-leave-active {
    transition: all 10.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
