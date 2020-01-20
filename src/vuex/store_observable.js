import Vue from 'vue';

//store_observable数据可跨组件共享使用
export const store_observable = Vue.observable({
    count: 0
});

export const mutations = {
    addCount() {
        store_observable.count = store_observable.count + 1;
    },
    minusCount() {
        store_observable.count = store_observable.count - 1;
    }
};
