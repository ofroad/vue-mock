<template>
    <div>
        childprops content
        <input v-bind="$props" />
        <!-- 可用$props一次性接收，代替下面的写法 -->
        <!-- <input :placeholder="placeholder" :name="name" /> -->
    </div>
</template>

<script>
export default {
    name: 'childprops',
    props: ['placeholder', 'name'],
    methods: {},
    beforeCreate() {
        console.log('==childprops beforeCreate==');
    },
    created() {
        console.log('==childprops created==');
        //console.log(getData);
        // getData({ name: '234' }).then(function(data) {
        //   console.log('data===', data);
        // });
        // getQuan({ usrOnlyId: '10000024742' }).then(function(data) {
        //   console.log('data===', data);
        // });
    },
    beforeMount() {
        console.log('==childprops beforeMount==');
    },
    mounted() {
        console.log('==childprops mounted==');
    },
    activated() {
        console.log('==childprops activated==');
    },
    deactivated() {
        console.log('==childprops deactivated==');
    },
    beforeDestroy() {
        console.log('==childprops beforeDestroy==');
    },
    destroyed() {
        console.log('==childprops destroyed==');
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
