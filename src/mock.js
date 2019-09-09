// 引入mockjs
//const Mock = require('mockjs');
import Mock from 'mockjs';
Mock.setup({
  timeout: 4000
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
    data: articles
  };
};
// 拦截ajax请求，配置mock的数据
//正则表达式处理带参数的url匹配
Mock.mock(RegExp('/api/top' + '.*'), 'get', produceNewsData11);