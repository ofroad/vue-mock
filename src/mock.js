// 引入mockjs
//const Mock = require('mockjs');
import Mock from 'mockjs';
Mock.setup({
  timeout: 400
});

// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
  let articles = [];
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    articles.push(newArticleObject);
  }
  return {
    data: articles
  };
};
// 拦截ajax请求，配置mock的数据
Mock.mock('/api/articles', 'get', produceNewsData);

const produceNewsData11 = function(options) {
  //option里面包含请求信息
  console.log('options===', options);
  let articles = [];
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30),
      email: Mock.mock('@email'),
      idcard: Random.id(),
      idcard123: Mock.mock('@id')
    };
    articles.push(newArticleObject);
  }
  return {
    data: articles,
    code: '0000',
    message: '请求成功'
  };
};
// 拦截ajax请求，配置mock的数据
//正则表达式处理带参数的url匹配
Mock.mock(RegExp('/api/top' + '.*'), 'get', produceNewsData11);

//用户登录接口
const userLogin = function(options) {
  // const queryStr = options.url.split('?')[1];
  // const searchParams = new URLSearchParams(queryStr);
  // const name = searchParams.get('name');
  // const pwd = searchParams.get('pwd');
  const params = JSON.parse(options.body);
  console.log('params===', params);
  const { name, pwd } = params;
  let message = '',
    role = '',
    code = '';
  if (name === 'qqq' && pwd === '111111') {
    console.log('======超级管理员登录======');
    message = '登录成功';
    code = '0000';
    role = 'superadmin';
  } else if (name === 'www' && pwd === '222222') {
    console.log('======普通管理员登录======');
    message = '登录成功';
    code = '0000';
    role = 'admin';
  } else if (name === 'eee' && pwd === '333333') {
    console.log('======普通会员登录======');
    message = '登录成功';
    code = '0000';
    role = 'common';
  } else {
    console.log('======用户名或密码错误======');
    code = '1111';
    message = '登录失败';
  }
  console.log('options===', options);
  return {
    code: code,
    message: message,
    role: role
  };
};
// 拦截ajax请求，配置mock的数据
//正则表达式处理带参数的url匹配
Mock.mock(RegExp('/api/login' + '.*'), 'post', userLogin);

//用户登出接口
const userLoginOut = function() {
  let message = '退出登录成功',
    code = '0000';
  return {
    code: code,
    message: message
  };
};
// 拦截ajax请求，配置mock的数据
//正则表达式处理带参数的url匹配
Mock.mock(RegExp('/api/logout' + '.*'), 'post', userLoginOut);
