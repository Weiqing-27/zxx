// import weixinJsSdk from 'weixin-js-sdk';
// import { getWxConfig, getWxWorkConfig } from '@/api/common';
// import { isWeChat, loadScript, getUrlParam, formatUrlParam, isEmpty, getSession, getStorage } from '@/assets/js/utils';

// const weChatAppId = import.meta.env.VITE_APP_WECHAT_APPID;
// const wxWorkAppId = import.meta.env.VITE_APP_WXWORK_APPID;
// const wxWorkAgentId = import.meta.env.VITE_APP_WXWORK_AGENTID;

// //当前环境
// let weChatType = isWeChat();
// const AppID = weChatType == 'wechat' ? weChatAppId : weChatType == 'wxwork' ? wxWorkAppId : weChatType;
// let jWeixin: any;

// // 是否开启微信调试模式
// const debug = false;
// // jssdk需要的api列表
// const jsApiList = [
//     'checkJsApi',
//     'updateAppMessageShareData',
//     'updateTimelineShareData',
//     'hideAllNonBaseMenuItem',
//     'hideMenuItems',
//     'showMenuItems',
//     'closeWindow',
//     'startRecord',
//     'stopRecord',
//     'onVoiceRecordEnd',
//     'translateVoice',
//     'openLocation',
//     'getLocation',
//     'shareAppMessage', //企微内部分享
//     'shareWechatMessage', //企微分享到微信
//     'onMenuShareAppMessage',
//     'onMenuShareWechat',
//     'onMenuShareTimeline',
//     'chooseWXPay',
//     'chooseImage'
// ];

// // 隐藏的操作栏列表
// const hideMenuList = [
//     'menuItem:share:appMessage', //企微微信通用分享
//     'menuItem:share:timeline', //todo 微信分享到朋友圈
//     'menuItem:share:wechat', //企微分享到微信
//     'menuItem:share:qq',
//     'menuItem:share:weiboApp',
//     'menuItem:share:facebook',
//     'menuItem:share:QZone',
//     'menuItem:favorite'
//     // "menuItem:copyUrl",
// ];

// // 可以开启的按钮列表
// const showMenuList = ['menuItem:share:appMessage', 'menuItem:share:wechat', 'menuItem:share:timeline'];

// //微信分享类型
// interface IShare {
//     title: string; //标题
//     desc: string; //描述
//     link: string; //分享地址
//     imgUrl: string; //分享图片
// }
// //打开微信地理位置类型
// interface IOpenLocation {
//     latitude: number; // 纬度，浮点数，范围为90 ~ -90
//     longitude: number; // 经度，浮点数，范围为180 ~ -180。
//     name?: string; // 位置名
//     address?: string; // 地址详情说明
//     scale?: number; // 地图缩放级别,整型值,范围从1~28。默认为最大
//     infoUrl?: string; // 在查看位置界面底部显示的超链接,可点击跳转
// }

// //微信支付类型
// interface IchooseWXPay {
//     timestamp: number; // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
//     nonceStr: string; // 支付签名随机串，不长于 32 位
//     package: string; // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
//     signType: string; // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
//     paySign: string; // 支付签名
// }

// //选择图片类型
// type ImageSizeType = 'original' | 'compressed';
// type ImageSourceType = 'album' | 'camera';
// interface IchooseImage {
//     /** 最多可以选择的图片张数，默认9 */
//     count?: number;
//     /** original 原图，compressed 压缩图，默认二者都有 */
//     sizeType?: ImageSizeType[];
//     /** album 从相册选图，camera 使用相机，默认二者都有 */
//     sourceType?: ImageSourceType[];
// }

// //过滤链接地址（去掉微信重定向code、state参数，重新拼接）
// function filterWechatRedirectUrl(url: string) {
//     let urlParam = getUrlParam(url);
//     delete urlParam.code;
//     delete urlParam.state;
//     let urlArr = url.split('?');
//     return urlArr[0] + formatUrlParam(urlParam);
// }

