<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="../assets/images/bg-redpackets-get@2x.png" />
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
import { getData, getQuan } from '../http/api';
//import axios from 'axios';
//import axios123 from '../http/http.js';

export default {
  name: 'home',
  components: {},
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
    console.warn('警告2');
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
  }
};
</script>
<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
