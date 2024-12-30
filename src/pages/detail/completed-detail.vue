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
                <div class="text-12 mt-7">这里是问题的详细描述，这一单话是问题的详细描述</div>
            </div>
            <div class="question-list">
                <div class="title">问题类型</div>
                <div class="content">-</div>
            </div>
            <div class="question-list">
                <div class="title">优先级</div>
                <div class="content">-</div>
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
            <div class="flex justify-between mt-15">
                <div class="title">上线时间</div>
                <div class="content">2024-6-24</div>
            </div>
        </div>
        <div class="ropoter-tontainer">
            <div class="text-15 text-bold">上报人信息</div>
            <div class="ropoter-list">
                <div class="title">上报人</div>
                <div class="content mx-10">超管(12309)</div>
            </div>
            <div class="ropoter-list">
                <div class="title">上报时间</div>
                <div class="content">超管2024-06-10</div>
            </div>
            <div class="ropoter-list">
                <div class="title">电话/手机</div>
                <div class="content">136 9222 4093</div>
            </div>
            <div class="ropoter-list">
                <div class="title">上报人建议</div>
                <div class="content">这是我的建议</div>
            </div>
            <div class="ropoter-list">
                <div class="title">上报人评价</div>
                <div class="content">非常满意</div>
            </div>
        </div>
        <div class="information">
            <div class="px-2 text-15 text-bold">附件信息</div>
            <div class="information-part">
                <div class="flex justify-between">
                    <img src="@/assets/images/detail/information.png" class="information-icon" />
                    <div class="text-container">
                        <div class="text mt-10">附件名称很长很长的名称.pdf</div>
                    </div>
                    <div class=" gray6 mt-10 ml-54">查看</div>
                </div>
            </div>
        </div>
        <div class="progress">
            <div class="px-2 text-15 text-bold">流程进度</div>
        </div>
        <div class="flex justify-center mt-36">
            <img src="@/assets/images/detail/bottom-bg.png" class="zhlogo" />
        </div>
    </div>
</template>

<script setup>
import { Button } from 'vant';
</script>

<style lang="scss" scoped>
.page {
    padding-top: 10rpx;
    min-height: 224vh;
    background-color: #f1f2f5;
    .question-container {
        height: 960rpx;
        margin: 24rpx 16rpx;
        padding: 24rpx 28rpx;
        background-color: #ffffff;
        border-radius: 16rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0,58,135,0.05);
    }
    .question-list {
        display: flex;
        justify-content: space-between;
        margin-top: 35rpx;
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
        height: 520rpx;
        margin-top: 24rpx;
        margin: 24rpx 16rpx;
        padding: 24rpx 24rpx;
        border-radius: 16rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0,58,135,0.05);
        .ropoter-list {
            display: flex;
            justify-content: space-between;
            margin-top: 32rpx;
            border-bottom: 1rpx solid #e6e6e6;
            padding-bottom: 18rpx;
        }
    }
    .information {
        background-color: #ffffff;
        height: 248rpx;
        margin: 24rpx 16rpx;
        padding: 20rpx 24rpx;
        border-radius: 16rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0,58,135,0.05);
        .information-part {
            width:100%;
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
        height: 1307rpx;
        background-color: #ffffff;
        margin: 24rpx 16rpx;
        padding: 20rpx 24rpx;
        border-radius: 16rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0,58,135,0.05);
    }
    .zhlogo {
        margin-top: 117rpx;
        width: 322rpx;
        height: 28rpx;
    }

    .title {
        margin-bottom: 14rpx;
        color: #999999;
        font-size: 26rpx;
    }
    .content {
        font-size: 26rpx;
        white-space: pre-wrap;
    }
}
</style>
