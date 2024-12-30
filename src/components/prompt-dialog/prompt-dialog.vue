<template>
    <Dialog :show="modelValue" @confirm="close" @close="close" :close-on-click-overlay="false" :show-confirm-button="false" class="custom-dialog">
        <div class="prompt-dialog-wrap">
            <div class="h-55 border-bottom flex justify-center align-center">
                <div class="custom-btn" @click="close">返回</div>
                <div class="text-16 black text-bold">{{ title }}</div>
            </div>
            <div class="pa-16">
                <Field
                    ref="fieldRef"
                    v-model="inputValue"
                    rows="5"
                    autosize
                    type="textarea"
                    :focus="inputFocus"
                    :autofocus="inputFocus"
                    :readonly="readonly"
                    placeholder=""
                    class="prompt-dialog-input"
                />
            </div>
            <div class="flex justify-center pb-24" v-if="!readonly">
                <Button class="prompt-dialog-button" @click="confirm" :disabled="loading" :loading="loading" loading-text="提交中...">提交</Button>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Dialog, Field, Button } from 'vant';
import { isEmpty } from '@/assets/js/utils';

//修改双向绑定值
const emit = defineEmits(['update:modelValue', 'confirm']);
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    value: {},
    title: {
        type: String,
        default: '标题'
    },
    loading: {
        type: Boolean,
        default: true
    },
    readonly: {
        type: Boolean,
        default: false
    }
});

const fieldRef: any = ref(null);
watch(
    () => props.modelValue,
    (newVal, oldVal) => {
        inputValue.value = props.value ? props.value : '';
        // if (!isEmpty(newVal)) inputValue.value = props.value;
        if (newVal) {
            setTimeout(() => {
                inputFocus.value = true;
                fieldRef.value.focus();
            }, 80);
        } else {
            inputValue.value = '';
            inputFocus.value = false;
        }
    }
);

//表单回显值
const inputValue: any = ref('');
//是否聚焦输入框
const inputFocus = ref(false);
const confirm = () => {
    emit('confirm', inputValue.value);
};
const close = () => {
    emit('update:modelValue', false);
};
</script>

<style scoped>
.prompt-dialog-wrap {
    border-radius: 16rpx;
    background: linear-gradient(180deg, #fffbf9 0%, #ffffff 22%, #ffffff 100%);
}
.prompt-dialog-input {
    background: #f9f9f9;
    border-radius: 8rpx;
    border: 2rpx solid #f2f2f2;
}
.prompt-dialog-button {
    min-width: 176rpx;
    height: 64rpx;
    background: linear-gradient(90deg, #ff7c11 0%, #ff9e28 100%);
    border-radius: 40rpx;
    border: 0;
    font-size: 28rpx;
    color: #ffffff;
}
.custom-btn {
    border: 0;
    position: absolute;
    left: 10rpx;
    top: 18rpx;
    padding: 20rpx 26rpx;
    font-size: 28rpx;
    color: #000;
}
</style>
