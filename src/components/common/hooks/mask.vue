<!--
 * @Author: chykea
 * @Date: 2023-06-10 22:49:47
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-11 17:43:23
 * @Description: 请填写简介
-->
<template>
    <teleport :to="activeComponentId">
        <div class="frame" @click.stop @mousedown.stop="startDrag" v-show="isShow">
        </div>
    </teleport>
</template>
<script setup>
import { computed } from 'vue';
import { mainStore } from '../../../store';
import getContainer from '../../utils/getContainer'
import { throttle } from '../../utils/utils';
const store = mainStore()
const activeComponentId = computed(() => store.activeComponentId !== -1 ? "#component" + store.activeComponentId : 'body')
const isShow = computed(() => store.activeComponentId !== -1)

// 遮罩层拖拽
function startDrag(e) {
    let isMouseDown = true
    const clientX = e.clientX
    const clientY = e.clientY
    let activeContainertId = -1

    const { offsetX: mouseLeft, offsetY: mouseTop } = e;

    const style = {
        'pointer-events': 'none'
    }

    store.setActiveComponentTmpStyle(style);
    // 如果移动过程中已经有监听事件,就不再重复添加
    (!document.onmousemove) && (document.onmousemove = throttle(function (e) {
        // console.log(1);
        // 鼠标还没有弹起(isMouseDown = true),表示正在拖拽
        if (!isMouseDown) return false;
        const changeX = e.clientX - clientX
        const changeY = e.clientY - clientY

        const style = {
            transform: `translate(${changeX}px,${changeY}px)`
        }
        const newActiveContainerId = getContainer(e.target)
        if (newActiveContainerId !== activeContainertId) {
            activeContainertId = newActiveContainerId;
            store.setActiveContainerId(activeContainertId)
        }
        store.setActiveComponentTmpStyle(style)
    }));

    (!document.onmouseup) && (document.onmouseup = function (e) {
        if (!isMouseDown) return false
        isMouseDown = false

        const to = store.activeContainerId
        const targetId = store.activeComponentId
        const from = store.components.get(targetId).parentId

        // 拖拽完成
        // 重置当前选中的组件和容器
        store.resetActiveComponent()
        store.resetActiveContainer()
        // 清除当前拖拽组件的临时样式
        store.clearActiveComponentTmpStyle(targetId)

        // 组件移动到其他容器
        store.moveComponent({ to, from, targetId })

        document.onmousemove = null
        document.onmouseup = null
    })

}

</script>
<style  scoped>
.frame {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: box-shadow 0.1s ease;
    box-shadow: 0 0 5px 0 #4a8af4;
}
</style>