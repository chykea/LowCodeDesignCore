<template>
    <div id="header">
        <div class="title">
            <ElInput v-if="edit" v-model="title" />
            <span v-else>{{ title }}</span>
            <ElButton @click="setFileTitle">{{ edit ? '保存' : '编辑' }}</ElButton>
        </div>
        <div class="operation">
            <div class="operation_box">
                <ElButton>预览</ElButton>
                <ElButton @click="save">保存</ElButton>
                <ElButton @click="download">下载</ElButton>
            </div>
        </div>
        <div class="user">
        </div>
    </div>
</template>
<script setup>
import { mainStore } from '../../store';
import { saveContent } from '../../request/index.js'
import { ref } from 'vue';
import { ElButton, ElInput } from 'element-plus';

const store = mainStore();

// 标题
const title = ref(store.fileContent.title)
console.log(title.value);
const edit = ref(false)
const setFileTitle = () => {
    store.setFileTitle(title.value)
    edit.value = !edit.value
}


// 处理保存
const save = () => {
    const file = store.setFileContentTemplate()
    const p = saveImpl(file)
    p.then(res => {
        console.log(res)
    })

}
const saveImpl = async (params) => {
    const res = await saveContent(params)
    return Promise.resolve(res)
}


// 处理下载
const download = () => {
    // 先保存
    save()
    // 再下载
    const file = store.setFileContentTemplate()
    const writeFile = JSON.stringify(file, undefined, 4)
    downloadFile(writeFile)
}
const downloadFile = (file) => {
    const blob = new Blob([file], { type: "text/json" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'template.json'
    a.click()
    window.URL.revokeObjectURL(url)
}
</script>
<style scoped>
#header {
    display: flex;
    height: 60px;
    background-color: #fff;
}

#header .title,
#header .user {
    width: 300px;
    height: 100%;
    background-color: #bfa;
}

#header .operation {
    width: calc(100vw - 250px);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

.operation_box {
    margin-right: 130px;
}
</style>