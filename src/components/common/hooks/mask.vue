<template>
    <teleport :to="activeComponentId">
        <div class="frame" @mouseup.stop="MouseUp" @dragstart="startDrag" v-show="isShow" draggable="true"></div>
    </teleport>
</template>
<script setup>
import { computed } from 'vue';
import { mainStore } from '../../../store';
const store = mainStore()
const activeComponentId = computed(() => store.activeComponentId !== -1 ? "#component" + store.activeComponentId : 'body')
const isShow = computed(() => store.activeComponentId !== -1)

let isMouseUp = true
function startDrag() {

    isMouseUp = false
    console.log('开始拖动');
}
function MouseUp() {
    if (isMouseUp) {
        store.activeComponentId = -1;
        console.log('弹起');
    }
    isMouseUp = true
}
</script>
<style  scoped>
.frame {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>