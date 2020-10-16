<template>
    <div class="loadmore">
        <p class="refreshText">{{ text }}</p>
        <ul class="refreshContainer" @touchstart="getStart" @touchmove="getMove" @touchend="getEnd">
            <li v-for="item in listData" :key="item.value">{{ item.label }}</li>
        </ul>
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'loadmore2',
    data() {
        return {
            text: '',
            listData: [
                {
                    label: '测试数据001',
                    value: 'hjh'
                },
                {
                    label: '测试数据002',
                    value: 2
                },
                {
                    label: '测试数据003',
                    value: 3
                },
                {
                    label: '测试数据004',
                    value: 4
                },
                {
                    label: '测试数据005',
                    value: 5
                },
                {
                    label: '测试数据006',
                    value: 6
                },
                {
                    label: '测试数据007',
                    value: 7
                },
                {
                    label: '测试数据008',
                    value: 8
                },
                {
                    label: '测试数据009',
                    value: 9
                },
                {
                    label: '测试数据010',
                    value: 10
                },
                {
                    label: '测试数据0011',
                    value: 11
                },
                {
                    label: '测试数据0012',
                    value: 12
                },
                {
                    label: '测试数据0013',
                    value: 13
                },
                {
                    label: '测试数据004',
                    value: 14
                },
                {
                    label: '测试数据0015',
                    value: 15
                },
                {
                    label: '测试数据0016',
                    value: 1
                },
                {
                    label: '测试数据0016',
                    value: 16
                },
                {
                    label: '测试数据0017',
                    value: 17
                },
                {
                    label: '测试数据0018',
                    value: 18
                },
                {
                    label: '测试数据0019',
                    value: 19
                },
                {
                    label: '测试数据00100',
                    value: 100
                },
                {
                    label: '测试数据00101',
                    value: 101
                },
                {
                    label: '测试数据00102',
                    value: 102
                },
                {
                    label: '测试数据00103',
                    value: 103
                }
            ],
            startPosition: 0,
            movePostion: 0,
            refreshContainer: '',
            refreshText: ''
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
        getStart(e) {
            this.refreshContainer = document.querySelector('.refreshContainer');
            this.startPosition = e.touches[0].pageY;
            this.refreshContainer.style.position = 'relative';
            this.refreshContainer.style.transition = 'transform 0s';
        },
        getMove(e) {
            this.movePostion = e.touches[0].pageY;
            let transitionHeight = this.movePostion - this.startPosition;
            this.refreshText = document.querySelector('.refreshText');

            if (transitionHeight > 0 && transitionHeight < 100) {
                this.text = '下拉刷新';
                this.refreshContainer.style.transform = 'translateY(' + transitionHeight + 'px)';
                if (transitionHeight > 50) {
                    this.text = '释放更新';
                }
            }
        },
        getEnd() {
            console.log('=====getEnd=====');
            this.refreshContainer.style.transition = 'transform 0.5s ease 1s';
            this.refreshContainer.style.transform = 'translateY(0px)';
            this.text = '更新中...';
        }
    },
    beforeCreate() {},
    created() {
        //console.log(getData);
        // getData({ name: '234' }).then(function(data) {
        //   console.log('data===', data);
        // });
    },
    mounted() {}
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

.refreshContainer li {
    padding: 20px 0;
}
</style>
