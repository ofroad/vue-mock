<template>
    <div class="child-2">
        <p>childa div 内容</p>
        <div class="main">
            <slot>slot标签内的默认内容</slot>
        </div>
        <slot name="header"></slot>
        <slot name="footer"></slot>
        <slot name="scopeaaa" :user123="user">{{ user.lastName }}</slot>
        <p>slot外div内的内容</p>
    </div>
</template>
<script>
export default {
    name: 'slotchilda',
    props: ['pChild2'],
    data() {
        return {
            user: {
                lastName: '11',
                firstName: 'tom22222222222'
            }
        };
    },
    inheritAttrs: false,
    mounted() {}
};
</script>
