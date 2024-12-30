<template>
    <div class="page">
        <z-paging ref="paging" v-model="list" @query="getList">
            <template #top>
                <div class="header">
                    <Search class="search" v-model="value" shape="round" background="#3975C6" placeholder="请输入搜索关键词" />
                    <div clas="tabs">
                        <Tabs v-model:active="active" class="mt-12">
                            <Tab title="待处理"></Tab>
                            <Tab title="处理中"></Tab>
                            <Tab title="已完成"></Tab>
                        </Tabs>
                    </div>
                </div>
            </template>
            <div class="question-list1" v-if="active == 0">
                <div class="question-list" @click="routerPush('/pages/detail/pending-detail')">
                    <div class="up-part">
                        <div class="text-12"><span class="red-symbol">NEW</span>JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">上报人: 李华</div>
                    </div>
                </div>
                <div class="question-list" @click="routerPush('/pages/detail/pendingdetail')">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
               </div>
            <div class="question-list2" v-if="active == 1" @click="routerPush('/pages/detail/process-detail')">
                <div class="question">
                    <div class="flex justify-between border-bottom pb-13">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12 mt-6">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="system">销管系统</div>
                    <div class="gray6 text-13 flex my-6 mt-12 align-center">
                        <div class="w-90 mr-5">当前处理人</div>
                        <div>韩梅梅</div>
                    </div>
                    <div class="gray6 text-13 flex my-6">
                        <div class="w-90 mr-5">当前处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
                <div class="question">
                    <div class="flex justify-between border-bottom pb-13">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12 mt-6">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="system1">客服系统</div>
                    <div class="gray6 text-13 flex my-6 mt-12 align-center">
                        <div class="w-90 mr-5">当前处理人</div>
                        <div>韩梅梅</div>
                    </div>
                    <div class="gray6 text-13 flex my-6">
                        <div class="w-90 mr-5">当前处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
            </div>

            <div class="question-list3" v-if="active == 2" @click="routerPush('/pages/detail/completed-detail')">
                <div class="question1">
                    <div class="flex justify-between mb-6 flex justify-between border-bottom pb-13">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-14 text-bold mb-13">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="system mt-1">销管系统</div>
                    <div class="gray6 text-13 flex align-center">
                        <div class="w-90 mr-9 mb-20">处理方法</div>
                        <div class="pt-12 mb-12">问题转JIRA,这段话是处理方法处理方法处理方法</div>
                    </div>
                    <div class="gray6 text-13 flex my-6 ">
                        <div class="w-90">总处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
                <div class="question1">
                    <div class="flex justify-between mb-6 flex justify-between border-bottom pb-13">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-14 text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="system mt-1">销管系统</div>
                    <div class="gray6 text-13 flex align-center">
                        <div class="w-90 mr-9">处理方法</div>
                        <div class="pt-15">问题转JIRA,这段话是处理方法处理方法处理方法</div>
                    </div>
                    <div class="gray6 text-13 flex my-6 mt-15">
                        <div class="w-90">总处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
                <div class="question1">
                    <div class="flex justify-between mb-6 flex justify-between border-bottom pb-13">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-14 text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="system mt-1">销管系统</div>
                    <div class="gray6 text-13 flex align-center">
                        <div class="w-90 mr-9">处理方法</div>
                        <div class="pt-15">问题转JIRA,这段话是处理方法处理方法处理方法</div>
                    </div>
                    <div class="gray6 text-13 flex my-6 mt-10">
                        <div class="w-90">总处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
            </div>
            <template #bottom>
                <div class="button-content">
                    <Button type="primary" block @click="routerPush('/pages/report/report')" class="button">新增上报</Button>
                </div>
            </template>
        </z-paging>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search, Tab, Tabs, Button } from 'vant';
import { useRouter } from 'vue-router';
import { routerPush } from '@/assets/js/utils';
import useZPaging from '@/uni_modules/z-paging/components/z-paging/js/hooks/useZPaging.js';
const active = ref(0);
//列表搜索参数

const value = ref(''); // 用于搜索的双向绑定数据
const router = useRouter();
const paging: any = ref(null);
// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
const list: any = ref([]);
const getList = async (pageNo: number, pageSize: number) => {
    if (Array.isArray(null)) {
        // 当结果为数组时
    } else {
        // 数组有数据时更新分页组件的数据
        paging.value?.complete(null);
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    background-color: #f1f2f5;
    .header {
        height: 190rpx;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0, 58, 135, 0.05);
    }

    .question-list {
        height: 170rpx;
        background-color: #ffffff;
        margin: 24rpx 16rpx;
        border-radius: 16rpx;
        padding-top: 15rpx;
        border-bottom: 1rpx solid #e6e6e6;
        padding-bottom: 18rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0, 58, 135, 0.05);
        background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
        .red-symbol {
            padding: 4rpx 15rpx;
            background-color: #EE502F;
            border-radius: 14rpx;
            color: white;
            margin-right: 16rpx;
        }
        .up-part {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            border-bottom: 1rpx solid #e6e6e6;
            padding-bottom: 30rpx;
            margin: 30rpx 30rpx;
        }
        .low-part {
            color: #3975c6;
            display: flex;
            justify-content: space-between;
            font-size: 26rpx;
            margin: 3rpx 30rpx;
        }
    }

    .question {
        height: 325rpx;
        background-color: #ffffff;
        margin-top: 23rpx;
        padding: 24rpx 30rpx;
        margin: 16rpx;
        border-radius: 16rpx;
        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0, 58, 135, 0.05);
        background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
    }
    .question1 {
        height: 385rpx;
        background-color: #ffffff;
        margin-top: 23rpx;
        padding: 24rpx 30rpx;
        margin: 16rpx;
        border-radius: 16rpx;

        box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0, 58, 135, 0.05);
        background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
    }
    .button-content {
        display: flex;
        align-items: center;
        height: 188rpx;

        background-color: #ffffff;
    }
    .button {
        width: 718rpx;
        height: 104rpx;
        margin: 32rpx 16rpx;
        margin-top: 20rpx;
        background-color: #ffb148;
        border-radius: 16rpx;
    }
    .system {
        padding: 4rpx 20rpx;
        display: inline-block;
        width: auto;
        color: #ff8c8c;
        font-size: 24rpx;
        background: #fff3f3;
        border-radius: 8rpx;
    }
    .system1 {
        padding: 4rpx 20rpx;
        display: inline-block;
        width: auto;
        color: #ffac77;
        font-size: 24rpx;
        background: #fff7eb;
        border-radius: 8rpx;
    }
 
}
</style>
