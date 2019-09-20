<template>
  <div class="picker">
    <h1 class="tit">picker选择器</h1>
    <div class="wrap-picker">
      <div class="box-picker">
        <ul class="box-list" ref="scroll" @touchstart="start" @touchmove="move" @touchend="end">
          <li :style="{ height: '40px', 'line-height': '40px' }" class="item" v-for="(item, index) in list" :key="index" @touchstart.stop="start" @touchmove.stop="move" @touchend.stop="end">
            {{ item }}
          </li>
        </ul>
      </div>
      <div :style="{ height: '40px', 'line-height': '40px' }" class="select-show"></div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'picker',
  data() {
    return {
      list: ['上海', '浙江', '江苏', '安徽', '湖北', '湖南', '广东', '广西', '云南'],
      startpos: 0,
      endpos: 0,
      distance: 0,
      predistance: 0
    };
  },
  computed: {
    role() {
      return this.$store.state.role;
    }
  },
  components: {},
  methods: {
    setHeight() {
      const top = this.$refs.listbox.getBoundingClientRect().top;
      const fullHeight = document.documentElement.clientHeight;
      console.log('top===', top);
      console.log('fullHeight===', fullHeight);
      this.mheight = fullHeight - top;
    },
    setPos(index, callback) {
      const distance = 40 * (1 - index);
      this.$refs.scroll.style.transition = 'transform 0.5s';
      this.$refs.scroll.style.transform = `translateY(${distance}px)`;
      callback &&
        setTimeout(() => {
          callback();
        }, 1200);
    },
    start(e) {
      //alert('start事件');
      console.log('start===', e);
      this.startpos = e.touches[0].clientY;
    },
    move(e) {
      console.log('move===', e);
      this.endpos = e.changedTouches[0].clientY;
      // this.$refs.scroll.style.transition = 'transform 1.5s';
      console.log('位移变化量===', this.endpos - this.startpos);
      this.distance = this.predistance + this.endpos - this.startpos;
      console.log('distance===', this.distance);

      if (this.distance <= 40 && this.distance >= -360) {
        this.$refs.scroll.style.transform = `translateY(${this.distance}px)`;
      }
    },
    end(e) {
      // alert('end事件');
      console.log('end===', e);
      if (this.distance < -320) {
        this.distance = -320;
        this.setPos(9, () => {
          this.$refs.scroll.style.transition = 'transform 0s';
        });
      }
      if (this.distance > 0) {
        this.distance = 0;
        this.setPos(1, () => {
          this.$refs.scroll.style.transition = 'transform 0s';
        });
      }

      // this.startpos = 0;
      // this.distance = 0;
      const index = Math.ceil(1 + this.distance / -40);
      console.log('index===', index);
      if (this.distance >= -320 && this.distance <= 0) {
        this.setPos(index, () => {
          this.$refs.scroll.style.transition = 'transform 0s';
          this.distance = 40 * (1 - index);
        });
      }

      //记住上次的位置
      this.predistance = this.distance;
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.picker {
  font-size: 32px;
  background-color: #fff;
}
a {
  color: #42b983;
}
.tit {
  margin: 0 0 200px 0;
}
.wrap-picker {
  display: flex;
  position: relative;
}
.box-picker {
  flex: 1;
  height: 400px;
  overflow: hidden;
}
.box-list {
  margin-top: 160px;
  font-size: 32px;
  color: #000;
  text-align: center;
}
.item {
  /*height: 80px;
  line-height: 80px;*/
}
.select-show {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 3;
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  transform: translate(0, -50%);
  box-sizing: border-box;
}
</style>
