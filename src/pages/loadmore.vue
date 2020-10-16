<template>
    <div class="loadmore">
        <div ref="state" class="refresh">{{ stateText }}</div>
        <div ref="scroll" @touchstart="start" @touchmove="move" @touchend="end">
            <h1 class="title">联系人列表</h1>
            <div ref="listbox" class="wrap-list" :style="{ height: mheight + 'px' }" @scroll="doScroll">
                <ul>
                    <li class="item-list" v-for="(item, index) in list" :key="item.email + new Date()" @touchstart.stop @touchmove.stop @touchend.stop>
                        <span>{{ index + 1 }}. </span>
                        <span>{{ item.name }}</span>
                        <p>{{ item.address }}</p>
                    </li>
                </ul>
                <div class="moretext" v-show="showMoreText">{{ moreText }}</div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
import { getPrdList } from '../http/api';

export default {
    name: 'loadmore',
    data() {
        return {
            showRefresh: true,
            mheight: 200,
            list: [],
            startpos: 0,
            endpos: 0,
            endposaaa: 0,
            distance: 0,
            stateText: '',
            moreText: '加载中...',
            showMoreText: false,
            fetching: false
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
        getData(tag, callback) {
            getPrdList({ usrOnlyId: '10000024742' }).then(data => {
                console.log('data===', data);
                if (data.data.code === '0000') {
                    if (tag === 'refresh') {
                        this.list.length = 0;
                        this.list = data.data.data;
                    }
                    if (tag === 'loadmore') {
                        this.list = this.list.concat(data.data.data);
                    }
                    callback && callback();
                }
            });
        },
        start(e) {
            //alert('start事件');
            console.log('start===', e);
            this.startpos = e.touches[0].clientY;
            this.$refs.state.style.transition = 'transform 0s';
            this.$refs.scroll.style.transition = 'transform 0s';
            this.$refs.scroll.style.position = 'relative';
        },
        move(e) {
            console.log('move===', e);
            this.endpos = e.changedTouches[0].clientY;
            this.distance = this.endpos - this.startpos;
            if (this.distance > 0 && this.distance < 120) {
                this.$refs.state.style.transform = `translateY(${this.distance}px)`;
                this.$refs.scroll.style.transform = `translateY(${this.distance}px)`;
                this.stateText = '下拉刷新...';
                if (this.distance > 80) {
                    this.stateText = '释放更新...';
                }
            }
        },
        end(e) {
            // alert('end事件');
            console.log('end===', e);
            this.endposaaa = e.changedTouches[0].clientY;
            this.$refs.state.style.transition = 'transform 0.5s ease 0s';
            this.$refs.scroll.style.transition = 'transform 0.5s ease 0s';
            //防止下拉刷新时触发滚动请求
            this.$refs.listbox.scrollTop = 0;

            if (this.distance > 80) {
                this.stateText = '更新中...';
                console.log('=======请求数据=======');
                this.getData('refresh', () => {
                    console.log('我是回调');
                    //重置为初始状态
                    this.$refs.state.style.transform = `translateY(0px)`;
                    this.$refs.scroll.style.transform = `translateY(0px)`;
                    this.stateText = '下拉刷新...';
                    this.distance = 0;
                    this.startpos = 0;
                    this.endpos = 0;
                });
            } else {
                this.$refs.state.style.transform = `translateY(0px)`;
                this.$refs.scroll.style.transform = `translateY(0px)`;
            }
        },
        doScroll() {
            console.log('==触发滚动了==');
            const h1 = this.$refs.listbox.clientHeight;
            const h2 = this.$refs.listbox.scrollHeight;
            const stop = this.$refs.listbox.scrollTop;
            // console.log('h1===', h1);
            // console.log('h2===', h2);
            // console.log('stop===', stop);
            if (h2 - h1 - stop < 80 && !this.fetching) {
                this.fetching = true;
                console.log('可以触发请求了');
                this.showMoreText = true;
                this.getData('loadmore', () => {
                    this.fetching = false;
                    this.showMoreText = false;
                });
            }
        }
    },
    beforeCreate() {},
    created() {
        this.getData('refresh');
    },
    mounted() {
        this.$nextTick(() => {
            this.setHeight();
        });
        console.log('wwwwwwwwwwwwwwwwwwwwwwww===', this.$router);
    }
};
</script>

<style scoped lang="scss">
.loadmore {
    font-size: 32px;
    background-color: #fff;
}
a {
    color: #42b983;
}
.title {
    padding: 0 0 20px 40px;
    font-size: 40px;
}
.refresh {
    height: 80px;
    margin: -80px 0 0 0;
    line-height: 80px;
    text-align: center;
}
.wrap-list {
    overflow: auto;
}
.item-list {
    padding: 20px;
}
.moretext {
    padding: 20px 0;
    text-align: center;
    background-color: #ccc;
}
</style>
