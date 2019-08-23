<template>
  <div id="kkk" class="home">
    <HelloWorld msg="Welcome to Your Vue.js App666111333" />
    <div class="bgt"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@components/HelloWorld.vue';
import { testMock, testMock11 } from '../http/api';
//import $ from 'jquery123';
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
    // this.getName();
    // console.log(getData);
    // getData({ name: '234' }).then(function(data) {
    //   console.log('data===', data);
    // });
    // getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
    //   console.log('data===', data);
    // });

    testMock().then(function(data) {
      console.log('data===', data);
    });

    testMock11({ name: 'www123' }).then(function(data) {
      console.log('data===', data);
    });
  }
};
</script>
<style scoped lang="scss">
.bgt {
  width: 120px;
  height: 120px;
  background: url(../assets/images/img-cry@2x.png) no-repeat 0 0;
}
</style>
