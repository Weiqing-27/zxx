<template>
    <div class="page">
        <div class="question-container">
            <div class="px-1 text-bold pt-13">问题描述</div>
            <div class="question-list">
                <div class="title">问题编号</div>
                <div class="content">NO20240618504</div>
            </div>
            <div class="question-list">
                <div class="title">标题</div>
                <div class="content">可疑交易系统审核意见有误</div>
            </div>
            <div class="question-other">
                <div class="gray9 text-12 pb-12 ">问题描述</div>
                <div class="text-12 pb-16">这里是问题的详细描述，这一单话是问题的详细描述</div>
            </div>
        </div>
        <div class="ropoter-tontainer">
            <div class="text-15 text-bold">上报人信息</div>
            <div class="ropoter-list">
                <div class="title">上报人</div>
                <div class="content">超管(12309)</div>
            </div>
            <div class="ropoter-list">
                <div class="title">上报时间</div>
                <div class="content">超管2024-06-10</div>
            </div>
            <div class="flex justify-between">
                <div class="gray9 mt-13">电话/手机</div>
                <div class="mt-13">136 9222 4093</div>
            </div>
        </div>
        <div class="information">
            <div class="px-2 text-15 text-bold">附件信息</div>
            <div class="information-part">
                <div class="box">
                    <img src="@/assets/images/detail/information1.png" class="information-icon" />
                    <div class="text-container">
                        <div class="text">附件名称.pdf</div>
                        <div class="gray9 my-2">84.0KB 上传于2024.07.22</div>
                    </div>
                </div>
                <div class="flex align-center mr-20 gray6   ">查看</div>
            </div>
            <div class="information-part">
                <div class="box">
                    <img src="@/assets/images/detail/information2.png" class="information-icon" />
                    <div class="text-container">
                        <div class="text">附件名称.pdf</div>
                        <div class="gray9 my-2">84.0KB 上传于2024.07.22</div>
                    </div>
                </div>
                <div class="flex align-center mr-20 gray6   ">查看</div>
            </div>
            <div class="information-part">
                <div class="box">
                    <img src="@/assets/images/detail/information3.png" class="information-icon" />
                    <div class="text-container">
                        <div class="text">附件名称.pdf</div>
                        <div class="gray9 my-2">84.0KB 上传于2024.07.22</div>
                    </div>
                </div>
                <div class="flex align-center mr-20 gray6   ">查看</div>
            </div>
            <div class="information-part">
                <div class="box">
                    <img src="@/assets/images/detail/information4.png" class="information-icon" />
                    <div class="text-container">
                        <div class="text">附件名称.pdf</div>
                        <div class="gray9 my-2">84.0KB 上传于2024.07.22</div>
                    </div>
                </div>
                <div class="flex align-center mr-20 gray6   ">查看</div>
            </div>
            <div class="information-part">
                <div class="box">
                    <img src="@/assets/images/detail/information5.png" class="information-icon" />
                    <div class="text-container">
                        <div class="text">附件名称.pdf</div>
                        <div class="gray9 my-2">84.0KB 上传于2024.07.22</div>
                    </div>
                </div>
                <div class="flex align-center mr-20 gray6   ">查看</div>
            </div>
        </div>
        <div class="progress">
            <div class="px-2 text-15 text-bold">流程进度</div>
        </div>
        <div class="flex justify-center mt-36">
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
    min-height: 155vh;
    background-color: #f1f2f5;
    .question-container {
        height: 420rpx;
        margin: 24rpx 16rpx;
        padding: 20rpx 24rpx;
        background-color: #ffffff;
        border-radius: 16rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0,58,135,0.05);
    }
    .question-list {
        margin-top: 36rpx;
        display: flex;
        justify-content: space-between;
        border-bottom: 1rpx solid #e6e6e6;
        padding-bottom: 25rpx;
    }
    .question-other {
        display: block;
        margin-top: 24rpx;
        padding-bottom: 18rpx;
    }
    .ropoter-tontainer {
        background-color: #ffffff;
        height: 314rpx;
        margin-top: 24rpx;
        margin: 24rpx 16rpx;
        padding: 24rpx 24rpx;
        padding-left: 24rpx;
        padding-right: 52rpx;
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
        height: 1000rpx;
        margin: 24rpx 16rpx;
        padding: 20rpx 24rpx;
        border-radius: 16rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0,58,135,0.05);
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

        .box {
            height: 60rpx;
            display: flex;
            justify-content: space-between;
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

    .button {
        height: 104rpx;
        background-color: #ffb148;
        border-radius: 16rpx;
    }

    .zhlogo {
        width: 322rpx;
        height: 28rpx;
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
