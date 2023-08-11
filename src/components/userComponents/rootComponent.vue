<template>
    <ComponentDecorator :id="rootNode.id" v-slot="{ data }">
        <component :is="getComponent(componentMap.get(root.tag))" @click.stop :component-id="root.id" v-bind="data"
            :id="'component' + rootNode.id" style="min-height:570px;width:100%" />
    </ComponentDecorator>
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
import { getContent } from '../../request/index'

const {data} = await getContent()
const root = data.template.root;

const store = mainStore()
const rootNode = ref(root)

store.initComponent(rootNode.value, 0)

const comMap = new Map([['UserButton', UserButton], ['UserLayoutContent', UserLayoutContent]])
const getComponent = (ComponentName) => comMap.get(ComponentName)




</script>
<style lang='scss' scoped></style>