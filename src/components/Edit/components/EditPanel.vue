<template>
    <div class="edit_wrapper">
        <div class="content">
            <component :is="editMap.get(current.tag)"></component>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script setup>
import { mainStore } from '../../../store/index'
import { computed, ref } from 'vue'
import EditForm from './EditForm.vue'
import EditLayout from './EditLayout.vue'
import EditButton from './EditButton.vue'
const store = mainStore()
// 初始化为 -1
const activeId = computed(() => store.activeComponentId)
// 所以这里如果获取不到的话,上面的对应编辑页找不到对应组件,会报错
const current = computed(() => store.components.get(activeId.value) ? store.components.get(activeId.value) : {})

const editMap = new Map([['LayoutContent', EditLayout], ['Form', EditForm], ['Button', EditButton]]);

</script>
<style scoped>
.edit_wrapper {
    width: 100%;
    height: 100%;
}

.content {
    margin: 0 10px;
}
</style>