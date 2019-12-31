<template>
    <div>
        child content
        <p>我是儿子，父亲对我说： {{ give }}</p>
        <p href="javascript:;" rel="external nofollow" @click="returnBackFn">回应</p>
    </div>
</template>

<script>
export default {
    name: 'child',
    props: {
        give: String
    },
    model: {
        //model选项指定用give作为接收父组件v-model传过来的值，用'returnBack'作为父组件v-model对应的监听的事件
        prop: 'give',
        event: 'returnBack'
    },
    methods: {
        returnBackFn() {
            //触发父组件的returnBack事件，会更新父组件的v-model绑定的属性的值
            this.$emit('returnBack', '还你200块');
        }
    },
    beforeCreate() {
        console.log('==child beforeCreate==');
    },
    created() {
        console.log('==child created==');
    },
    beforeMount() {
        console.log('==child beforeMount==');
    },
    mounted() {
        console.log('==child mounted==');
    },
    activated() {
        console.log('==child activated==');
    },
    deactivated() {
        console.log('==child deactivated==');
    },
    beforeDestroy() {
        console.log('==child beforeDestroy==');
    },
    destroyed() {
        console.log('==child destroyed==');
    }
};
</script>

<style scoped lang="scss">
.loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0);
}
.loading-con {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 80px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 10px;
}
.icon-loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    color: rgba(255, 255, 255, 0.9);
}
.icon-loading::before {
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
}
.icon-loading::after {
    border-color: rgb(255, 255, 255) transparent transparent;
    animation: loader 0.6s linear;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0 0 0 1px transparent;
}
.icon-loading::before,
.icon-loading::after {
    width: 50px;
    height: 50px;
    margin: 0 0 0 -25px;
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    box-sizing: border-box;
}
@keyframes loader {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}
.uinfo {
    font-size: 16px;
    color: #ccc;
}
</style>
