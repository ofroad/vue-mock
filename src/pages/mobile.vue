<template>
  <div class="about">
    <h1>测试h5功能</h1>
    <router-link to="/">to home</router-link>
    <br />
    <router-link to="login">to login</router-link>
    <div class="wrap">
      <div class="box">
        <!--android和ios都有效-->
        <p>有"#" "*"符号的数字键盘</p>
        <input type="tel" />
      </div>
      <div class="box">
        <!--仅ios都有效-->
        <p>纯数字的数字键盘</p>
        <input pattern="\d*" />
      </div>
      <div class="box">
        <!--android和ios都有效-->
        <p>纯数字的数字键盘</p>
        <input type="number" name="num" id="num" value="" pattern="\d*" />
      </div>
      <div class="box">
        <!-- 拨号 -->
        <p>拨号</p>
        <a href="tel:10086">打电话给: 10086</a>
      </div>
      <div class="box">
        <p>短信</p>
        <a href="sms:10086">发短信给: 10086</a>
      </div>
      <div class="box">
        <p>邮件</p>
        <a href="mailto:839626987@qq.com">发邮件给：839626987@qq.com</a>
      </div>
      <div class="box">
        <p>打开微信</p>
        <a href="weixin://">打开微信</a>
      </div>
      <div class="box">
        <p>打开支付宝</p>
        <a href="alipays://">打开支付宝</a>
      </div>
      <div class="box">
        <p>打开支付宝的扫一扫功能</p>
        <a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫功能</a>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
  name: 'mobile',
  components: {},
  methods: {
    getName() {
      // console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
      // console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
    }
  },
  beforeCreate() {
    //注释5
    /*
    注释6
    */
    console.warn('警告2');
  },
  created() {
    this.getName();
    //console.log(getData);
    // getData({ name: '234' }).then(function(data) {
    //   console.log('data===', data);
    // });
    // getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
    //   console.log('data===', data);
    // });
  }
};
</script>

<style scoped lang="scss">
.about {
  background-color: #fff;
  color: #ff0000;
}

a {
  color: #42b983;
}
.wrap {
  height: 800px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.box {
  padding: 10px;
}
</style>
