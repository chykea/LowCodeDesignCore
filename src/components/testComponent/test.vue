<template>
    <div>
        <h3>测试组件页面</h3>
        <router-link to="/">返回首页</router-link>

        <el-form :model="form.model">
            <el-form-item v-for="(item, key) in form.model" :label="form.label[key]">
                <el-input style="width:100px;"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
const form = {
    model: {
        name: '',
        sex: '',
        age: ''
    },
    label: {
        name: '姓名',
        sex: '性别',
        age: '年龄'
    }

}
</script>
<style scoped></style>