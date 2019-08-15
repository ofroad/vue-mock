import axios from 'axios';
//import qs from 'qs';

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

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
    console.log('config===', config);
    return config;
  },
  error => {
    console.log('======request error=======');
    console.log('request error===', error);
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
    return response;
  },
  error => {
    //
    console.log('======response error=======');
    console.log('response error===', error.response);
    return Promise.reject(error);
  }
);

export default instance;
