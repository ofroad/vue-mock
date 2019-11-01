<template>
    <div class="about">
        <h1>vue中使用jsonp</h1>
        <router-link to="/">to home</router-link>
        <br />
        <router-link to="login">to login</router-link>
        <div class="wrap"></div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
    name: 'jsonp',
    data() {
        return {
            params: {
                firstResult: 1,
                maxResults: 20,
                searchType: '',
                beginTime: '2019-10-19',
                endTime: '2019-10-25',
                cpage: 1,
                saleType: '',
                prdItemId: '',
                payType: ''
            }
        };
    },
    components: {},
    methods: {
        startJsonp() {
            console.log('========vuejsonp开始发送jsonp请求=======');
            this.$jsonp('https://vps.beta.ule.com/vpsYzgMobile/wallet/enterSellSaveList.do', { ...this.params, callbackQuery: 'jsoncallback' })
                .then(res => {
                    console.log('vuejsonpres===', res);
                })
                .catch(err => {
                    console.log('vuejsonperr===', err);
                    //有些报错vuejsonp捕捉不到，但是jquery的jsonp可以捕捉到
                });
        },
        startJsonp2() {
            console.log('========jquery开始发送jsonp请求=======');
            // eslint-disable-next-line
      const p = $.ajax({
                url: 'https://vps.beta.ule.com/vpsYzgMobile/wallet/enterSellSaveList.do',
                type: 'get',
                dataType: 'jsonp',
                data: { ...this.params },
                jsonp: 'jsoncallback'
            });

            p.then(res => {
                console.log('jqueryres===', res);
            }).catch((err, b, c, d) => {
                //有些报错vuejsonp捕捉不到，但是jquery的jsonp可以捕捉到
                console.log('jqueryerr===', err);
                console.log('jqueryerr-b===', b);
                console.log('jqueryerr-c===', c);
                console.log('jqueryerr-d===', d);
            });

            console.log('p===', p);
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
        this.startJsonp();
        this.startJsonp2();
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
.wrap {
    height: 800px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.box {
    padding: 10px;
}
</style>
