import axios from 'axios';
import store from '../vuex/store';
//import qs from 'qs';

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
if (process.env.NODE_ENV === 'production') {
    //开发环境有代理就不要设置baseURL
    instance.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
}

const getParams = function(config, key) {
    if (config.method.toLowerCase() === 'get') {
        console.log('=====参数为对象======');
        return config.params[key];
    } else if (config.method.toLowerCase() === 'post') {
        if (typeof config.data === 'string') {
            console.log('=====参数为字符串======');
            //post请求的参数使用了qs后，config.data变成了a=b&c=d形式
            const p = new URLSearchParams(config.data);
            // console.log('p===', p);
            //console.log(p.get(key));
            return p.get(key);
        } else {
            console.log('=====参数为对象======');
            //
            return config.data[key];
        }
    }
    console.log('params===', typeof params);
};
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        console.log('request config===', config);
        if (getParams(config, 'showLoading') !== 'false') {
            console.log('正常请求+1');
            store.commit('setLoading', true);
        }
        return config;
    },
    error => {
        console.log('======request error=======');
        console.log('request error===', error);
        console.log('请求报错-1');
        store.commit('setLoading', false);
        return Promise.error(error);
    }
);

/**
 * 响应拦截器
 *
 */
instance.interceptors.response.use(
    response => {
        //
        console.log('response===', response);
        if (getParams(response.config, 'showLoading') !== 'false') {
            console.log('正常返回响应-1');
            store.commit('setLoading', false);
        }
        return response;
    },
    (error, a) => {
        //
        console.log('======response error=======');
        console.log('response error===', error);
        console.log('response error a===', a);
        console.log('返回响应报错-1');
        store.commit('setLoading', false);
        return Promise.reject(error);
    }
);

export default instance;
