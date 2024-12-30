<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app';
import { setSession } from '@/assets/js/utils';

onLaunch(async (option: any) => {
    //首次进入应用缓存，用于全局拦截判断是否首次进入应用
    setSession('first_launch', '1');
    //保存着陆页面地址，解决ios进入内页无法初始化微信sdk的问题
    setSession('landing_url', location.href);
});
</script>
<style></style>
