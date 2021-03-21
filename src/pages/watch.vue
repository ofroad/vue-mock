<template>
    <!-- 如果要该组件都可以使用，则必须放置在根元素下 -->
    <div class="hello">
        <div class="child-1">I am Child 1</div>
        <div class="child-2">I am Child 2</div>
        <div>Change Red TO Blue</div>
    </div>
</template>

<script>
export default {
    name: 'watch',
    props: {
        msg: String
    },
    data() {
        return {
            firstName: 'Dawei',
            lastName: 'Lou',
            fullName: '',
            za: '123',
            obj: {
                a: 123,
                name: 'jack'
            }
        };
    },
    watch: {
        firstName(newName, oldName) {
            console.log('oldName===', oldName);
            this.fullName = newName + ' ' + this.lastName;
        },
        za: {
            handler(newValue, old) {
                console.log('newValue===', newValue);
                console.log('old===', old);
            },
            immediate: true
        },
        obj: {
            handler(newName, oldName) {
                console.log('obj.a changed');
                console.log('newName===', newName);
                console.log('oldName===', oldName);
            },
            immediate: true,
            deep: true
        },
        'obj.name': {
            handler(newName, oldName) {
                console.log('newName===', newName);
                console.log('oldName===', oldName);
            },
            immediate: true
        }
    },
    methods: {},
    created() {
        console.log('==============watch created==============');
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
