import { createRouter } from '@gowiny/uni-router';
import type { BeforeEachResult } from '@gowiny/uni-router';
import PAGE_DATA from '@/pages.json';
// import { getWeChatCode, weChatHideMenu } from '@/assets/js/wechat';
import { setStorage, getStorage, delStorage, isWeChat, loadScript, isEmpty, getSession, setSession, delSession } from '@/assets/js/utils';
 
//映射路由
const router = createRouter({
    pageData: PAGE_DATA
});

//前置路由守卫
router.beforeEach((to: any, from) => {
    return new Promise<BeforeEachResult>(async (success, fail) => {
        //页面参数，回退页面to对象会丢失query参数，所以本地初始化一个
        let routerQuery: any = {};
        if (to.query) routerQuery = to.query;
        //链接追加debug参数打开开发者工具
        let erudaType = typeof eruda;
        if (routerQuery.debug == 'true' && erudaType == 'undefined') {
            await loadScript(`/static/js/eruda.js`);
            eruda.init();
        }
        success(true);
        return;
        //路由白名单拦截
        // if (to.path == '/pages/login/set-token' || to.path == '/pages/login/clear') {
        //     success(true);
        //     return;
        // }
        //****自动登录相关操作****//
        const { code, token } = routerQuery;
        //传参方式设置token
        if (token) setStorage('token', token, 11);
        //当前环境
        const wechatType = isWeChat();
        //首次进入应用标识（刷新页面也算首次进入）
        let firstLaunch = getSession('first_launch');
        //是否可登录（根据当前登录失败次数设置）
        let loginFlag = true;
        //判断当前地址是否传入微信code参数
        // if (code) {
        //     if (getStorage('token')) {
        //     } else {
        //         //登录错误次数缓存
        //         let loginErrorCount = Number(getSession('loginErrorCount')) || 0;
        //         //登录操作
        //         let [result, err] = wechatType == 'wechat' ? await wechatLogin(code) : await wxworkLogin(code);
        //         if (result) {
        //             setStorage('token', result.token, 11);
        //             //判断userInfoFlag参数是否加入设置用户头像缓存标识
        //             if (result.userInfoFlag) setStorage('userInfoFlag', result.userInfoFlag);
        //         }
        //         if (err) {
        //             setSession('loginErrorCount', loginErrorCount + 1);
        //         }
        //         //判断当前错误登录次数，如果大于等于1，设置登录标识
        //         if (loginErrorCount >= 1) {
        //             loginFlag = false;
        //         }
        //     }
        // }
        //判断是否已登录
        if (getStorage('token')) {
            //判断是否是首次进入应用（刷新页面也算首次进入）
            if (firstLaunch) {
            }
            //清除首次进入应用标识缓存
            delSession('first_launch');
            //token在有效期内，路由放行
            success(true);
        } else {
            //如果没有code和token并且非当前会话多次错误登录情况，跳转微信重定向地址获取code进行登录
            if (loginFlag) {
                // getWeChatCode();
            }
        }
    });
});

//后置路由守卫
router.afterEach((to, from) => {
    return new Promise<BeforeEachResult>(async (success, fail) => {
        //后置路由隐藏微信菜单（weChatHideMenu()不加await防止阻塞页面）
        // weChatHideMenu();
        success(true);
    });
});

export default router;
