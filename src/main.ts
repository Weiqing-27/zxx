// vant样式
import 'vant/lib/index.css';
//本地样式
import '@/assets/css/style/index.scss';
import '@/assets/css/main.scss';
import '@/assets/css/iconfont/iconfont.css';
//原项目css，过渡用
import '@/assets/css/flex.scss';


// 桌面端适配mouse事件
import '@vant/touch-emulator';
import * as Pinia from 'pinia';

import { createSSRApp } from 'vue';
import router from './router';
import App from './App.vue';
import { setDialogDefaultOptions, setToastDefaultOptions } from 'vant';

//初始化vant组件参数
//dialog
setDialogDefaultOptions({
    cancelButtonText: '再想想',
    confirmButtonText: '确定'
});
//loading toast提示
setToastDefaultOptions('loading', {
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
});

export function createApp() {
    const app = createSSRApp(App);
    app.use(Pinia.createPinia());
    app.use(router);
    return {
        app,
        Pinia
    };
}
