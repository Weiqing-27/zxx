<template>
    <div class="page">
        <div class="content-question">
            <div class="input-container">
                <div class="text-12"><span class="red-symbol mx-5">*</span>标题</div>
                <input v-model="title" class="input-field mx-5" placeholder="请输入标题" />
            </div>

            <div class="input-container">
                <div><span class="red-symbol mx-5">*</span>问题描述</div>
                <textarea v-model="description" class="input-field mx-5" placeholder="请输入问题描述"></textarea>
            </div>
        </div>

        <div class="file-upload-container">
            <div class="text-14 mb-8"><span class="red-symbol">*</span>文件上传</div>
            <div class="text-11 color1 mx-5 mb-8">支持上传JPG/PNG格式的文件，大小不超过4MB</div>
            <div class="flex justify-center">
                <Uploader :after-read="handleAfterRead" accept="image/jpeg,image/png" :max-size="4 * 1024 * 1024" class="uploader">
                    <Button type="primary" class="upload">
                        <div class="flex justify-evenly">
                            <Icon name="description-o" class="rotate-90 mx-10" />
                            <div class="text-13 flex align-center gray6">上传文件</div>
                        </div>
                    </Button>
                </Uploader>
            </div>
        </div>

        <div class="tips">
            <p>温馨提醒：</p>
            <p>1.信息填写请详细说明问题原因。。</p>
            <p>2.不要多人重复上报统一问题。</p>
            <p>3.提交内容仅限于系统使用过程中遇到的问题，非系统类问题请咨询相应业务部门。</p>
            <p>4.运维服务时间为工作日08:00-20:00，其余时间服务时效可能降低，敬请谅解。</p>
        </div>
        <div class="flex justify-center">
            <img src="@/assets/images/detail/bottom-bg.png" class="zhlogo" />
        </div>
        <!-- <div class="h-80 bg-1 flex justify-center mt-50">

            <Button type="primary" block @click="submit" class="mt-16 mx-8">提交</Button>
        </div> -->
        <sticky-bottom-bar>
            <Button type="primary" block @click="submit" class="button">提交</Button>
        </sticky-bottom-bar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Uploader, Button, showConfirmDialog, Icon } from 'vant';

const submit = () => {
    showConfirmDialog({
        title: '标题',
        message: '问题上报提交后不可更改， 是否确认提交？'
    })
        .then(() => {
            // on confirm
        })
        .catch(() => {
            // on cancel
        });

    console.log('提交', title.value, description.value);
};
const title = ref('');
const description = ref('');

const handleAfterRead = file => {
    // 处理文件上传逻辑
    console.log(file);
};
</script>
<style lang="scss" scoped>
.page {
    padding-top: 16rpx;
    min-height: 70vh;
    background-color: #f1f2f5;

    .content-question {
        height: 321rpx;
        padding: 24rpx 32rpx;
        margin: 16rpx;
        background-color: #ffffff;
        border-radius: 16rpx;
        font-size: 28rpx;
        .input-container {
            margin-bottom: 20rpx;
            border-bottom: 1rpx solid #e6e6e6;
            padding-bottom: 20rpx;

            .input-field {
                width: 100%;
                margin-top: 12rpx;
                padding: 12rpx;
                font-size: 26rpx;
                
            }
        }
    }

    .file-upload-container {
        height: 218rpx;
        padding: 24rpx 32rpx;
        margin: 16rpx;
        background-color: #ffffff;
        border-radius: 16rpx;
        .uploader {
            width: 100%;
            margin: 32rpx;
        }

        .upload {
            display: flex;
            justify-content: space-evenly;
            height: 114rpx;
            width: 634rpx;
            background-color: #ffffff;
            // border: 1rpx solid #999999;
            // opacity: 0.72;
            border: 1rpx dashed #999999;
            margin-top: -16rpx;
            padding-right:50rpx;
        }
    }

    .tips {
        margin: 16rpx;
        margin-bottom: 20rpx;
        margin-top: 24rpx;
        p {
            color: #aaaaaa;
            font-size: 22rpx;
            margin: 8rpx;
            margin-top: 16rpx;
            line-height: 30rpx;

        }
    }

    .brand-info {
        margin-top: 20rpx;
        text-align: center;
        color: #666;
        font-size: 24rpx;
    }
    .rotate-90 {
        width: 29rpx;
        height: 34rpx;
        color: #666666;
        // display: inline-block;
        // transform: rotate(180deg);
    }
    .zhlogo {
        margin-top: 393rpx;
        margin-bottom: 32rpx;
        width: 322rpx;
        height: 28rpx;
    }
    .button {
        height: 104rpx;
        background-color: #ffb148;
        border-radius: 16rpx;
    }

    .red-symbol {
        color: red;
        font-weight: bold;
        margin-right: 4rpx;
    }
    .bg-1 {
        background-color: #ffffff;
    }
    .color1 {
        color: #aaaaaa;
    }
}
</style>
