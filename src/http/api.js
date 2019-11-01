import axios from './http.js';
import qs from 'qs';

//console.log('axios===', axios);
//export const getData = params => axios.get('/59df37ef05c0cc70abfc0d9d/example/query', { params });
export function getData(params) {
    return axios.get(' https://www.easy-mock.com/mock/59df37ef05c0cc70abfc0d9d/example/query', { params });
}
export function getData2(params) {
    return axios.post(' https://www.easy-mock.com/mock/59df37ef05c0cc70abfc0d9d/example/upload', { ...params });
}
export function getQuan(params) {
    return axios.get('https://vps.beta.ule.com/vpsYzgMobile/award/NineOneNineReceiveCoupon.do', { params });
}
export function getQuan2(params) {
    return axios.post('https://vps.beta.ule.com/vpsYzgMobile/customer/searchMemberListByH5.do', qs.stringify({ ...params }));
}
export function testMock(paramsaaa, config = {}) {
    //get请求设置config
    return axios.get('/api/articles', { params: paramsaaa, headers: config });
}
export function testMock11(params) {
    return axios.get('/api/top', { params });
}
//注释3
/*
 注释4
*/
console.warn('警告4');
//**********************
//用户登录
export function userLogin(params) {
    return axios.post('/api/login', params);
}

//用户登出
export function userLoginOut(params) {
    return axios.post('/api/logout', params);
}

//产品列表
export function getPrdList(params, config = {}) {
    //post请求设置config，默认显示loading,配置headers: { showLoading: false }不显示loading
    return axios.post('/api/prdlist', { ...params }, { headers: config });
}
