<!--
 * @Author: chykea
 * @Date: 2023-08-28 15:24:02
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-28 15:24:02
 * @Description: 请填写简介
-->
<template>
    <div>编辑按钮</div>
    <div>
        <span>文本:</span>
        <el-input v-model="text" />
        {{ activeComponent.values.text }}
        <el-button @click="confirmText">确认</el-button>
    </div>
    <div>
        <span>交互:</span>

    </div>

    <el-button type="primary">保存为组件</el-button>
    <!-- <save-to-component :component="activeComponent" :visible="visible" @updateVisible="updateVisible" /> -->
</template>
<script setup>
import { computed, ref } from 'vue';
import { mainStore } from '../../../store';
const store = mainStore()
const activeComponent = store.components.get(store.activeComponentId)
const text = ref(activeComponent.values.text)

const confirmText = () => {
    activeComponent.values.text = text.value
}


// 保存为模板
const visible = ref(false)
const updateVisible = (value) => {
    visible.value = value
}
</script>
<style  scoped></style>