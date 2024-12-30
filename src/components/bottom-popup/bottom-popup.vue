<template>
    <Popup :show="modelValue" round position="bottom" @click-overlay="cancel">
        <div class="van-picker">
            <div class="van-picker__toolbar" v-if="showTitle">
                <div class="van-picker__cancel van-haptics-feedback flex align-center" v-if="showCancel" @click="cancel">取消</div>
                <div class="van-picker__title van-ellipsis" v-if="title">{{ title }}</div>
                <div class="van-picker__confirm van-haptics-feedback flex align-center" v-if="showConfirm" @click="confirm">确认</div>
            </div>
            <scroll-view style="max-height: 70vh" :scroll-y="true" :show-scrollbar="true" :class="{ 'pb-50': bottomGap }">
                <view :class="{ 'px-18': contentGap }">
                    <slot></slot>
                </view>
            </scroll-view>
        </div>
    </Popup>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Popup } from 'vant';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    // 是否显示取消按钮
    showCancel: {
        type: Boolean,
        default: true
    },
    // 是否显示确定按钮
    showConfirm: {
        type: Boolean,
        default: true
    },
    //底部是否填充空隙
    bottomGap: {
        type: Boolean,
        default: true
    },
    //内容是否向周围填充
    contentGap: {
        type: Boolean,
        default: true
    }
});

const showTitle = computed(() => {
    let show = false;
    if (props.showCancel) {
        show = true;
    } else if (props.showConfirm) {
        show = true;
    } else if (props.title != '') {
        show = true;
    }
    return show;
});

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm']);
const cancel = () => {
    emit('update:modelValue', false);
    emit('cancel');
};
const confirm = () => {
    emit('update:modelValue', false);
    emit('confirm');
};
</script>

<!-- <style lang="scss" scoped>
.content {
	width: calc(100vw);
	// background: linear-gradient(#FFEED2 0%, #ffffff 80rpx);
	background-repeat: no-repeat;
	border-radius: 36rpx 36rpx 0 0;
}
</style> -->
