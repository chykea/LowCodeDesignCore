<template>
    <div class="container" :class="{ active: isActive }">
        <componentDecorator v-for="child in myChildren" :key="child.id" :id="child.id" v-slot="data">
            <component :is="getComponent(componentMap.get(child.tag))" @click.stop v-bind="data.data"
                :component-id="child.id" :id="'component' + child.id"
                :style="[child.style, child.tmpStyle, { position: 'relative', 'user-select': 'none' }]">
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
import { computed } from 'vue';

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
const componentId = props.componentId
const getComponent = (ComponentName) => comMap.get(ComponentName)
const isActive = computed(() => componentId === store.activeContainerId)


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

.active {
    outline: #4a8af4 solid 2px;
    z-index: 1000;
}
</style>