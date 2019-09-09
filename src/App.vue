<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-right' // 默认动态路由变化为slide-right
    };
  },

  watch: {
    $route(to, from) {
      console.log('=======路由变化了======');
      console.log('to===', to);
      console.log('from===', from);
      if (to.meta.dep > from.meta.dep) {
        console.log('前进');
        this.transitionName = 'slide-right';
      } else {
        console.log('后退');
        this.transitionName = 'slide-left';
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
}
.router {
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.6s ease-in-out;
}

/*==slide-right==*/
.slide-right-enter-to {
  z-index: 10;
}
.slide-right-leave-to {
  z-index: 2;
}
.slide-right-enter {
  opacity: 1;
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  opacity: 1;
  transform: translate(0, 0);
}

/*==slide-left==*/
.slide-left-enter-to {
  z-index: 2;
}
.slide-left-leave-to {
  z-index: 10;
}
.slide-left-enter {
  opacity: 0;
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}
</style>
