import axios from './http.js';
//import qs from 'qs';

//console.log('axios===', axios);
//export const getData = params => axios.get('/59df37ef05c0cc70abfc0d9d/example/query', { params });
export function getData(params) {
  return axios.get('/mock/59df37ef05c0cc70abfc0d9d/example/query', { params });
}
export function getQuan(params) {
  return axios.get('https://vps.beta.ule.com/vpsYzgMobile/award/NineOneNineReceiveCoupon.do', { params });
}
export function testMock(params) {
  return axios.get('/api/articles', { params });
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
