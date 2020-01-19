<template>
    <div id="app">
        <!-- <transition :name="transitionName">
            <keep-alive :include="routercached">
                <router-view class="router" />
            </keep-alive>
        </transition> -->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <loading :show="shshowLoading123"></loading>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            transitionName: 'slide-right' // 默认动态路由变化为slide-right
        };
    },
    computed: {
        ...mapState(['loadingCount', 'routercached']),
        shshowLoading123() {
            return this.loadingCount > 0;
        }
    },
    watch: {
        $route(to, from) {
            console.log('=======路由变化了======');
            console.log('to===', to);
            console.log('from===', from);
            if (to.meta.dep > from.meta.dep) {
                // console.log('前进');
                this.transitionName = 'slide-left';
            } else {
                // console.log('后退');
                this.transitionName = 'slide-right';
            }
            console.log('from.meta.cacheFor===', from.meta.cacheFor);
            // if (from.name === 'listpage' && to.name === 'contact') {
            //     console.log('符合缓存条件');
            //     if (this.include.indexOf(from.name) === -1) {
            //         this.include.push(from.name);
            //     }
            // }
        }
    },
    methods: {
        deleteItemFromArray(val) {
            const i = this.include.indexOf(val);
            if (i === -1) {
                return;
            }
            this.include.splice(i, 1);
            console.log('删除了', val);
            console.log('this.include', this.include);
        }
    },
    created() {
        console.log('=========app created========');
    },
    mounted() {
        console.log('=========app mounted========');
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
html {
    height: 100%;
}
body {
    font-size: 32px;
    height: 100%;
}
#app {
    position: relative;
    height: 100%;
    overflow: hidden;
}
.router {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.6s ease-in-out;
}

/*==slide-right==*/
.slide-right-enter-to {
    z-index: 2;
}
.slide-right-leave-to {
    z-index: 10;
}
.slide-right-enter {
    opacity: 0;
}
.slide-right-leave-to {
    transform: translate(100%, 0);
}

/*==slide-left==*/
.slide-left-enter-to {
    z-index: 10;
}
.slide-left-leave-to {
    z-index: 2;
}
.slide-left-enter {
    transform: translate(100%, 0);
}
.slide-left-leave-to {
    opacity: 0.8;
}
</style>
