<template>
    <div id="kkk" class="home">
        <p>阿发达爱的方式盾构法十多个水电费十大歌手电饭锅是的法规的广泛地走访韩国------------home</p>
        <div><span @click="loginOut">退出登录</span></div>
        <router-link to="about">to about</router-link><br />
        <router-link to="/pa/pa01">to pa01</router-link><br />
        <router-link to="/loadmore">to loadmore</router-link><br />
        <router-link to="/picker">to picker</router-link><br />
        <router-link to="/listpage">to listpage</router-link><br />
        <div @click="dochuan">开始测试串行请求</div>
        <p>observable store: {{ store.count }}</p>
        <button @click.prevent="handleAdd">首页 - 加</button>
        <button @click.prevent="handleMinus">首页 - 减</button><br />
        <router-link to="/observable">to observable</router-link><br />
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@components/HelloWorld.vue';
import { userLoginOut, getQuan, getData, getData2, getQuan2, gethuodong, getzige } from '../http/api';
//import $ from 'jquery123';
//import axios from 'axios';
//import axios123 from '../http/http.js';
import { store_observable, mutations } from '../vuex/store_observable';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name: 'home',
    data() {
        return {
            store: store_observable,
            pick: '',
            a11: 123
        };
    },
    computed: {
        ...mapState(['loadingCount']),
        //调用模块里面的
        ...mapState('moduleA', {
            count: state => state.count
        }),
        ...mapState('moduleA', ['ma']),
        ...mapGetters('moduleA', {
            doubleCount123: 'doubleCount'
        }),
        ...mapGetters('moduleA', ['gma'])
    },
    components: {},
    methods: {
        ...mapActions('moduleA', ['incrementIfOddOnRootSum']),
        ...mapMutations('moduleA', ['incrementMA']),
        getName() {
            console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
            console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
        },
        loginOut() {
            userLoginOut({ name: 'www123' }).then(data => {
                if (data.data.code === '0000') {
                    console.log('======退出登录成功======');
                    this.$cookies.remove('login');
                    this.$cookies.remove('role');
                    this.$store.commit('setLogin', { isLogin: false, age: 111 });
                    this.$store.commit('setRole', { role: '', age: 111 });
                    this.$router.push({
                        name: 'login'
                    });
                }
            });
        },
        dochuan() {
            console.log('========开始执行getQuan========');
            getQuan({ usrOnlyId: 'www', showLoading: 'true' }).then(function(data) {
                console.log('data===', data);
                console.log('========开始执行getQuan2========');
                getQuan2({ currentPage: 1, pageSize: 10, showLoading: 'true' })
                    .then(function(data) {
                        console.log('data===', data);
                    })
                    .catch(err => {
                        console.log('getData2 err===', err);
                    });
            });
        },
        huodong() {
            //20191113541183
            gethuodong({ activityIds: '20191210804957', showLoading: 'true' }).then(function(data) {
                console.log('data===', data);
                console.log('========开始执行huodong========');
                console.log('=================', JSON.parse(data.data.data));
            });
        },
        zige() {
            console.log('========开始执行getzige========');
            getzige({ activityCode: 'MA_U_153369864047100', fieldId: '', userOnlyId: '10000032786' })
                .then(function(data) {
                    console.log('========getzige 返回================================================================');
                    console.log('data===', data);
                    //console.log('=================', JSON.parse(data.data.data));
                })
                .catch(err => {
                    console.log('wrtwertwer111111111111111===', err);
                });
        },
        handleAdd() {
            mutations.addCount();
        },
        handleMinus() {
            mutations.minusCount();
        }
    },
    beforeCreate() {
        //注释5
        /*
    注释6
    */
    },
    created() {
        console.log('=======home created======');
        // this.getName();
        // console.log(getData);
        //此接口走本地代理到线上的easy-mock
        // getData({ name: '234' }).then(function(data) {
        //   console.log('data===', data);
        // });

        // getQuan({ usrOnlyId: 'www', showLoading: 'true' }).then(function(data) {
        //     //console.log('data===', data);
        // });

        getData({ usrOnlyId: '10000024742', showLoading: 'true' }, { showLoading: 'false' })
            .then(function(data) {
                console.log('data===', data);
            })
            .catch(err => {
                console.log('getData err===', err);
            });

        getData2({ usrOnlyId: '123', showLoading1: 'true' })
            .then(function(data) {
                console.log('data===', data);
            })
            .catch(err => {
                console.log('getData2 err===', err);
            });

        // testMock().then(function(data) {
        //   console.log('data===', data);
        // });

        // testMock11({ name: 'www123' }).then(function(data) {
        //   console.log('data===', data);
        // });

        // getQuan2({ currentPage: 1, pageSize: 10, showLoading: 'true' })
        //     .then(function(data) {
        //         //console.log('data===', data);
        //     })
        //     .catch(err => {
        //         //console.log('getData2 err===', err);
        //     });
    },
    mounted() {
        console.log('=======home mounted======');
        //console.log('home this===', this);
        this.huodong();
        //this.zige();

        // this.$jsonp('https://service.beta.ule.com/appact/redenvelopes/getActivityTimes', {
        //     activityCode: 'MA_U_153502237306183',
        //     fieldId: '152',
        //     userOnlyId: '1000068989',
        //     callbackQuery: 'jsoncallback'
        // })
        //     .then(res => {
        //         console.log('vuejsonpres222222222222222222222222222===', res);
        //     })
        //     .catch(err => {
        //         console.log('vuejsonperr222222222222222222222222222333===', err);
        //     });

        this.$jsonp('https://service.beta.ule.com/appact/redenvelopes/lottry', {
            activityCode: 'MA_U_153502237306183',
            fieldId: '',
            channel: '400001',
            //userOnlyId: '1000068989',
            callbackQuery: 'jsoncallback'
        })
            .then(res => {
                console.log('抽奖res===', res);
            })
            .catch(err => {
                console.log('抽奖res err===', err);
            });
        //map后调用
        this.incrementIfOddOnRootSum();
        this.incrementMA();

        //非map调用
        this.$store.dispatch('moduleA/incrementIfOddOnRootSum');
        this.$store.commit('moduleA/incrementMA');
        console.log('非map调用moduleA里面的count===', this.$store.state.moduleA.count);
        console.log('非map调用moduleA里面的ma===', this.$store.state.moduleA.ma);
        console.log('非map调用moduleA里面的getters doubleCount===', this.$store.getters['moduleA/doubleCount']);

        console.log('store===', this.$store);
    }
};
</script>
<style scoped lang="scss">
.home {
    background-color: #ffffff;
    color: #03311c;
}
.bgt {
    width: 120px;
    height: 120px;
    background: url(../assets/images/img-cry@2x.png) no-repeat 0 0;
}
</style>
