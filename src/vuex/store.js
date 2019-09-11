import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    role: '',
    menu: []
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
    }
  },
  actions: {}
});
