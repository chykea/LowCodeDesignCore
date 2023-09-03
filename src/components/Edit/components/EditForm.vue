
<template>
    <div>
        Input width:
        <ElInput v-model.number="props.span" placeholder="有效范围在0-24之间" clearable />
        <div class="open_dialog_btn">
            <span @click="showColumnDialog = true">编辑表单列</span>
        </div>
        <ElButton @click="setProps(props)">保存</ElButton>
    </div>
    <el-dialog v-model="showColumnDialog" title="Shipping address">
        <el-form>
            {{ labelValues }}
            <el-form-item v-for="(item, key, index) in props.model" :key="uniqueId()">
                <!-- {{ item }} --- {{ key }} --- {{ index }} -->
                <el-col :span="4">
                    <!-- el-input绑定的方式是双向绑定,不是双向绑定的无法编辑 -->
                    <div class="el-input">
                        <div class="el-input__wrapper">
                            <input class="el-input__inner" v-model="modelKeys[index]" />
                        </div>
                    </div>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="2">
                    <div class="el-input">
                        <div class="el-input__wrapper">
                            <input class="el-input__inner" v-model="labelValues[index]" />
                        </div>
                    </div>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="2" @click="deleteColumn(modelKeys[index])">
                    <div class="open_dialog_btn"><span>删除列</span></div>
                </el-col>
            </el-form-item>
        </el-form>
        <div class="open_dialog_btn">
            <span @click="addColumn">添加一列</span>
        </div>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showColumnDialog = false">取消</el-button>
                <el-button type="primary" @click="saveFormModel">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup>
import { computed, reactive, ref } from 'vue';
import { mainStore } from '../../../store';
import { ElButton } from 'element-plus';
import { uniqueId } from 'lodash'
const store = mainStore()

// 获取表单属性props
const activeComponent = store.components.get(store.activeComponentId);
const props = reactive(activeComponent.props)
const setProps = (obj = {}) => {
    store.setActiveComponentProps(obj)
}

// 编辑表单列
const showColumnDialog = ref(false);
const modelKeys = ref(Object.keys(props.model))
const labelValues = ref(Object.values(props.label))



const addColumn = () => {
    const model = {};
    const label = {};
    const colName = 'col_' + Date.now();
    modelKeys.value.forEach((item, index) => {
        model[item] = ''
    })
    for (let key in props.label) {
        label[key] = props.label[key]
    }
    model[colName] = '';
    label[colName] = colName;
    setProps({ model, label })
    modelKeys.value = Object.keys(model)
    labelValues.value = Object.values(label)
}
// 保存
const saveFormModel = () => {
    const model = {}
    const label = {}
    // 构造新的 model
    modelKeys.value.forEach((item, index) => {
        model[item] = ''
        label[item] = labelValues.value[index]
    })
    setProps({ model, label })
    showColumnDialog.value = false
    labelValues.value = Object.values(label)
}

// 删除
const deleteColumn = (item) => {
    modelKeys.value.splice(modelKeys.value.indexOf(item), 1)
    const model = {};
    const label = {};
    modelKeys.value.forEach((item, index) => {
        model[item] = ''
        label[item] = props.label[item]
    })
    setProps({ model, label })
    labelValues.value = Object.values(label)
}



</script>
<style  scoped>
.open_dialog_btn {
    font-size: 12px;
    color: #409eff;

}

.open_dialog_btn span {
    cursor: pointer;
}
</style>