<template>
    <div class="mask">

        <slot name="mask"></slot>
    </div>
</template>
<script setup>
</script>
<style scoped>
.mask {
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    outline: #bfa dashed 1px;
}
</style>