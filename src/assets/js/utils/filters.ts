import dayjs from 'dayjs';
import { isEmpty } from '@/assets/js/utils';

//获取云存储文件缩放图片地址
export const getZoomImg = (param: { url: string; width: number | string; height: number | string; quality?: number; type?: string }) => {
    if (param.url?.substring(0, 4) == 'blob') {
        return param.url;
    } else {
        if (param.type && param.type == 'video') {
            //暂不支持视频截图
            // return `${param.url}?ci-process=snapshot&time=1&width${param.width}&height=${param.height}&=format=jpg`
        } else {
            return `${param.url}?imageView2/1/w/${param.width}/h/${param.height}/q/${param.quality ? param.quality : 100}`;
        }
    }
};

// 带星期的时间格式化
export const formatTimeWithWeek = (value: any, type = 'YYYY-MM-DD HH:mm') => {
    if (isEmpty(value)) return;
    let time = new Date(value);
    const weekArray = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    let day = weekArray[time.getDay()];
    let dateStr = dayjs(time.getTime()).format(type);
    return `${dateStr} ${day}`;
};

//格式化时间
export const formatTime = (value: any, type = 'YYYY-MM-DD HH:mm') => {
    if (isEmpty(value)) return;
    return dayjs(`${value}`).format(type);
};

//格式化成详细时间，如：2024-5-21 上午9：00
export const formatDetailTime = (value: any, type = 'YYYY.M.DD Ah:mm') => {
    if (isEmpty(value)) return;
    let timeValue = dayjs(`${value}`).format(type);
    //修改0点的情况格式化AM12改为AM0
    timeValue = timeValue.replace("AM12", "AM0");
    timeValue = timeValue.replace("AM", "上午");
    timeValue = timeValue.replace("PM", "下午");
    return timeValue;
};

//格式化数值
export const formatNumber = (value: number) => {
    if (typeof value !== 'number') return;
    return Number(value) >= 100000 ? '10w+' : value;
};

//数字转中文
export const numberToChinese = (number: number | string) => {
    const CHINESE_NUMBERS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const CHINESE_UNITS = ['', '十', '百', '千'];
    const CHINESE_GROUP_UNITS = ['', '万', '亿', '万亿'];
    if (number === 0) return '零';
    let [integer, decimal] = number.toString().split('.');
    let integerPart = '';
    let decimalPart = '';
    if (integer !== '0') {
        integerPart = integer
            .split('')
            .reverse()
            .map((value: any, index) => {
                return CHINESE_NUMBERS[value] + (value === '0' ? '' : CHINESE_UNITS[index % 4]);
            })
            .reverse()
            .join('')
            .replace(/零+/g, '零')
            .replace(/零$/g, '');
    }
    if (decimal) {
        decimalPart = decimal
            .split('')
            .map((value: any) => CHINESE_NUMBERS[value])
            .join('');
    }
    return integerPart + (decimalPart ? '点' + decimalPart : '') || '零';
};
