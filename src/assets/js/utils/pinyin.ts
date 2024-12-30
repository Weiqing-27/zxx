import { pinyin } from 'pinyin-pro';
import { deepClone } from '@/assets/js/utils';

//数组对象追加索引字段和拼音字段；list：数据源；name：转拼音的字段名
export const addPinyin = (list: any, name = 'name') => {
    list = deepClone(list);
    if (!Array.isArray(list)) return [];
    let indexList: any = new Set();
    list.map((item: any) => {
        let indexNo = pinyin([...item[name]][0], {
            toneType: 'none',
            pattern: 'first'
        });
        indexNo = indexNo ? indexNo.toUpperCase() : '#';
        indexList.add(indexNo);
        item.index = indexNo;
        //名称全拼（去掉空格）
        item.pinyin = pinyin(item[name], {
            toneType: 'none'
        })
            .split(' ')
            .join('');
        return item;
    });
    // indexList = Array.from(indexList).sort()
    return list;
};
