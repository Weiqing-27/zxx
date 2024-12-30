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
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12"><span class="red-symbol">NEW</span>JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">上报人: 李华</div>
                    </div>
                </div>
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
                <div class="question-list">
                    <div class="up-part">
                        <div class="text-12">JK202405150184继续率计算个人所得险</div>
                    </div>
                    <div class="low-part">
                        <div class="time">2023-06-10 14:56</div>
                        <div class="repoter">处理人: 韩梅梅</div>
                    </div>
                </div>
            </div>
            <div class="question-list2" v-if="active == 1" @click="routerPush('/pages/detail/detail')">
                <div class="question">
                    <div class="flex justify-between mb-17">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="color3 bg-1 w-75 mr-12 pl-15">销管系统</div>
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
                    <div class="flex justify-between mb-17">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="color4 bg-2 w-75 mr-12 pl-15">销管系统</div>
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
                    <div class="flex justify-between mb-17">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="color4 bg-2 w-75 mr-12 pl-15">销管系统</div>
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

            <div class="question-list3" v-if="active == 2">
                <div class="question1">
                    <div class="flex justify-between mb-17">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="color3 bg-1 w-75 mr-12 pl-15">销管系统</div>
                    <div class="gray6 text-13 flex my-6 align-center">
                        <div class="w-90 mr-9">处理方法</div>
                        <div class="pt-15">问题转JIRA,这段话是处理方法处理方法处理方法</div>
                    </div>
                    <div class="gray6 text-13 flex my-6 mt-20">
                        <div class="w-90">总处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
                <div class="question1">
                    <div class="flex justify-between mb-17">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="color3 bg-1 w-75 mr-12 pl-15">销管系统</div>
                    <div class="gray6 text-13 flex my-6 align-center">
                        <div class="w-90 mr-9">处理方法</div>
                        <div class="pt-15">问题转JIRA,这段话是处理方法处理方法处理方法</div>
                    </div>
                    <div class="gray6 text-13 flex my-6 mt-20">
                        <div class="w-90">总处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
                                <div class="question1">
                    <div class="flex justify-between mb-17">
                        <div class="color1">2023-06-10 14:56</div>
                        <div class="color1">上报人： 李华</div>
                    </div>
                    <div class="text-bold mb-12">这是一个字数很多的标题，字数很多有三十个字一段很长很长的标题啊</div>
                    <div class="color3 bg-1 w-75 mr-12 pl-15">销管系统</div>
                    <div class="gray6 text-13 flex my-6 align-center">
                        <div class="w-90 mr-9">处理方法</div>
                        <div class="pt-15">问题转JIRA,这段话是处理方法处理方法处理方法</div>
                    </div>
                    <div class="gray6 text-13 flex my-6 mt-20">
                        <div class="w-90">总处理时长</div>
                        <div>24小时24分</div>
                    </div>
                </div>
                

</div>
            <template #bottom>
                <div class="button">
                    <Button type="primary" block @click="routerPush('/pages/report/report')">新增上报</Button>
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

const getList = ref([]);
const value = ref(''); // 用于搜索的双向绑定数据
const router = useRouter();
const paging: any = ref(null);
// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
const list: any = ref([]);

</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    background-color: #f1f2f5;
    .header {
        height: 190rpx;
        width: 100%;
        background-color: #ffffff;
        
    }
    .question-list {
        height: 190rpx;
        background-color: #ffffff;
        margin: 24rpx 16rpx;
        border-radius: 16rpx;
        padding: 20rpx;
        border-bottom: 1rpx solid #e6e6e6;
        padding-bottom: 18rpx;
        
        .red-symbol {
            padding: 4rpx 9rpx;
            background-color: red;
            border-radius: 40%;
            color: white;
            margin-right: 16rpx;
        }
        .up-part {
            display: flex;
            justify-content: space-between;
            margin-bottom: 50rpx;
            font-weight: bold;
            border-bottom: 1rpx solid #e6e6e6;
            padding-bottom: 50rpx;
            margin:30rpx 30rpx;
        }
        .low-part {
            color: #3975c6;
            display: flex;
            justify-content: space-between;
            font-size: 26rpx;
            margin:30rpx 30rpx;
        }
    }
    .button {
        height: 208rpx;
        background: #ffffff;
        padding-top: 50rpx;
    }
    .question {
        
        height: 325rpx;
        background-color: #ffffff;
        margin-top: 23rpx;
        padding: 24rpx 30rpx;
        margin: 16rpx;
        border-radius: 16rpx;
    }
    .question1{
        height: 425rpx;
        background-color: #ffffff;
        margin-top: 23rpx;
        padding: 24rpx 30rpx;
        margin: 16rpx;
        border-radius: 16rpx;
    }

    .color1 {
        color: #3975c6;
    }
    .color3 {
        color: #ff8c8c;
    }
    .color4 {
        color: #ffac77;
    }
    .bg-1 {
        background-color: #fff3f3;
    }
    .bg-2 {
        background-color: #fff7eb;
    }
    .bg-3{
        background-color:#ffffff;
    }
}
</style>
