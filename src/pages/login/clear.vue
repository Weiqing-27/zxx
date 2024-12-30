<template>
    <div class="h-full flex align-center justify-center">
        <Button @click="clear" type="primary">清理Storage</Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from 'vant';
import { toast } from '@/assets/js/utils';

const clear = () => {
    uni.clearStorageSync();
    toast('清除Storage成功');
    window.location.reload();
};
</script>
