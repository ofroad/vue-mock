<template>
    <div>
        <div>抛物线动画</div>
        <ul class="shop">
            <li v-for="item in items" :key="item.id">
                <span>{{ item.text }}</span>
                <span>{{ item.price }}</span>
                <button @click="additem">添加</button>
            </li>
        </ul>
        <div id="cartbox" class="cart" style="">{{ count }}</div>
        <div class="ball-container">
            <!--小球-->
            <div v-for="ball in balls" :key="ball.id">
                <transition @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <!-- 2个元素在不同的方向上同时运动，并结合transition cubic-bezier可产生曲线运动的结果 -->
                    <div class="ball" v-show="ball.show">
                        <div class="inner inner-hook"></div>
                    </div>
                </transition>
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

export default {
    name: 'curve-run',
    data() {
        return {
            count: 0,
            items: [
                {
                    text: '苹果',
                    price: 151,
                    id: '001'
                },
                {
                    text: '香蕉',
                    price: 152,
                    id: '002'
                },
                {
                    text: '香蕉',
                    price: 153,
                    id: '003'
                },
                {
                    text: '香蕉',
                    price: 15,
                    id: '004'
                },
                {
                    text: '香蕉',
                    price: 15,
                    id: '005'
                },
                {
                    text: '香蕉',
                    price: 15,
                    id: '006'
                },
                {
                    text: '香蕉',
                    price: 15,
                    id: '007'
                },
                {
                    text: '香蕉',
                    price: 15,
                    id: '008'
                }
            ],
            balls: [
                //小球 设为5个
                {
                    show: false,
                    id: '008'
                },
                {
                    show: false,
                    id: '007'
                },
                {
                    show: false,
                    id: '006'
                },
                {
                    show: false,
                    id: '005'
                },
                {
                    show: false,
                    id: '004'
                }
            ],
            dropBalls: [],
            event: {
                d: null
            }
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
        additem(event) {
            this.drop(event.target);
            this.count++;
        },
        drop(el) {
            //抛物
            for (let i = 0; i < this.balls.length; i++) {
                console.log('i===', i);
                let ball = this.balls[i];
                if (!ball.show) {
                    ball.show = true;
                    ball.el = el;
                    this.dropBalls.push(ball);
                    return;
                }
                console.log('qq');
            }
        },
        beforeDrop(el) {
            console.log('==beforeDrop==');
            /* 购物车小球动画实现 */
            let count = this.balls.length;
            //5个球依次运动
            while (count--) {
                let ball = this.balls[count];
                if (ball.show) {
                    let rect = ball.el.getBoundingClientRect(); //元素相对于视口的位置
                    console.log('rect===', rect);
                    let cart = document.getElementById('cartbox').getBoundingClientRect();
                    console.log('cart===', cart);
                    let x = rect.left - cart.left;
                    let y = -(window.innerHeight - rect.top); //获取y
                    console.log('x===', x);
                    console.log('y===', y);
                    el.style.display = '';
                    //设置小球的初始状态位置
                    el.style.webkitTransform = 'translateY(' + y + 'px)'; //translateY
                    el.style.transform = 'translateY(' + y + 'px)';
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = 'translateX(' + x + 'px)';
                    inner.style.transform = 'translateX(' + x + 'px)';
                }
            }
        },
        dropping(el, done) {
            console.log('==dropping==');
            //设置小球的最终状态位置，配合transition产生动画(最终状态即小球的原始位置：translate3d(0,0,0))
            /*重置小球数量  样式重置*/
            // eslint-disable-next-line no-unused-vars
            let rf = el.offsetHeight;
            el.style.webkitTransform = 'translate3d(0,0,0)';
            el.style.transform = 'translate3d(0,0,0)';
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = 'translate3d(0,0,0)';
            inner.style.transform = 'translate3d(0,0,0)';
            console.log('done before');
            this.event.d = done;
            //动画结束后执行done,即立刻执行afterDrop钩子，不执行done，afterDrop钩子不会触发执行
            el.addEventListener('transitionend', done);
        },
        afterDrop(el, done) {
            console.log('==afterDrop==');
            console.log('==afterDrop done==', done);
            /*初始化小球*/
            //每个球的动画结束后
            let ball = this.dropBalls.shift();
            if (ball) {
                el.style.display = 'none';
                //球可以回收在利用
                ball.show = false;
            }
        }
    },
    beforeCreate() {},
    created() {},
    mounted() {}
};
</script>

<style scoped lang="scss">
.shop {
    position: fixed;
    top: 300px;
    left: 400px;
}

.ball {
    position: fixed;
    left: 70px;
    bottom: 22px;
    z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    /*贝塞尔曲线*/
}

.inner {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background-color: #ff0000;
    transition: all 0.4s linear;
}

.cart {
    position: fixed;
    bottom: 22px;
    left: 70px;
    width: 1rem;
    height: 30px;
    background-color: rgb(0, 160, 220);
    color: rgb(255, 255, 255);
}
</style>
