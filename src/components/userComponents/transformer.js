import { provide } from "vue";


const UserButton = (raw) => {
    return {
        text: raw.values.text,
    }
}
const UserLayoutContent = (raw) => {
    return {
        componentId: raw.id,
        myChildren: raw.childrens,
        width: raw.props.style.width,
        height: raw.props.style.height,
        justifyContent: raw.props.style.justifyContent ? raw.props.style.justifyContent : raw.props.style['justify-content'],
        alignItems: raw.props.style.alignItems ? raw.props.style.alignItems : raw.props.style['align-items']
    }
}

const UserForm = (raw) => {
    return {
        style: raw.props.style,
        ref: raw.props.ref,
        rules: raw.props.rules,
        labelWidth: raw.props.labelWidth,
        model: raw.props.model,
        span: raw.props.span,
        sumbitBtnShow: raw.props.sumbitBtnShow,
        submitLink: raw.props.submitLink,
        submitWay: raw.props.submitWay
    }
}
const useTransformer = () => {
    provide(
        '__useTransformer',
        new Map([
            ['Button', UserButton],
            ['LayoutContent', UserLayoutContent],
            ['Form', UserForm]
        ])
    )
}
export default useTransformer