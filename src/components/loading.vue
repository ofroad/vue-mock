<template>
    <div v-show="show" class="loading">
        <div class="loading-con"><b class="icon-loading"></b></div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    props: {
        show: {
            //type: Boolean,
            default: false
        }
    },
    created() {
        console.log('=========loading created========');
    },
    mounted() {
        console.log('=========loading mounted========');
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
</style>
