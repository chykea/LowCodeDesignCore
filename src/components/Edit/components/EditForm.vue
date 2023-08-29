
<template>
    <div>
        Input width:
        <ElInput v-model.number="props.span" placeholder="有效范围在0-24之间" clearable />
        <div class="open_dialog_btn">
            <span @click="showColumnDialog = true">添加表单列</span>
        </div>
        <ElButton @click="setProps(props)">保存</ElButton>
    </div>
    <el-dialog v-model="showColumnDialog" title="Shipping address">
        <el-form>
            <el-form-item label="Promotion name">
                <el-input autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones">
                <el-select placeholder="Please select a zone">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showColumnDialog = false">Cancel</el-button>
                <el-button type="primary" @click="showColumnDialog = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { mainStore } from '../../../store';
import { ElButton } from 'element-plus';
const store = mainStore()

// 获取表单属性props
const activeComponent = store.components.get(store.activeComponentId);
const props = reactive({ ...activeComponent.props })
store.setActiveComponentProps({})
const setProps = (obj = {}) => {
    store.setActiveComponentProps(obj)
}


const showColumnDialog = ref(false);


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