// //静默获取code
// export function getWeChatCode() {
//     let localhostUrl = encodeURIComponent(filterWechatRedirectUrl(window.location.href));
//     let routerPage = '';
//     if (weChatType == 'wxwork') {
//         //企微获取code链接
//         routerPage = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppID}&redirect_uri=${localhostUrl}&response_type=code&scope=snsapi_base&agentid=${wxWorkAgentId}&state=#wechat_redirect`;
//     } else {
//         //微信获取code链接
//         routerPage = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppID}&redirect_uri=${localhostUrl}&response_type=code&scope=snsapi_base&state=#wechat_redirect`;
//     }
//     window.location.replace(routerPage);
// }

// //授权获取code和用户资料
// export function getWeChatCodeForUserInfo(url?: string) {
//     let localhostUrl = encodeURIComponent(url ? url : filterWechatRedirectUrl(window.location.href));
//     let routerPage = '';
//     if (weChatType == 'wxwork') {
//         routerPage = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppID}&redirect_uri=${localhostUrl}&response_type=code&scope=snsapi_privateinfo&state=#wechat_redirect`;
//     } else {
//         routerPage = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppID}&redirect_uri=${localhostUrl}&response_type=code&scope=snsapi_userinfo&forcePopup=true&state=#wechat_redirect`;
//     }
//     window.location.replace(routerPage);
// }

// //根据登录返回的userInfoFlag是否等于1判断当前登录账户是否需要微信授权获取头像、昵称等信息
// export function weChatAuthFilter() {
//     if (getStorage('userInfoFlag') == '1') {
//         //获取去掉code参数的链接（避免重定向携带多个code参数）
//         let optionParams = getUrlParam(window.location.href);
//         delete optionParams.code;
//         let newUrl = window.location.href.split('?')[0] + formatUrlParam(optionParams);
//         getWeChatCodeForUserInfo(newUrl);
//         return false;
//     } else {
//         return true;
//     }
// }

// //初始化微信sdk
// // export async function initSdk() {
// //     return <any>new Promise(async (resolve, reject) => {
// //         if (!weChatType) {
// //             console.error('非微信环境无法初始化');
// //             resolve([null, '非微信环境无法初始化']);
// //         }
// //         //根据环境引入微信sdk
// //         // if ((typeof jWeixin) == 'undefined') {
// //         //     if (weChatType == 'wechat') {
// //         //         await loadScript('/static/js/jweixin-1.6.0.js')
// //         //     } else if (weChatType == 'wxwork') {
// //         //         await loadScript('/static/js/jweixin-work-1.2.0.js')
// //         //     }
// //         // }
// //         // jWeixin = wx
// //         jWeixin = weixinJsSdk;

