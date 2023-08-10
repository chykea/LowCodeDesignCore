import { defineStore } from "pinia";
import { cloneDeep } from 'lodash'


const file = {
    title: '',

}

let newestId = -1
function generateNode(node, parentId = 1) {
    let id = -1;
    if (!node.id) { // 没有id,表示为添加节点
        id = ++newestId
    } else { // 有id表示初始化
        id = node.id;
        newestId = id > newestId ? id : newestId
    }

    return {
        id,
        parentId,
        tag: node.tag,
        props: cloneDeep(node.props),
        values: cloneDeep(node.values),
        childrens: [],
        tmpStyle: {} // 操作组件时的临时样式
    }
}
export const mainStore = defineStore('main', {
    state: () => {
        return {
            components: new Map(),
            activeComponentId: -1,
            activeContainerId: -1,
            fileContent: file, // 存储文件信息,
        }
    },
    getters: {},
    actions: {
        /**
         * @param {node} 组件的数据
         * @param {parentId} 如果没有传id的话，那就是往画布添加。有的话就是添加在某个容器中
         */
        initComponent(node, parentId = 1) {
            const copyNode = generateNode(node, parentId);
            this.components.set(copyNode.id, copyNode)

            if (parentId !== 0) { // 非根节点
                this.components.get(parentId).childrens.push(copyNode)
            }
            if (node.childrens) {
                node.childrens.forEach(child => this.initComponent(child, copyNode.id));
            }
        },
        // 添加组件
        addComponent(node, parentId = 1) {
            const copyNode = generateNode(node, parentId);
            this.components.set(copyNode.id, copyNode)
            if (parentId !== 0) this.components.get(parentId).childrens.push(copyNode)
            if (node.childrens) node.childrens.forEach(child => this.addComponent(child, copyNode.id))
        },
        // 设置当前激活的组件的临时样式
        setActiveComponentTmpStyle(style) {
            if (this.activeComponentId === -1) return
            const componentStyle = this.components.get(this.activeComponentId).tmpStyle;

            for (let key in style) {
                componentStyle[key] = style[key]
            }
            console.log('123', componentStyle);
        },
        // 清除临时样式
        clearActiveComponentTmpStyle(activeComponentId) {
            if (activeComponentId === -1) return
            this.components.get(activeComponentId).tmpStyle = {}
        },
        // 设置当前激活的容器的id
        setActiveContainerId(containerId) {
            this.activeContainerId = containerId
        },
        // 重置激活的组件
        resetActiveComponent() {
            if (this.activeComponentId === -1) return
            this.components.get(this.activeComponentId).tmpStyle = {}
            this.activeComponentId = -1
        },
        // 重置激活的容器
        resetActiveContainer() {
            this.activeContainerId = -1
        },
        // 修改当前激活的组件
        setActiveComponent(id) {
            // 根组件,不能被选中
            if (id === -1 || id === 1) return
            this.resetActiveComponent()
            this.activeComponentId = id;

            // 当前激活的组件,要置于顶层
            this.components.get(id).tmpStyle['z-index'] = '1000';
        }

    }
})





