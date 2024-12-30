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

//获取链接地址携带的参数
export function getUrlParam(url: string = window.location.href) {
    url = decodeURIComponent(url);
    const str = url.split('?')[1];
    if (!str) return {};
    const keys = str.split('&');
    let obj: any = {};
    keys.forEach((item, idx, data) => {
        let arr = item.split('=');
        obj[arr[0]] = arr[1];
    });
    return obj;
}

//显示toast提示
export function toast(msg: string) {
    showToast({
        message: msg,
        wordBreak: 'break-all' //文字换行方式
    });
}

//判断是否是空数据
export function isEmpty(value: any) {
    return value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0);
}
//去除字符串空格
export function replaceStr(str: string) {
    return str.replace(/\s+/g, '');
}

//判断是否是正整数
export function isInt(value: any) {
    return /^\d+$/.test(value);
}

//是否是手机号
export function isPhone(phone: any) {
    const reg = /^1[2-9]\d{9}$/;
    return reg.test(phone);
}

//是否是链接地址
export function isUrl(url: string) {
    const reg = /(http|https):\/\/([\w.]+\/?)\S*/;
    return reg.test(url);
}

// 获取唯一值
// /**
//  * @param {Number} len uuid的长度
//  * @param {Boolean} firstU 将返回的首字母置为"u"
//  * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
//  */
export function getUUID(len = 32, firstU = true, radix: any = null) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const uuid = [];
    radix = radix || chars.length;

    if (len) {
        // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
        for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
        let r;
        // rfc4122标准要求返回的uuid中,某些位为固定的字符
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        for (let i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16);
                uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
    if (firstU) {
        uuid.shift();
        return `u${uuid.join('')}`;
    }
    return uuid.join('');
}

//获取文件后缀名
export function getFileSuffix(fileName: string) {
    return fileName.substring(fileName.lastIndexOf('.') + 1);
}

//复制文本到剪切板
export function copyText(value: string) {
    let input = document.createElement('textarea'); // 创建input对象
    input.value = value; // 设置复制内容
    document.body.appendChild(input); // 添加临时实例
    input.select(); // 选择实例内容
    document.execCommand('Copy'); // 执行复制
    document.body.removeChild(input); // 删除临时实例
    toast('复制成功');
}

const storagePre = import.meta.env.VITE_APP_STORAGE_PRE;
// 设置缓存数据（expiration：有效时长）
export const setStorage = function (key: string, data: any, expiration?: number) {
    if (expiration) {
        let expirationTime = new Date().getTime() + expiration * 60 * 60 * 1000;
        localStorage.setItem(storagePre + key, JSON.stringify({ data, expirationTime }));
    } else {
        localStorage.setItem(storagePre + key, data);
    }
};
// 获取缓存数据
export const getStorage = function (key: string) {
    let now = new Date().getTime();
    let local: any = localStorage.getItem(storagePre + key);
    if (!local) {
        return '';
    } else {
        let { data, expirationTime } = JSON.parse(local);
        if (isEmpty(expirationTime) || expirationTime > now) {
            return expirationTime ? data : local;
        } else {
            localStorage.removeItem(storagePre + key);
            return '';
        }
    }
};
// 删除缓存数据
export const delStorage = function (key: string) {
    localStorage.removeItem(storagePre + key);
};

// 设置Session缓存
export const setSession = function (key: string, data: any) {
    sessionStorage.setItem(storagePre + key, data);
};
// 获取Session数据
export const getSession = function (key: string) {
    let local: any = sessionStorage.getItem(storagePre + key);
    if (!local) {
        return '';
    } else {
        return local;
    }
};
// 删除Session数据
export const delSession = function (key: string) {
    sessionStorage.removeItem(storagePre + key);
};

//深度克隆
export const deepClone = function (obj: any) {
    // 对常见的“非”值，直接返回原来值
    if ([null, undefined, NaN, false].includes(obj)) return obj;
    if (typeof obj !== 'object' && typeof obj !== 'function') {
        // 原始类型直接返回
        return obj;
    }
    const o: any = Array.isArray(obj) ? [] : {};
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return o;
};

//对比排序字段
export function compare(property: any, desc: any) {
    return function (a: any, b: any) {
        let value1 = a[property];
        let value2 = b[property];
        if (desc == true) {
            // 升序排列
            return value1 - value2;
        } else {
            // 降序排列
            return value2 - value1;
        }
    };
}

//判断是否是微信环境
export const isWeChat = function () {
    let ua: any = navigator.userAgent.toLowerCase();
    let isWx = ua.match(/Windows/i) != 'windows' && ua.match(/MicroMessenger/i) == 'micromessenger';
    if (!isWx) {
        return false;
    } else {
        let isWxWork = ua.match(/WxWork/i) == 'wxwork';
        if (isWxWork) {
            return 'wxwork';
        } else {
            return 'wechat';
        }
    }
};

//判断当前是否是手机环境
export const isMobile = () => {
    let mobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return mobile != null;
};

//获取当前平台
export const getPlatform = () => {
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return 'ios';
    } else if (/android/i.test(userAgent)) {
        return 'android';
    } else {
        return 'pc';
    }
};

//加载js文件
export const loadScript = (url: string, isLocal = true) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        //script.type = 'module';  //改成了非module的js文件
        script.src = (isLocal ? import.meta.env.VITE_APP_ROUTER_BASE : '') + url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

//拨打电话
export const phoneCall = (phone: string) => {
    if (!phone) return;
    uni.makePhoneCall({
        phoneNumber: phone
    });
};
