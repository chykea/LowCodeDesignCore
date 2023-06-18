<template>
    <div class="container">
        <componentDecorator v-for="child in myChildren" :key="child.id" :id="child.id" v-slot="data">
            <component :is="getComponent(componentMap.get(child.tag))" @click.stop v-bind="data.data"
                :component-id="child.id" :id="'component' + child.id"
                :style="[child.style, { position: 'relative', 'user-select': 'none' }]">
            </component>
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
        default: '400px'
    },
    height: {
        type: String,
        default: '200px'
    },
    justifyContent: {
        type: String,
        default: 'flex-start'
    },
    alignItem: {
        type: String,
        default: 'center'
    }
})




const comMap = new Map([['UserButton', UserButton], ['UserLayoutContent', UserLayoutContent]])
const store = mainStore()
const getComponent = (ComponentName) => comMap.get(ComponentName)
</script>
<style scoped>
.container {
    position: relative;
    width: v-bind(width);
    height: v-bind(height);
    display: flex;
    outline: dashed #bbb 1px;
    flex-direction: column;
    justify-content: v-bind(justifyContent);
    align-items: v-bind(alignItem);
}
</style>