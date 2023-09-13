<template>
    <div v-if="props.visible">
        <el-dialog v-model="visible">
            <el-button>取消</el-button>
            <el-button @click="cancle">确认保存</el-button>
        </el-dialog>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    component: {
        type: Object,
        required: true
    }
})
const visible = ref(true)

const emit = defineEmits(['updateVisible'])
const cancle = () => {
    emit('updateVisible', false)
}

</script>
<style lang='scss' scoped></style>