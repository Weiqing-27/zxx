<template>
    <div style="width: 100%" :style="{ height: height + 'rpx' }">
        <div class="van-sticky van-sticky--fixed" style="width: 100%; bottom: 0px" :style="{ height: height + 'rpx' }">
            <div class="sticky-bottom-bar" :class="{ 'sticky-bottom-bar-bg': showBg, 'pt-10 px-20': padding }">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/***自定义粘性底部操作栏，解决vant组件sticky组件动态添加元素有概率出现粘性失效问题***/
defineProps({
    //操作栏高度
    height: {
        type: Number,
        default: 170
    },
    showBg: {
        type: Boolean,
        default: true
    },
    padding: {
        type: Boolean,
        default: true
    }
});
</script>
<style lang="scss" scoped>
.sticky-bottom-bar {
    height: 100%;
}

.sticky-bottom-bar-bg {
    background: #ffffff;
    // box-shadow: 0rpx -10rpx 40rpx 10rpx rgba(224, 229, 238, 0.2);
    box-shadow: 0rpx -4rpx 25rpx 0rpx rgba(235, 239, 242, 1);
}
</style>