// //         let landingUrl = getSession('landing_url');
// //         let url;
// //         if (weChatType == 'wechat') {
// //             url = uni.getSystemInfoSync().platform == 'ios' ? landingUrl || '' : window.location.href;
// //         } else if (weChatType == 'wxwork') {
// //             url = window.location.href;
// //         }
// //         let result, err;
// //         if (weChatType == 'wechat') {
// //             [result, err] = await getWxConfig(url);
// //         } else if (weChatType == 'wxwork') {
// //             [result, err] = await getWxWorkConfig(url);
// //         }
// //         if (result) {
// //             //初始化微信SDK
// //             let wxConfig: any = {
// //                 debug: debug,
// //                 appId: AppID,
// //                 timestamp: result.timeStamp,
// //                 nonceStr: result.nonceStr,
// //                 signature: result.signature,
// //                 jsApiList: jsApiList
// //             };
// //             if (weChatType == 'wxwork') wxConfig.beta = true;
// //             jWeixin.config(wxConfig);
// //             jWeixin.ready(() => {
// //                 resolve([{ code: 0 }, null]);
// //             });
// //             jWeixin.error((err: any) => {
// //                 resolve([null, err]);
// //             });
// //         }
// //     });
// // }
// // 微信自定义分享
// // export function weChatShare(data: IShare) {
// //     return <any>new Promise(async (resolve, reject) => {
// //         let [result, err] = await initSdk();
// //         if (result) {
// //             let shareData = {
// //                 title: data.title,
// //                 desc: data.desc,
// //                 link: data.link,
// //                 imgUrl: data.imgUrl,
// //                 success: (shareResult: any) => {
// //                     resolve([shareResult, null]);
// //                 },
// //                 cancel: (shareErr: any) => {
// //                     resolve([null, shareErr]);
// //                 },
// //                 fail: (shareErr: any) => {
// //                     console.error('自定义分享失败', shareErr);
// //                     resolve([null, shareErr]);
// //                 }
// //             };
// //             //显示分享按钮
// //             jWeixin.showMenuItems({
// //                 menuList: showMenuList
// //             });
// //             if (weChatType == 'wechat') {
// //                 //企业微信分享
// //                 jWeixin.updateAppMessageShareData(shareData);
// //                 //企业微信分享到朋友圈
// //                 jWeixin.updateTimelineShareData(shareData);
// //             } else if (weChatType == 'wxwork') {
// //                 jWeixin.onMenuShareAppMessage(shareData);
// //                 // jWeixin.onMenuShareWechat(shareData)
// //                 jWeixin.onMenuShareTimeline(shareData);
// //             }
// //         } else {
// //             resolve([null, err]);
// //         }
// //     });
// // }
// // 隐藏菜单操作按钮
// export async function weChatHideMenu() {
//     return <any>new Promise(async (resolve, reject) => {
//         let [result, err] = await initSdk();
//         if (result) {
//             // 关闭分享功能
//             jWeixin.hideMenuItems({
//                 menuList: hideMenuList
//             });
//             resolve([result, null]);
//         } else {
//             resolve([null, err]);
//         }
//     });
// }
// // 关闭页面事件
// export async function weChatCloseWindow() {
//     return <any>new Promise(async (resolve, reject) => {
//         let [result, err] = await initSdk();
//         if (result) {
//             jWeixin.closeWindow();
//             resolve([result, null]);
//         } else {
//             resolve([null, err]);
//         }
//     });
// }
// //获取位置信息
// export async function weChatGetLocation() {
//     return <any>new Promise(async (resolve, reject) => {
//         let [result, err] = await initSdk();
//         if (result) {
//             jWeixin.getLocation({
//                 type: 'gcj02', //wgs84
//                 success: (locationResult: any) => {
//                     resolve([locationResult, null]);
//                 },
//                 cancel: (locationErr: any) => {
//                     resolve([null, locationErr]);
//                 },
//                 fail: (locationErr: any) => {
//                     resolve([null, locationErr]);
//                 }
//             });
//         } else {
//             resolve([null, err]);
//         }
//     });
// }
// //查看位置信息
// export async function weChatOpenLocation(data: IOpenLocation) {
//     return <any>new Promise(async (resolve, reject) => {
//         let [result, err] = await initSdk();
//         if (result) {
//             jWeixin.openLocation({
//                 ...data,
//                 success: (locationResult: any) => {
//                     resolve([locationResult, null]);
//                 },
//                 fail: (locationErr: any) => {
//                     resolve([null, locationErr]);
//                 }
//             });
//         } else {
//             resolve([null, err]);
//         }
//     });
// }

// //选择图片
// export async function weChatChooseImage(data: IchooseImage) {
//     return <any>new Promise(async (resolve, reject) => {
//         let [result, err] = await initSdk();
//         if (result) {
//             jWeixin.chooseImage({
//                 ...data,
//                 success: (locationResult: any) => {
//                     resolve([locationResult, null]);
//                 },
//                 fail: (locationErr: any) => {
//                     resolve([null, locationErr]);
//                 }
//             });
//         } else {
//             resolve([null, err]);
//         }
//     });
// }

// //微信支付
// export async function weChatChooseWXPay(data: IchooseWXPay) {
//     return <any>new Promise(async (resolve, reject) => {
//         let [result, err] = await initSdk();
//         if (result) {
//             jWeixin.chooseWXPay({
//                 ...data,
//                 success: (locationResult: any) => {
//                     resolve([locationResult, null]);
//                 },
//                 fail: (locationErr: any) => {
//                     resolve([null, locationErr]);
//                 }
//             });
//         } else {
//             resolve([null, err]);
//         }
//     });
// }
