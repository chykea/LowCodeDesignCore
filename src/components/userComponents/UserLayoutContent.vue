<template>
    <div>
        <componentDecorator v-for="child in myChildren" :key="child.id" :id="child.id" v-slot="data">
            <component :is="getComponent(componentMap.get(child.tag))" v-bind="data.data"></component>
        </componentDecorator>
    </div>
</template>
<script setup>
import componentDecorator from '../abstract/componentDecorator.vue';
import componentMap from './componentMap';
import UserButton from './UserButton.vue';
import UserLayoutContent from './UserLayoutContent.vue'
import { mainStore } from '../../store';

const props = defineProps({
    componentId: {
        type: Number,
        required: true
    },
    myChildren: {
        type: Array,
        default: []
    },
    width: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: ''
    },
})


const comMap = new Map([['UserButton', UserButton], ['UserLayoutContent', UserLayoutContent]])
const store = mainStore()
const getComponent = (ComponentName) => comMap.get(ComponentName)
</script>
<style scoped></style>