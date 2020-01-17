import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
    namespaced: true,
    state: {
        count: 10
    },
    mutations: {
        incrementMA(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++;
        }
    },

    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    }
};

export default new Vuex.Store({
    state: {
        isLogin: false,
        role: '',
        menu: [],
        showLoading: false,
        loadingCount: 0,
        //当前路由的上一个路由
        from: {},
        routercached: ['listpage']
    },
    getters: {
        doubleCount(state) {
            return state.menu;
        }
    },
    mutations: {
        setLogin(state, payload) {
            console.log('payload===', payload);
            state.isLogin = payload.isLogin;
        },
        setRole(state, payload) {
            console.log('payload===', payload);
            state.role = payload.role;
        },
        setMenu(state, payload) {
            console.log('payload===', payload);
            state.menu = payload.menu;
        },
        setLoading(state, payload) {
            //console.log('payload===', payload);
            payload ? state.loadingCount++ : state.loadingCount--;
            state.loadingCount = Math.max(state.loadingCount, 0);
        },
        clearLoading(state) {
            state.loadingCount = 0;
        },
        setFrom(state, payload) {
            state.from = payload;
        },
        updateRoutercached(state, payload) {
            //动态更新keep-alive的include数据
            console.log('updateRoutercached payload===', payload);
            const i = state.routercached.indexOf(payload.route);
            const doit = {
                add: () => {
                    if (i !== -1) {
                        console.log('已经存在，不用重复添加');
                        return;
                    }
                    state.routercached.push(payload.route);
                    console.log('增加了', payload.route);
                },
                delete: () => {
                    if (i === -1) {
                        console.log('不存在，不用删除');
                        return;
                    }
                    state.routercached.splice(i, 1);
                    console.log('删除了', payload.route);
                }
            };
            doit[payload.action]();
        }
    },
    actions: {},
    modules: {
        moduleA
    }
});
