<template>
    <div id="kkk" class="home">
        <p>阿发达爱的方式盾构法十多个水电费十大歌手电饭锅是的法规的广泛地走访韩国------------home</p>
        <div><span @click="loginOut">退出登录</span></div>
        <router-link to="about">to about</router-link><br />
        <router-link to="/pa/pa01">to pa01</router-link><br />
        <router-link to="/loadmore">to loadmore</router-link><br />
        <router-link to="/picker">to picker</router-link><br />
        <div @click="dochuan">开始测试串行请求</div>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@components/HelloWorld.vue';
import { userLoginOut, getQuan, getData2, getQuan2 } from '../http/api';
//import $ from 'jquery123';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
    name: 'home',
    components: {},
    methods: {
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

        // getData({ usrOnlyId: '10000024742', showLoading: 'true' }, { showLoading: 'false' })
        //     .then(function(data) {
        //         //console.log('data===', data);
        //     })
        //     .catch(err => {
        //         //console.log('getData err===', err);
        //     });

        getData2({ usrOnlyId: '123' })
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
