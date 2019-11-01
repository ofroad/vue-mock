import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
    namespaced: true,
    state: { count: 10 },
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
        loadingCount: 0
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
        }
    },
    actions: {},
    modules: {
        moduleA
    }
});
