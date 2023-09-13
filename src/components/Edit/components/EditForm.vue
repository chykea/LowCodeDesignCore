<template>
  <div>
    Input width:
    <ElInput v-model.number="props.span" placeholder="有效范围在0-24之间" clearable />
    <div class="open_dialog_btn">
      <span @click="showColumnDialog = true">编辑表单列</span>
    </div>
    <div>
      <el-checkbox v-model="show" @change="setSubmit" border>提交</el-checkbox>

      <el-checkbox></el-checkbox>
    </div>
    <div v-show="show">
      <div>
        <span>提交链接：</span><el-input v-model="link"></el-input>
      </div>
      <div>
        <span>提交方式：</span>
        <div>
          <el-radio-group v-model="submitWay">
            <el-radio v-for="item in submitWaySelect" :key="item.id" :label="item.label">{{ item.label }}</el-radio>
          </el-radio-group>
        </div>
      </div>
      <el-button @click="confirmSubmit">确认</el-button>
    </div>
    <ElButton @click="setProps(props)">保存</ElButton>
  </div>
  <el-dialog v-model="showColumnDialog" title="表单列">
    <el-form>
      <el-form-item v-for="(item, key, index) in props.model" :key="uniqueId()">
        <el-col :span="4">
          <!-- el-input绑定的方式是双向绑定,不是双向绑定的无法编辑 -->
          <!-- 但要修改for循环内的数据的话，el-input会失去焦点，因为修改了会导致for循环重新渲染 -->
          <!-- 一个解决方案就是，把要修改的数据提取出来，然后通过修改这些数据，后续更新就以这些数据为准即可 -->
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
        <el-col :span="2" @click="deleteColumn(index)">
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
        <el-button type="primary" @click="saveFormModel"> 保存 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import { mainStore } from "../../../store";
import { ElButton, ElMessage } from "element-plus";
import { uniqueId } from "lodash";
import { isUrlOrIp } from "../../utils/utils"
const store = mainStore();

// 获取表单属性props
const activeComponent = store.components.get(store.activeComponentId);
const props = reactive(activeComponent.props);
const setProps = (obj = {}) => {
  store.setActiveComponentProps(obj);
};

// 编辑表单列
const showColumnDialog = ref(false);
const modelKeys = ref(Object.keys(props.model));
const labelValues = ref(Object.values(props.label));
// 新增
const addColumn = () => {
  const model = {};
  const label = {};
  const colName = "col_" + Date.now();
  modelKeys.value.forEach((item, index) => {
    model[item] = "";
  });
  for (let key in props.label) {
    label[key] = props.label[key];
  }
  model[colName] = "";
  label[colName] = colName;
  setProps({ model, label });
  // 记：虽然object是无序的，但es6之后，使用Object提供的keys方法和values方法得到的顺序，会按照添加的顺序进行输出(如果type为string的话)
  modelKeys.value = Object.keys(model);
  labelValues.value = Object.values(label);
};

// 保存
const saveFormModel = () => {
  const model = {};
  const label = {};
  // 构造新的 model
  modelKeys.value.forEach((item, index) => {
    model[item] = "";
    label[item] = labelValues.value[index];
  });
  setProps({ model, label });
  showColumnDialog.value = false;
  labelValues.value = Object.values(label);
};

// 删除
const deleteColumn = (index) => {
  modelKeys.value.splice(index, 1);
  labelValues.value.splice(index, 1);

  const model = {};
  const label = {};
  modelKeys.value.forEach((item, index) => {
    model[item] = "";
    label[item] = labelValues.value[index];
  });
  setProps({ model, label });
};

// 提交链接与提交方式
const show = ref(props.submitOption.show)
const link = ref(props.submitOption.link)
const submitWay = ref(props.submitOption.way)
const submitWaySelect = ref([{
  id: '01',
  label: 'axios',
},
  // {
  //   id: '02',
  //   label: '$.ajax'
  // }
])
const setSubmit = (value) => {
  // 当取消选择后,把提交链接清空
  // value === false ? link.value = '' : null
  const option = {
    show: value,
    link: link.value,
    way: submitWay.value
  };
  setProps({ submitOption: option })
}

const confirmSubmit = () => {
  if (link.value.trim() === '') {
    ElMessage({
      message: '请填写提交链接',
      type: 'warning',
      duration: 1500
    })
    return
  };
  if (!isUrlOrIp(link.value)) {
    ElMessage({
      message: '链接格式不正确',
      type: 'warning',
      duration: 1500
    })
    return
  }
  const prop = {};
  prop['show'] = show.value
  prop['link'] = link.value;
  prop['way'] = submitWay.value
  setProps({ submitOption: prop })
}


</script>
<style scoped>
.open_dialog_btn {
  font-size: 12px;
  color: #409eff;
}

.open_dialog_btn span {
  cursor: pointer;
}
</style>
