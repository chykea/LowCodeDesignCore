import { defineStore } from "pinia";

const childrens = [
    {
        id: 2,
        tag: 'Button',
        text: '测试按钮',
        props: {},
        childrens: []
    },
]
const root = {
    id: 1,
    tag: 'LayoutContent',
    props: {
        style: {
            width: '100%',
            height: '100%'
        }
    },
    childrens,
}

export const mainStore = defineStore('main', {
    state: () => {
        return {
            components: new Map([[root.id, root], ...childrens.map(item => [item.id, item])]),
            activeComponentId: -1,
            activeComponentValue: {},
            fileContent: new Map([[root.id, root]]), // 存储后端发送过来的组件数据
            content: {}
        }
    },
    getters: {},
    actions: {
        initComponent({ node, parentId }) {

        },
        changeActiveComponentId(id) {

        },

        // initComponent,
        // addComponent,

    }
})



/**
 * @param {node} 组件的数据
 * @param {parentId} 如果没有传id的话，那就是往画布添加。有的话就是添加在某个容器中
 */
// function initComponent(state, { node, parentId = 1 }) {
//     console.log(state);
// }

// function addComponent(state, { node, parentId = 1 }) {

// }

// function getNodeData({ parentId }) {
//     let id = parentId;

//     return {
//         id,
//     }
// }