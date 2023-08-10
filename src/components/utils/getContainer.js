// 获取当前
export default function (target) {
    // 如果拖拽组件所在的位置不是组件
    if (target.id.indexOf('component') === -1) return -1

    // 如果当前的目标是容器
    if (target.className.indexOf('container') !== -1) {
        return Number(target.id.slice(9))
    }
    // 
    return Number(target.parentNode.id.slice(9))
}