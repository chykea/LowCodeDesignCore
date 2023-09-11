<template>
    <div :style="style" style="min-height: 100px;">
        <el-form :ref="ref" :rules="rules" :label-width="labelWidth" :model="model">
            <el-form-item v-for="(item, key) in model" :label="key" :prop="key">
                <el-col :span="span">
                    <el-input disabled @click.stop />
                </el-col>
            </el-form-item>
            <el-button v-if="sumbitBtnShow" @click.stop="submit">提交</el-button>
        </el-form>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { isUrl, isUrlOrIp } from "../utils/utils"
const props = defineProps({
    style: {
        type: Object,
        default: {}
    },
    ref: {
        type: String,
        default: "validataForm",
    },
    // el-form的校验规则
    rules: {
        type: Object,
        default: [],
    },
    labelWidth: {
        type: String,
        default: "120px",
    },
    // el-form的数据对象,即编辑表单的每一项数据
    model: {
        type: Object,
        default: {},
    },
    label: {
        type: Object,
        default: {},
    },
    // 每一项的所占的列数
    span: {
        type: Number,
        default: 12,
    },
    sumbitBtnShow: {
        type: Boolean,
        default: true
    },
    submitLink: {
        type: String,
        default: ''
    },
    submitWay: {
        type: String,
        default: 'axios'
    }
});

const submit = () => {
    console.log(props.submitLink,);
    if (!isUrlOrIp(props.submitLink)) {
        ElMessage({
            message: '提交链接不合法',
            type: 'error',
            duration: 1500
        })
        return
    }

    // axios.post(props.submitLink, { ...props.model })
    //     .then((res) => {
    //         ElMessage({
    //             message: '提交成功',
    //             type: 'success',
    //             duration: 1500
    //         })
    //     })
    //     .catch((err => {
    //         ElMessage({
    //             message: err.message,
    //             type: 'error',
    //             duration: 1500
    //         })
    //     }));
}
</script>
<style scoped>
.el-form {
    padding: 0 40px;
}
</style>
