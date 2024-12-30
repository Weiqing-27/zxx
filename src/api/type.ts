type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface HttpConfig {
    url: string;
    data?: any;
    header?: {
        'Content-Type': 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded';
        Authorization?: string;
    };
    method?: MethodType;
    timeout?: number; //请求超时时间
    onUploadProgress?: Function;
    errToast?: Boolean; //业务接口响应code不为0时，是否toast提示
    catchError?: Boolean; //是否需要捕获错误业务码（不捕获将不对错误业务码进行处理）
}
