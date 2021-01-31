<template>
    <!-- 如果要该组件都可以使用，则必须放置在根元素下 -->
    <div class="hello" :style="styleVar">
        <div class="child-1">I am Child 1</div>
        <div class="child-2">I am Child 2</div>
        <div @click="onClick">Change Red TO Blue</div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            //相当于定义css变量
            styleVar: {
                '--colorBlue': 'blue',
                '--colorRed': 'red',
                '--fontSize': '30px',
                '--fontSizeTest': '30px'
            }
        };
    },
    methods: {
        onClick() {
            this.styleVar['--fontSizeTest'] = '40px';
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child-1 {
    color: var(--colorBlue);
    font-size: var(--fontSize);
}
.child-2 {
    color: var(--colorRed);
    font-size: var(--fontSizeTest);
}
</style>
