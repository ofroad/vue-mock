<template>
    <div class="container">
        <button @click="isMember = !isMember">{{ isMember ? '我不想要会员了，哼' : '我要成为会员' }}</button>
        <component :is="userComponentImstance" title="component就是好用哟" />

        <div>
            <p>假装这是一个商城首页</p>
            <button @click="shuffle">随机切换模块顺序</button>
            <component :is="item.imstance" v-for="(item, i) in componentImstances" :info="item" :key="i" />
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

const kkkk = import(`../components/memberInfo`);
console.log('kkkk===', kkkk);
console.log('kkkk===', typeof kkkk);
//kkkk是promise对象
kkkk.then(res => {
    //组件加载成功
    console.log('组件加载成功 res===', res);
}).catch(e => {
    //组件加载失败
    console.log('组件加载失败 e===', e);
});

export default {
    name: 'use-component-directly',
    data() {
        return {
            isMember: false,
            moduleList: [
                {
                    type: 'bargain',
                    title: '砍价',
                    startTime: '2019-12-01',
                    endTime: '2019-01-01'
                },
                {
                    type: 'seckill',

                    title: '秒杀',
                    startTime: '2019-12-05',
                    endTime: '2019-01-01'
                },
                {
                    type: 'limit',

                    title: '限购',
                    startTime: '2019-12-07',
                    endTime: '2019-01-01'
                },
                {
                    type: 'group1',
                    title: '团购',
                    startTime: '2019-12-11',
                    endTime: '2019-01-01'
                }
            ]
        };
    },
    computed: {
        userComponentImstance() {
            let { isMember } = this;
            let pathName = isMember ? 'memberInfo' : 'userInfo';
            //通过import动态导入组件 配合webpack实现组件分离
            //() => import(`../components/${pathName}`)是用工厂函数的方式定义的组件
            return () => import(`../components/${pathName}`);
        },
        componentImstances() {
            let { moduleList } = this;
            //这是没有异常模板的做饭
            // return moduleList.map(item => {
            //     item.imstance = () => import(`../components/${item.type}`);
            //     return item;
            // });

            //这种提供了组件加载失败时的处理
            return moduleList.map(item => {
                item.imstance = () => {
                    // eslint-disable-next-line no-unused-vars
                    return new Promise((resove, reject) => {
                        let imstance = import(`../components/${item.type}`);
                        imstance.then(res => {
                            resove(res);
                        });
                        //组件加载异常时使用error组件
                        // eslint-disable-next-line no-unused-vars
                        imstance.catch(e => {
                            resove(import('../components/error'));
                        });
                    });
                };
                return item;
            });
        }
    },
    components: {},
    methods: {
        shuffle() {
            let { moduleList } = this;
            let resultArr = [];
            while (moduleList.length > 0) {
                var index = Math.floor(Math.random() * moduleList.length);
                resultArr.push(moduleList[index]);
                moduleList.splice(index, 1);
            }
            this.moduleList = resultArr;
        }
    },
    beforeCreate() {
        console.warn('警告2');
    },
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
</style>
