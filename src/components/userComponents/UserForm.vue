<template>
    <div :style="style">
        <el-form :ref="ref" :rules="rules" :label-width="labelWidth" :model="_model">
            <el-form-item v-for="(item, key) in _model" :label="key" :prop="key">
                <el-input v-model="_model[item]" @click.stop />
            </el-form-item>
            <el-button>提交</el-button>
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
    rules: {
        type: Object,
        default: [],
    },
    labelWidth: {
        type: String,
        default: "120px",
    },
    model: {
        type: Object,
        default: {},
    },
    submit: {
        type: Function,
        default: () => { },
    },
});
const _model = ref(props.model);
</script>
<style scoped></style>
