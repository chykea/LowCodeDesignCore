<template>
    <div class="home">
        <div>主页</div>
        <router-link to="/user">个人中心</router-link>
        <div v-highlight class="code-box">
            <pre>
                <code>var x = 5</code>
            </pre>
        </div>
    </div>
</template>
<script setup>

</script>
<style  scoped>
.home {
    width: 1376px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>