<template>
    <div :style="style">
        <el-form :ref="ref" :rules="rules" :label-width="labelWidth" :model="model">
            <el-form-item v-for="(item, key) in model" :label="key" :prop="key">
                <el-col :span="span">
                    <el-input @click.stop />
                </el-col>
            </el-form-item>
            <!-- <el-button @click.stop="submit">提交</el-button> -->
        </el-form>
    </div>
</template>
<script setup>
import { ref } from "vue";
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
    submit: {
        type: Function,
        default: () => { },
    },
    // 每一项的所占的列数
    span: {
        type: Number,
        default: 12,
    }
});
</script>
<style scoped></style>
