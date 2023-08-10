<!--
 * @Author: chykea
 * @Date: 2023-06-03 14:37:34
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-10 11:21:43
 * @Description: 请填写简介
-->

<template>
    <button type="button">
        <slot>{{ text }}</slot>
    </button>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        default: ''
    },
})

</script>
<script>
export default {
    name: 'UserButton'
}
</script>
<style  scoped>
button {
    width: 100px;
    height: 35px;
    transition-property: background-color, color;
    transition-duration: .5s;
    border: none;
}

button:hover {
    background-color: #a0cfff;
    color: #e9e9eb;
}
</style>