<template>
    <div class="page">
        <!-- 头部 -->
        <div class="header">
            <img src="@/assets/images/index/robot.png" class="robot-icon" />
            <div>
                <div class="text-18 text-bold pt-12">Hi~，有什么可以帮您！</div>
                <div class="text-15 color2 pt-6">中韩小秘为您服务</div>
            </div>
        </div>
        <!-- AI助理选择栏 -->
        <div class="switch-box">
            <div :class="`switch-box-bg bg${currentApp}`">
                <div class="switch-list">
                    <div class="switch-item" :class="{ 'active': currentApp == 1 }" @click="switchApp(1)">AI 运维助理</div>
                    <div class="switch-item" :class="{ 'active': currentApp == 2 }" @click="switchApp(2)">AI 数据助手</div>
                </div>
                <div class="switch-content" v-show="currentApp == 1">
                    系统使用相关、系统发布相关、值班人员安排，建议及问题上报等，我会帮您快速查询与解决！
                </div>
                <div class="switch-content" v-show="currentApp == 2">
                    帮助您快速找到想要的数据，我还在持续学习中，目前仅支持每日业绩数据查询！
                </div>
            </div>
        </div>
        <!-- AI内容输入框 -->
        <div class="content-textarea">
            <Field v-model="inputValue" class="custom-input" placeholder="（请不要随意上传公司内部数据机密哦！）" type="textarea"
                :maxlength="inputMaxlength" :autosize="{ minHeight: 72, maxHeight: 350 }" :border="false"></Field>
            <div class="pb-6 px-6 flex align-center justify-end">
                <div class="pr-6">{{ currentInputValueLength }}/{{ inputMaxlength }}</div>
                <div class="pa-6">
                    <img src="@/assets/images/index/send-btn.png" class="w-24 h-24" />
                </div>
            </div>
        </div>
        <!-- 猜你想问栏目 -->
        <div class="content">
            <div class="title primary">猜你想问</div>
            <div class="tabs">
                <div class="tabs-item" :class="{ 'active': currentTab == 0 }" @click="currentTab = 0">
                    <img src="@/assets/images/index/icon1.png" class="w-30" />
                    <div class="text-bold text-14 mt-8">业绩快报</div>
                </div>
                <div class="tabs-item" :class="{ 'active': currentTab == 1 }" @click="currentTab = 1">
                    <img src="@/assets/images/index/icon2.png" class="w-30" />
                    <div class="text-bold text-14 mt-8">提数服务</div>
                </div>
                <div class="tabs-item" :class="{ 'active': currentTab == 2 }" @click="currentTab = 2">
                    <img src="@/assets/images/index/icon3.png" class="w-30" />
                    <div class="text-bold text-14 mt-8">创作锦囊</div>
                </div>
            </div>
            <div class="content-list">
                <div class="content-list-item">
                    <div class="content-list-dot"></div>
                    这里是场景问题
                </div>
                <div class="content-list-item">
                    <div class="content-list-dot"></div>
                    这里是场景问题
                </div>
                <div class="content-list-item">
                    <div class="content-list-dot"></div>
                    这里是场景问题
                </div>
                <div class="content-list-item">
                    <div class="content-list-dot"></div>
                    这里是场景问题
                </div>
                <div class="content-list-item">
                    <div class="content-list-dot"></div>
                    这里是场景问题
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Field } from "vant";

const inputValue = ref('');
const inputMaxlength = ref(1000);
//获取输入框字数
const currentInputValueLength = computed(() => {
    return inputValue.value.length;
})

const currentApp = ref(1)
//切换AI应用
const switchApp = (num: number) => {
    currentApp.value = num;
}

//猜你想问tab
const currentTab = ref(0);

</script>

