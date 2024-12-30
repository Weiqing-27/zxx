import http from '@/api/index';
import { getUUID, isEmpty } from '@/assets/js/utils';
import type { IContentOnOrOff } from './type';

enum API {
    GET_WX_CONFIG = '/h5/user/getShareVO', //获取微信配置字段
    GET_WXWORK_CONFIG = '/manager/gorpuser/getGorpShareVO', //获取企微配置字段
    CONTENT_ON_OR_OFF = '/manager/activity/onOroff' //活动、文章上下架
}

//微信获取配置项
export function getWxConfig(url: string) {
    return http.get({
        url: API.GET_WX_CONFIG,
        data: {
            url: encodeURIComponent(url)
        }
    });
}

//企微获取配置项
export function getWxWorkConfig(url: string) {
    return http.get({
        url: API.GET_WXWORK_CONFIG,
        data: {
            url: encodeURIComponent(url)
        }
    });
}

//活动、文章上下架
export function contentOnOrOff(data: IContentOnOrOff) {
    return http.post({
        url: API.CONTENT_ON_OR_OFF,
        data: data
    });
}
