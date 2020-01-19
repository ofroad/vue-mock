<template>
    <div class="child-2">
        <p>childa div 内容</p>
        <div class="main">
            <slot>slot标签内的默认内容</slot>
        </div>
        <slot name="header"></slot>
        <slot name="footer"></slot>
        <slot name="scopebbb" :list123="list" :user123="user">{{ user.lastName }}---{{ list.age }}</slot>
        <p>slot外div内的内容</p>
    </div>
</template>
<script>
export default {
    name: 'slotchildb',
    props: ['pChild2'],
    data() {
        return {
            user: {
                lastName: '11',
                firstName: 'tom22222222222'
            },
            list: {
                age: 100,
                name: 'www'
            }
        };
    },
    inheritAttrs: false,
    mounted() {}
};
</script>
