<template>
    <ComponentDecorator :id="rootNode.id" v-slot="{ data }">
        <component :is="getComponent(componentMap.get(root.tag))" @click.stop :component-id="root.id" v-bind="data"
            :id="'component' + rootNode.id" style="min-height:570px;width:100%" />

    </ComponentDecorator>
    <!--
        点击组件会选中组件，此时遮罩层会被添加到组件中，但此时遮罩层是置顶的，所以当再次点击组件时，会获取不到组件的id，
        取消选中时，需要给遮罩层设置一个鼠标弹起，并把activeComponentId置为-1
    -->
    <Mask />
</template>
<script setup>

import ComponentDecorator from '../abstract/componentDecorator.vue';
import componentMap from './componentMap';
import UserButton from './UserButton.vue';
import UserLayoutContent from './UserLayoutContent.vue';
import { mainStore } from '../../store';
import Mask from '../common/hooks/mask.vue';
import { ref } from 'vue';

const props = defineProps({
    root: {
        type: Object,
    }
})

const store = mainStore()
const rootNode = ref(props.root)

store.initComponent(rootNode.value, 0)

const comMap = new Map([['UserButton', UserButton], ['UserLayoutContent', UserLayoutContent]])
const getComponent = (ComponentName) => comMap.get(ComponentName)



</script>
<style lang='scss' scoped></style>