<style lang="scss" scoped>
page {
    background: linear-gradient(182deg, #EFF5FF 0%, #EDEEFF 56%, #F9F6FF 100%);
}

.page {
    min-height: 100vh;
    background: url('@/assets/images/index/bg.png') no-repeat;
    background-size: 100% auto;
    background-position: left -141rpx;

    .header {
        display: flex;
        align-items: center;

        .robot-icon {
            width: 254rpx;
            height: 222rpx;
        }
    }

    .switch-box {
        position: relative;
        z-index: 2;
        margin: -16rpx auto 24rpx auto;
        width: 684rpx;
        height: 273rpx;
        background: linear-gradient(180deg, #A9C4FF 0%, #EDF3FF 100%);
        box-shadow: 0rpx 2rpx 20rpx 0rpx rgba(35, 86, 187, 0.1);
        border-radius: 24rpx;

        .switch-box-bg {
            width: 684rpx;
            height: 273rpx;
        }

        .switch-box-bg.bg1 {
            background: url('@/assets/images/index/tabs-content-bg1.png') no-repeat;
            background-size: 100% 100%;
        }

        .switch-box-bg.bg2 {
            background: url('@/assets/images/index/tabs-content-bg2.png') no-repeat;
            background-size: 100% 100%;
        }

        .switch-list {
            display: flex;

            .switch-item {
                width: 50%;
                height: 86rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 32rpx;
            }

            .switch-item.active {
                font-size: 36rpx;
                color: $primary;
                font-weight: bold;
                position: relative;
                z-index: 1;
            }

            .switch-item.active::before {
                content: ' ';
                width: 90rpx;
                height: 30rpx;
                background: url('@/assets/images/index/tabs-border.png');
                background-size: 100% 100%;
                position: absolute;
                z-index: -1;
                bottom: 8rpx;
            }
        }

        .switch-content {
            height: 187rpx;
            padding: 0 40rpx;
            font-size: 26rpx;
            color: #123C7C;
            display: flex;
            align-items: center;
        }
    }

    .content-textarea {
        margin: 0 32rpx 24rpx 32rpx;
        background: #FFFFFF;
        box-shadow: 0rpx 2rpx 20rpx 0rpx rgba(35, 86, 187, 0.1);
        border-radius: 16rpx;
        
        .custom-input {
            background: transparent;
            padding-bottom: 0;
        }
    }

    .content {
        margin: 0 32rpx;
        padding: 28rpx 24rpx;
        background: linear-gradient(180deg, #F3F6FF 0%, #FFFFFF 100%);
        box-shadow: 0rpx 2rpx 20rpx 0rpx rgba(35, 86, 187, 0.1), inset 0rpx 2rpx 3rpx 0rpx #FFFFFF;
        border-radius: 24rpx;

        .title {
            font-weight: bold;
            font-size: 32rpx;
            text-shadow: 0px 2px 20px rgba(35, 86, 187, 0.1);
        }

        .tabs {
            display: flex;
            gap: 19rpx;
            justify-content: space-between;
            margin-top: 28rpx;

            .tabs-item {
                width: 100%;
                background: #EEF2FF;
                border: 1rpx solid #EEF2FF;
                box-shadow: 0rpx 2rpx 20rpx 0rpx rgba(35, 86, 187, 0.1);
                border-radius: 8rpx;
                height: 141rpx;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .active {
                border: 1rpx solid #B1C7FF;
                box-shadow: 0rpx 2rpx 20rpx 0rpx rgba(35, 86, 187, 0.1);
                background: #FFFFFF;
            }
        }

        .content-list {
            margin-top: 16rpx;

            .content-list-item {
                margin-bottom: 8rpx;
                display: flex;
                align-items: center;
                height: 69rpx;
                background: #FFFFFF;
                box-shadow: 0rpx 2rpx 20rpx 0rpx rgba(35, 86, 187, 0.1);
                border-radius: 8rpx;
                font-size: 26rpx;
                font-weight: bold;

                .content-list-dot {
                    width: 23rpx;
                    height: 23rpx;
                    background: linear-gradient(135deg, #FBFCFF 0%, #EAF1FF 100%);
                    box-shadow: 0rpx 2rpx 20rpx 0rpx rgba(35, 86, 187, 0.1);
                    border-radius: 4rpx;
                    margin: 0 14rpx 0 16rpx;
                    transform: rotate(45deg);
                }
            }
        }
    }
}

.color2 {
    color: #717BA7;
}

.color3 {
    color: #123C7C;
}
</style>