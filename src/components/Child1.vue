<template>
    <div class="child-1">
        <p>in child1:</p>
        <p>props: {{ pChild1 }}</p>
        <p>$attrs: {{ $attrs }}</p>
        <hr />
        <!-- C组件中能直接触发test的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
        <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->
        <child2 v-bind="$attrs" v-on="$listeners"></child2>
        <p class="paa">$props：当前组件从父组件那里接收的参数，通俗的讲和$attr差不多，但是只包括在当前组件中定义了的props属性</p>
        <p class="paa">$attrs：当前组件的属性，即当前组件没有接收(没有在props中定义)的属性</p>
        <p class="paa">$attrs+$props = 在使用组件时定义的所有属性，不包括事件</p>
        <p class="paa">$listeners包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器，它可以通过 v-on=”$listeners” 传入内部组件。</p>
        <p class="paa">默认情况下组件内未被注册的属性将作为普通html元素属性被渲染</p>
        <p class="paa">
            可以在组件定义中添加inheritAttrs：false，组件将不会把未被注册的props呈现为普通的HTML属性。但是在组件里我们可以通过其$attrs可以获取到没有使用的注册属性，如果需要，我们在这也可以往下继续传递
        </p>
        <p class="paa">这个选项不影响 class 和 style 绑定。</p>
    </div>
</template>
<script>
import Child2 from '@/components/Child2.vue';
export default {
    name: 'child1',
    props: ['pChild1'],
    data() {
        return {};
    },
    inheritAttrs: false,
    components: { Child2 },
    mounted() {
        this.$emit('test1');
        console.log('child1 $attrs===', this.$attrs);
        console.log('child1 $listeners===', this.$listeners);
    }
};
</script>
<style scoped lang="scss">
.about {
    background-color: #fff;
}

a {
    color: #42b983;
}
.paa {
    padding: 20px;
}
</style>
