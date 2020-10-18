export default {
    data: function() {
        return {
            mixa: '来自mixin的定义'
        };
    },
    created: function() {
        console.log('created===混入对象的钩子被调用');
    }
};
