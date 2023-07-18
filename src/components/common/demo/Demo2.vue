<template>
    <p>2</p>
    <router-link to="demo1">1</router-link>
    <!-- <Demo1></Demo1> -->
</template>
<script setup>
import { onBeforeMount, onMounted } from 'vue'
// import Demo1 from './Demo.vue'
// console.log('================');
onBeforeMount(() => {
    console.log('Demo2 onBeforeMount')
})
onMounted(() => {
    console.log('Demo2 onMounted');
    console.log('================');
})
</script>
<style scoped></style>