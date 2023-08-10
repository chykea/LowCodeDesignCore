<template>
    <teleport :to="activeComponentId">
        <div class="frame" @click.stop @mousedown.stop="startDrag" v-show="isShow">
        </div>
    </teleport>
</template>
<script setup>
import { computed, ref } from 'vue';
import { mainStore } from '../../../store';
import getContainer from '../../utils/getContainer'
const store = mainStore()
const activeComponentId = computed(() => store.activeComponentId !== -1 ? "#component" + store.activeComponentId : 'body')
const isShow = computed(() => store.activeComponentId !== -1)

// 遮罩层拖拽
function startDrag(e) {

    let isMouseDown = true
    const clientX = e.clientX
    const clientY = e.clientY
    let activeContainertId = -1

    const style = {
        'pointer-event': 'none'
    }

    store.setActiveComponentTmpStyle(style);
    // 如果移动过程中已经有监听事件,就不再重复添加
    (!document.onmousemove) && (document.onmousemove = function (e) {
        // 鼠标还没有弹起(isMouseDown = true),表示正在拖拽
        if (!isMouseDown) return false;
        const changeX = e.clientX - clientX
        const changeY = e.clientY - clientY

        const style = {
            transform: `translate(${changeX}px,${changeY}px)`
        }
        const newActiveContainerId = getContainer(e.target)
        console.log(e.target);
        console.log(newActiveContainerId);
        if (newActiveContainerId !== activeContainertId) {
            activeContainertId = newActiveContainerId;
            store.setActiveContainerId(newActiveContainerId)
        }


        store.setActiveComponentTmpStyle(style)
    });

    (!document.onmouseup) && (document.onmouseup = function (e) {
        if (!isMouseDown) return false
        isMouseDown = false

        const targetId = store.activeComponentId

        store.resetActiveComponent()
        store.resetActiveContainer()
        store.clearActiveComponentTmpStyle(targetId)


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