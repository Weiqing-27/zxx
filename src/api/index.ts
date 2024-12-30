//引入axios
import axios from 'axios';
import type { HttpConfig } from '@/api/type';
import router from '@/router';
import { getStorage, getSession, setSession } from '@/assets/js/utils';
import { times, divide } from '@/assets/js/utils/digit';
import { showToast } from 'vant';

//跳转路由
export function routerPush(url: string, param?: object) {
    uni.navigateTo({ url: url + formatUrlParam(param) });
}

//路由回退
export function routerBack(delta?: number) {
    uni.navigateBack({
        delta: delta && 1
    });
}
//将对象转换成query string（GET请求需要）
export function formatUrlParam(param: any) {
    let paramsStr = '';
    if (param) {
        for (let key in param) {
            if (paramsStr == '') {
                paramsStr = `?${key}=${param[key]}`;
            } else {
                paramsStr += `&${key}=${param[key]}`;
            }
        }
    }
    return paramsStr;
}

class http {
    get = (config: HttpConfig) => {
        let paramsStr = '';
        if (config.data) {
            for (let key in config.data) {
                if (paramsStr == '') {
                    paramsStr = `?${key}=${config.data[key]}`;
                } else {
                    paramsStr += `&${key}=${config.data[key]}`;
                }
            }
        }
        config.url = config.url + paramsStr;
        return request({...config, method: 'GET' });
    };

    post = (config: HttpConfig) => {
        return request({...config, method: 'POST' });
    };

    put = (config: HttpConfig) => {
        return request({...config, method: 'PUT' });
    };

    delete = (config: HttpConfig) => {
        return request({...config, method: 'DELETE' });
    };
}
//网络请求封装
const request = (config: HttpConfig) => {
    return awaitWrap(
        new Promise((resolve, reject) => {
            let token = getStorage('token');
            if (!config.header) {
                config.header = { 'Content-Type': 'application/json' };
            }
            config.header['Authorization'] = token;
            //是否对非0业务码情况进行toast提示
            let showErrToast = true;
            if (config.errToast!= undefined) showErrToast = false;
            let catchError = true;
            if (config.catchError!= undefined) catchError = false;

            axios({
                url: (import.meta.env.MODE == 'development'? '/api' : import.meta.env.VITE_APP_BASEURL) + config.url,
                method: config.method,
                headers: config.header,
                timeout: config.timeout? config.timeout : 60000, //默认60秒，单位：毫秒
                data: config.data || {},
                onUploadProgress: (e: any) => {
                    if (e.event.lengthComputable && config.onUploadProgress) {
                        config.onUploadProgress(parseInt(`${times(divide(e.loaded, e.total), 100)}`));
                    }
                }
            })
               .then((res: any) => {
                    //接口请求成功
                    const data = res.data;
                    if (data.code!= 0) {
                        //不捕获错误业务码
                        if (!catchError) reject(data);
                        //判断业务接口返回各状态值
                        switch (data.code) {
                            // 未注册去往注册页
                            case 10002:
                                uni.redirectTo({
                                    url: '/pages/register/index'
                                });
                                break;
                            // token过期重新获取
                            case 10005:
                            case 10004:
                            case 401:
                            // 选择公司
                            case 10009:
                                //增加登录失效计数，存入缓存会话中，退出当前页面将自动清除
                                let loginErrorCount = Number(getSession('loginErrorCount')) || 0;
                                if (loginErrorCount < 1) {
                                    //清除本地保存数据
                                    uni.clearStorageSync();
                                    // 清空sessionStorage
                                    sessionStorage.clear();
                                }
                                setSession('loginErrorCount', loginErrorCount + 1);
                                break;
                            // 跳转加入团队审核中结果页
                            case 10010:
                                if (router.route?.path!= '/pages/register/jresult') {
                                    uni.redirectTo({
                                        url: `/pages/register/jresult?type=1`
                                    });
                                }
                                break;
                            case 20003:
                                uni.redirectTo({
                                    url: '/pages/pay/index'
                                });
                                break;
                        }
                        //显示错误提示
                        if (showErrToast && data.code!= 10010 && data.code!= 10009) {
                            showToast(data.message);
                        }
                        reject(data);
                    } else {
                        resolve(data.data);
                    }
                })
               .catch(err => {
                    //接口请求失败
                    reject(err);
                    if (showErrToast) {
                        showToast('网络请求失败');
                    }
                    console.log(err);
                });
        })
    );
};

const awaitWrap = (promise: any) => {
    return promise
       .then((data: any) => {
            return [data, null];
        })
       .catch((err: any) => {
            return [null, err];
        });
};

export default new http();