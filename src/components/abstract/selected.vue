

<script>
import { h, render as Render } from 'vue';
import Mask from '../common/Mask/index.vue'
// 抽象组件
export default {
    name: 'selected',
    abstract: true,
    render() {
        // 如果插值没有节点
        if (!this.$slots.default) {
            return null
        }
        // 这里获取的是vnode
        // h函数返回的也是vnode

        // 获取节点信息
        // console.log(this.$slots.default());
        const vnode = this.$slots.default()[0];
        const vnodeRecord = {
            actived: false,
            vnode,
        }
        const operationVnode = h(vnodeRecord.vnode, {
            onClick: (e) => {
                console.log(e.target);
                vnodeRecord.actived = !vnodeRecord.actived;
            }
        })
        return operationVnode
        // return h(Mask, {
        //     onClick: (e) => {
        //         // 
        //         vnodeRecord.actived = !vnodeRecord.actived
        //         console.log(vnodeRecord);
        //     }
        // }, {
        //     mask: () => {
        //         return vnodeRecord.vnode
        //     }
        // })
    }

}
</script>
<style lang='scss' scoped></style>