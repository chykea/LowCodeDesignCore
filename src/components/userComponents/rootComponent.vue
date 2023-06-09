<template>
    <ComponentDecorator :id="root.id" v-slot="{ data }">
        <component :is="getComponent(componentMap.get(root.tag))" :component-id="root.id" v-bind="data" />
    </ComponentDecorator>
</template>
<script setup>

import ComponentDecorator from '../abstract/componentDecorator.vue';
import componentMap from './componentMap';
import UserButton from './UserButton.vue';
import UserLayoutContent from './UserLayoutContent.vue';
import { mainStore } from '../../store';

const props = defineProps({
    root: {
        type: Object,
    }
})
// console.log(props.root);
// console.log(props);


const comMap = new Map([['UserButton', UserButton], ['UserLayoutContent', UserLayoutContent]])

const store = mainStore()
const getComponent = (ComponentName) => comMap.get(ComponentName)

</script>
<style lang='scss' scoped></style>