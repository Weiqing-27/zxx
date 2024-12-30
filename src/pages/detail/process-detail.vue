<template>
    <div class="page">
        <div class="question-container">
            <div class="px-1 text-bold">问题描述</div>
            <div class="question-list">
                <div class="title">问题编号</div>
                <div class="content">NO20240618504</div>
            </div>
            <div class="question-list">
                <div class="title">标题</div>
                <div class="content">可以交易系统审核意见有误</div>
            </div>
            <div class="question-other">
                <div class="gray9 text-12">问题描述</div>
                <div class="text-12 mt-12">这里是问题的详细描述，这一单话是问题的详细描述</div>
            </div>
            <div class="question-list">
                <div class="title">问题类型</div>
                <div class="content">应用系统问题-系统BUG</div>
            </div>
            <div class="question-list">
                <div class="title">优先级</div>
                <div class="content">高级</div>
            </div>
            <div class="question-list">
                <div class="title">严重程度</div>
                <div class="content">高级</div>
            </div>
            <div class="question-list">
                <div class="title">所属系统</div>
                <div class="content">销管系统</div>
            </div>
            <div class="question-list">
                <div class="title">开发人员</div>
                <div class="content">韩梅梅</div>
            </div>
            <div class="question-list">
                <div class="title">上线时间</div>
                <div class="content">2024-6-24</div>
            </div>
        </div>
        <div class="ropoter-tontainer">
            <div class="text-15 text-bold">上报人信息</div>
            <div class="ropoter-list">
                <div class="title">上报人</div>
                <div class="content mx-8">超管(12309)</div>
            </div>
            <div class="ropoter-list">
                <div class="title">上报时间</div>
                <div class="content">2024-06-10</div>
            </div>
            <div class="ropoter-list">
                <div class="title">电话/手机</div>
                <div class="content">136 9222 4093</div>
            </div>
        </div>
        <div class="information">
            <div class="px-2 text-15 text-bold">附件信息</div>
            <div class="information-part">
                <div class="flex justify-between">
                    <img src="@/assets/images/detail/information.png" class="information-icon" />
                    <div class="text-container">
                        <div class="text">附件名称.pdf</div>
                        <div class="gray9">84.0KB 上传于2024.07.22</div>
                    </div>
                </div>
                <div class="mx-20 my-6 gray6 my-9">查看</div>
            </div>
        </div>
        <div class="progress">
            <div class="px-2 text-15 text-bold">流程进度</div>
        </div>
        
        <div class="flex justify-center">
            <img src="@/assets/images/detail/bottom-bg.png" class="zhlogo" />
        </div>
        <sticky-bottom-bar>
            <Button type="primary" block @click="routerPush('/pages/detail/detail')" class="button">审核</Button>
        </sticky-bottom-bar>
    </div>
</template>

<script setup>
import { Button } from 'vant';
</script>

<style lang="scss" scoped>
.page {
    padding-top: 10rpx;
    min-height: 148vh;
    background-color: #f1f2f5;
    .question-container {
        height: 970rpx;
        margin: 24rpx 16rpx;
        padding: 20rpx 24rpx;
        background-color: #ffffff;
        border-radius: 16rpx;

    }
    .question-list {
        margin-top: 36rpx;
        display: flex;
        justify-content: space-between;
        border-bottom: 1rpx solid #e6e6e6;
        padding-bottom: 18rpx;
    }
    .question-other {
        display: block;
        margin-top: 24rpx;
        border-bottom: 1rpx solid #e6e6e6;
        padding-bottom: 18rpx;
    }
    .ropoter-tontainer {
        background-color: #ffffff;
        height: 310rpx;
        margin-top: 24rpx;
        margin: 24rpx 16rpx;
        padding: 24rpx 24rpx;
        border-radius: 16rpx;

        .ropoter-list {
            display: flex;
            justify-content: space-between;
            margin-top: 32rpx;
            border-bottom: 1rpx solid #e6e6e6;
            padding-bottom: 18rpx;
            margin-right:12rpx;
        }
    }
    .information {
        background-color: #ffffff;
        height: 248rpx;
        margin: 24rpx 16rpx;
        padding: 20rpx 24rpx;
        border-radius: 16rpx;

        .information-part {
            display: flex;
            justify-content: space-between;
            width:100%;
            height:80rpx;
            display: flex;
            align-content: center;
            border-radius: 16rpx;
            border: 2rpx solid #e6e6e6;
            margin: 32rpx 0;
            padding: 24rpx 1rpx;
        }

        .information-icon {
            padding: 10rpx 32rpx;
            width: 42rpx;
            height: 53rpx;
        }
    }
    .progress {
        height: 230rpx;
        background-color: #ffffff;
        margin: 24rpx 16rpx;
        padding: 20rpx 24rpx;
        border-radius: 16rpx;
 
    }
    .zhlogo {
        margin-top:273rpx;
        margin-bottom:8rpx;
        width: 322rpx;
        height: 28rpx;
    }
    .button{
        height:104rpx;
        background-color:#FFB148 ;
        border-radius: 16rpx;
    }

    .title {
        margin-bottom:12rpx;
        color: #999999;
        font-size: 26rpx;
    }
    .content {
        font-size: 26rpx;
        white-space: pre-wrap;
    }
}
</style>
