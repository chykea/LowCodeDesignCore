
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
    transition: all .5s;
    border: none;
}

button:hover {
    background-color: #a0cfff;
    color: #e9e9eb;
}
</style>