<template>
    <div class="edit">
        <div class="edit_box">
            <EditPanel />

        </div>
    </div>
</template>
<script setup>
import EditPanel from './components/EditPanel.vue'
</script>
<style scoped>
.edit {
    width: 100%;
    height: 100%;
    background-color: #fff;
}

.edit_box {
    display: flex;
    height: 100%;
    padding: 30px 0;
}
</style>