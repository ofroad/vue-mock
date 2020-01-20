<script>
const throttle = function(fn, wait = 50, isDebounce, ctx) {
    let timer;
    let lastCall;
    return function(...params) {
        if (isDebounce) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(ctx, params);
            }, wait);
        } else {
            console.log('01');
            const now = new Date().getTime();
            console.log('now===', now);
            console.log('lastCall===', lastCall);
            console.log('wait===', wait);
            if (now - lastCall < wait) {
                console.log('010');
                return;
            }
            console.log('011');
            lastCall = now;
            console.log('lastCall===', lastCall);
            fn.apply(ctx, params);
        }
    };
};

export default {
    name: 'Throttle',
    abstract: true,
    props: {
        time: Number,
        events: String,
        isDebounce: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.eventKeys = this.events.split(',');
        this.originMap = {};
        this.throttledMap = {};
    },
    render() {
        const vnode = this.$slots.default[0];
        this.eventKeys.forEach(key => {
            const target = vnode.data.on[key];
            if (target === this.originMap[key] && this.throttledMap[key]) {
                console.log('02');
                vnode.data.on[key] = this.throttledMap[key];
            } else if (target) {
                console.log('03');
                this.originMap[key] = target;
                this.throttledMap[key] = throttle(target, this.time, this.isDebounce, vnode);
                vnode.data.on[key] = this.throttledMap[key];
            }
        });
        return vnode;
    }
};
</script>
