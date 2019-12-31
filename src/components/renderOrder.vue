<template>
    <div class="box">
        <p>renderOrder component</p>
        <p>name: {{ k }}</p>
        <p>computedname: {{ kk }}</p>
        <p>age: {{ age }}</p>
        <p>std: {{ std }}</p>
        <button @click="chageAge">改变age</button>
        <button @click="chageStd">改变std</button>
    </div>
</template>

<script>
export default {
    name: 'renderOrder',
    props: {
        name: {
            type: [String, Number, Object],
            default: '100px'
        }
    },
    data() {
        return {
            k: this.name,
            age: 18,
            page: {
                total: 20,
                cur: 6
            },
            std: ['1', 2, 3, 'hhh']
        };
    },
    computed: {
        kk() {
            return JSON.stringify(this.name) + ' 001';
        }
    },
    watch: {
        //监控整个对象
        name: {
            handler: function(val, oldval) {
                console.log('旧值===', oldval.name);
                console.log('新值===', val.name);
                this.k = val;
            },
            deep: true //对象内部的属性监听，也叫深度监听
        },
        //监控对象的数学
        'name.name'(val, oldval) {
            console.log('name.name旧值===', oldval);
            console.log('name.name新值===', val);
        },
        //监控普通data
        age(val, oldval) {
            console.log('age旧值===', oldval);
            console.log('age新值===', val);
        },
        std(val, oldval) {
            console.log('std旧值===', oldval);
            console.log('std新值===', val);
        }
    },
    methods: {
        chageAge() {
            this.age = 1000;
        },
        chageStd() {
            /*
            Vue 不能检测以下数组的变动
            1.当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue，可以用Vue.set(vm.items, indexOfItem, newValue)代替实现
            2.当你修改数组的长度时，例如：vm.items.length = newLength，可以用vm.items.splice(newLength)代替实现
            */
            //this.std.length = 0;
            this.std.push('aaa');
        }
    },
    beforeCreate() {
        console.log('==userInfo beforeCreate==');
    },
    created() {
        console.log('==userInfo created==');
    },
    beforeMount() {
        console.log('==renderOrder beforeMount==');
    },
    mounted() {
        console.log('==renderOrder mounted==');
    },
    activated() {
        console.log('==renderOrder activated==');
    },
    deactivated() {
        console.log('==renderOrder deactivated==');
    },
    beforeDestroy() {
        console.log('==renderOrder beforeDestroy==');
    },
    destroyed() {
        console.log('==renderOrder destroyed==');
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
.box {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>
