<template>
    <div>
        userInfo content
        <p class="uinfo">我可以在父组件中被改变样式</p>
    </div>
</template>

<script>
export default {
    name: 'userInfo',
    methods: {},
    beforeCreate() {
        console.log('==userInfo beforeCreate==');
    },
    created() {
        console.log('==userInfo created==');
        //console.log(getData);
        // getData({ name: '234' }).then(function(data) {
        //   console.log('data===', data);
        // });
        // getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
        //   console.log('data===', data);
        // });
    },
    beforeMount() {
        console.log('==userInfo beforeMount==');
    },
    mounted() {
        console.log('==userInfo mounted==');
    },
    activated() {
        console.log('==userInfo activated==');
    },
    deactivated() {
        console.log('==userInfo deactivated==');
    },
    beforeDestroy() {
        console.log('==userInfo beforeDestroy==');
    },
    destroyed() {
        console.log('==userInfo destroyed==');
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
