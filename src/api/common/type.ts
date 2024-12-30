//获取活动列表参数
export interface IContentOnOrOff {
    content: string; //上/下架原因
    keyId: number | string; //文章，活动id
    operationType: number; //上下架状态 1上架；2下架
    type: number; //内容类型	1活动；2文章
}
