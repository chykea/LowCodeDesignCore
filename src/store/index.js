import { defineStore } from "pinia";
import { cloneDeep } from 'lodash'

const childrens = [
    {
        id: 2,
        tag: 'Button',
        props: {},
        values: {
            text: '测试按钮'
        },
        childrens: []
    },
    {
        id: 3,
        tag: 'LayoutContent',
        props: {
            style: {
            }
        },
        values: {},
        childrens: []
    }
]
const root = {
    id: 1,
    tag: 'LayoutContent',
    props: {
        style: {
        }
    },
    childrens,
}

const file = {
    title: '',
    root: root
}

let nodeId = -1
function generateNode(node, parentId = 1) {
    let id = -1;
    if (!node.id) { // 没有id,表示为添加节点
        id = ++nodeId;

    } else {
        id = node.id;
        nodeId = id > node.id ? id : nodeId
    }
    return {
        id,
        parentId,
        tag: node.tag,
        props: cloneDeep(node.props),
        values: cloneDeep(node.values),
        childrens: []
    }
}
export const mainStore = defineStore('main', {
    state: () => {
        return {
            components: new Map(),
            activeComponentId: -1,
            activeComponentValue: {},
            fileContent: file, // 存储文件信息,
            root: root, // 模拟初始化的数据
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
        changeActiveComponentId(id) {

        },

        // initComponent,
        // addComponent,

    }
})





