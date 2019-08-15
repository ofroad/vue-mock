<template>
  <div id="kkk" class="home">
    <HelloWorld msg="Welcome to Your Vue.js App666111333" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@components/HelloWorld.vue';
import { getData, getQuan } from '../http/api';
import $ from 'jquery123';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    getName() {
      console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
      console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
    }
  },
  beforeCreate() {
    //注释5
    /*
    注释6
    */
  },
  created() {
    this.getName();
    //console.log(getData);
    getData({ name: '234' }).then(function(data) {
      console.log('data===', data);
    });
    getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
      console.log('data===', data);
    });
    //发起请求
    //axios123.get('/mock/59df37ef05c0cc70abfc0d9d/example/query', { params: { name: 'www123' } });

    console.warn('警告1');
    //window.jQuery('#kkk').addClass('important');
    $('body').css('background-color', 'yellow');
    console.log(window.jQuery);
  }
};
</script>
