
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
        {{ _model }}
        {{ _keys }}
        <el-form>
            <el-form-item v-for="(item, key) in _model" :key="uniqueId()">
                <el-col :span="4">
                    <!-- el-input绑定的方式是双向绑定,不是双向绑定的无法编辑 -->
                    <div class="el-input">
                        <div class="el-input__wrapper">
                            <input class="el-input__inner" @input="change(_model)" />
                        </div>
                    </div>
                </el-col>
                <el-col :span="20"><el-input disabled /></el-col>
            </el-form-item>
        </el-form>
        <div class="open_dialog_btn">
            <span @click="() => { }">添加一列</span>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showColumnDialog = false">取消</el-button>
                <el-button type="primary" @click="showColumnDialog = false">
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
const props = reactive({ ...activeComponent.props })
const setProps = (obj = {}) => {
    store.setActiveComponentProps(obj)
}

// 编辑表单列
const showColumnDialog = ref(false);
const _model = { ...props.model } // 用于渲染

const change = (model, event) => {
    const newKey = event.target.value;
}

const changeKey = (oldKey, newKey) => {
    return
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