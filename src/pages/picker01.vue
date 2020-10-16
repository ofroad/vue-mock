<template>
    <div class="picker">
        <h1 class="tit">picker选择器</h1>
        <div class="wrap-picker">
            <div class="box-picker">
                <ul class="box-list" ref="list" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
                    <li :style="{ height: '40px', 'line-height': '40px' }" class="item" v-for="(item, index) in listData" :key="index">
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
    name: 'picker01',
    props: {
        // listData: {
        //   type: Array,
        //   required: true
        // },
        defaultValue: {
            type: [String, Number]
        },
        keyIndex: {
            type: Number,
            default: 0
        },
        isUpdate: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        role() {
            return this.$store.state.role;
        }
    },
    components: {},
    data() {
        return {
            listData: ['上海', '浙江', '江苏', '安徽', '湖北', '湖南', '广东', '广西', '云南'],
            touchParams: {
                startY: 0,
                endY: 0,
                startTime: 0,
                endTime: 0
            },
            currIndex: 1,
            //每次移动前的位置
            transformY: 0,
            //每次移动后的位置
            scrollDistance: 0,
            lineSpacing: 40,
            rotation: 20,
            timer: null
        };
    },
    watch: {
        isUpdate: function() {
            this.transformY = 0;
            this.modifyStatus();
        },
        defaultValue: function() {
            this.transformY = 0;
            this.modifyStatus();
        }
    },
    methods: {
        updateTransform(value) {
            if (value) {
                this.transformY = 0;
                this.timer = setTimeout(() => {
                    this.modifyStatus(null, value);
                }, 10);
            }
        },

        setRollerStyle(index) {
            return `transform: rotate3d(1, 0, 0, ${-this.rotation * index}deg) translate3d(0px, 0px, 104px)`;
        },

        isHidden(index) {
            if (index >= this.currIndex + 8 || index <= this.currIndex - 8) {
                return true;
            } else {
                return false;
            }
        },

        setTransform(translateY = 0, type, time = 1000) {
            if (type === 'end') {
                this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
                //this.$refs.roller.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
            } else {
                this.$refs.list.style.webkitTransition = '';
                //this.$refs.roller.style.webkitTransition = '';
            }
            this.$refs.list.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`;
            //this.$refs.roller.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`;
            this.scrollDistance = translateY;
        },

        setMove(move, type, time) {
            let updateMove = move + this.transformY;
            if (type === 'end') {
                //touchend时执行
                // 限定滚动距离
                if (updateMove > 0) {
                    updateMove = 0;
                }
                if (updateMove < -(this.listData.length - 1) * this.lineSpacing) {
                    updateMove = -(this.listData.length - 1) * this.lineSpacing;
                }

                // 设置滚动距离为lineSpacing的倍数值
                let endMove = Math.round(updateMove / this.lineSpacing) * this.lineSpacing;
                console.log('updateMove===', updateMove);
                console.log('endMove===', endMove);
                let deg = `${(Math.abs(Math.round(endMove / this.lineSpacing)) + 1) * this.rotation}deg`;

                //滚动到对应的位置
                this.setTransform(endMove, type, time, deg);

                //通知父组件
                this.timer = setTimeout(() => {
                    this.setChooseValue(endMove);
                }, time / 2);

                this.currIndex = Math.abs(Math.round(endMove / this.lineSpacing)) + 1;
            } else {
                //touchmove时执行
                let deg = '0deg';
                if (updateMove < 0) {
                    deg = `${(Math.abs(updateMove / this.lineSpacing) + 1) * this.rotation}deg`;
                } else {
                    deg = `${(-updateMove / this.lineSpacing + 1) * this.rotation}deg`;
                }

                this.setTransform(updateMove, null, null, deg);
                this.currIndex = Math.abs(Math.round(updateMove / this.lineSpacing)) + 1;
            }
        },

        setChooseValue(move) {
            this.$emit('chooseItem', this.listData[Math.round(-move / this.lineSpacing)], this.keyIndex);
        },

        touchStart(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.startY = changedTouches.pageY;
            this.touchParams.startTime = event.timestamp || Date.now();
            this.transformY = this.scrollDistance;
        },

        touchMove(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;

            this.setMove(move);
        },

        touchEnd(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;

            let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
            if (moveTime <= 300) {
                move = move * 2;
                moveTime = moveTime + 1000;
                this.setMove(move, 'end', moveTime);
            } else {
                this.setMove(move, 'end');
            }
        },

        modifyStatus(type, defaultValue) {
            defaultValue = defaultValue ? defaultValue : this.defaultValue;
            console.log('defaultValue===', defaultValue);
            let index = this.listData.indexOf(defaultValue);
            console.log('index===', index);
            this.currIndex = index === -1 ? 1 : index + 1;
            console.log('currIndex===', this.currIndex);
            let move = index === -1 ? 0 : index * this.lineSpacing;
            console.log('move===', move);
            type && this.setChooseValue(-move);
            this.setMove(-move);
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.modifyStatus(true);
            // 监听
            // this.$el.addEventListener('touchstart', this.touchStart);
            // this.$el.addEventListener('touchmove', this.touchMove);
            // this.$el.addEventListener('touchend', this.touchEnd);
        });
    },
    beforeDestroy() {
        // 移除监听
        // this.$el.removeEventListener('touchstart', this.touchStart);
        // this.$el.removeEventListener('touchmove', this.touchMove);
        // this.$el.removeEventListener('touchend', this.touchEnd);
        // clearTimeout(this.timer);
    }
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
