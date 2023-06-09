<template>
    <p>1</p>
    <router-link to="/demo2">2</router-link>
</template>
<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
const router = useRouter();
// setup中没有beforeRouteEnter

onBeforeMount(() => {
    console.log('onBeforeMount')
})
onMounted(() => {
    console.log('onMounted');
    console.log('================');
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
})
onUnmounted(() => {
    console.log('onUnmounted');
})


onBeforeRouteUpdate((to, from, next) => {
    // 只有像 /foo/1 -> /foo/2 的路由变化才会触发该钩子函数
    console.log(1);
    console.log('BeforeRouteUpdate');
    console.log(1);
    next()
})
onBeforeRouteLeave((to, from, next) => {
    console.log('BeforeRouteLeave');
    next()
})


</script>
<style scoped></style>