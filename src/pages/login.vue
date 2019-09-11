<template>
  <div class="login">
    <ul>
      <li class="item">
        <label class="label">用户名</label>
        <input type="text" v-model="name" />
      </li>
      <li class="item">
        <label class="label">密码</label>
        <input type="password" v-model="pwd" />
      </li>
      <li class="item">
        <span @click="toLogin" class="btn-login">登录</span>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@components/HelloWorld.vue';
import * as http from '../http/api';
import createRouter from '../router/createRouter';
export default {
  name: 'login',
  data() {
    return {
      name: '',
      pwd: ''
    };
  },
  components: {},
  methods: {
    getName() {
      console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
      console.log('process.env.VUE_APP_ENV===', process.env.VUE_APP_ENV);
    },
    toLogin() {
      if (this.name.trim().length === 0 || this.pwd.trim().length === 0) {
        alert('请输入用户名或者密码');
        return;
      }
      let params = {
        name: this.name,
        pwd: this.pwd
      };
      http
        .userLogin(params)
        .then(data => {
          if (data.data.code === '0000') {
            console.log('登录成功');
            //根据角色动态创建路由
            const role = data.data.role;
            console.log('role===', role);
            const menu = createRouter(role);
            console.log('menu===', menu);
            this.$store.commit('setMenu', { menu: menu, age: 111 });

            //标记登录成功
            this.$cookies.set('login', 'true');
            this.$cookies.set('role', role);
            this.$store.commit('setLogin', { isLogin: true, age: 111 });
            this.$store.commit('setRole', { role: role, age: 111 });

            //跳转页面
            const name = this.$route.query.from ? this.$route.query.from : 'home';
            this.$router.push({
              name: name
            });
          } else {
            console.log('登录失败');
          }
        })
        .catch(err => {
          console.log(err);
        });
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
  },
  mounted() {
    console.log(this);
  }
};
</script>
<style scoped lang="scss">
.login {
  padding: 50px 0;
  background-color: #ffffff;
  color: #03311c;
}
.item {
  display: flex;
  margin: 0 0 20px 50px;
}
.label {
  width: 70px;
  margin: 0 12px 0 0;
  text-align-last: justify;
}
.btn-login {
  flex: 1;
  text-align: center;
}
</style>
