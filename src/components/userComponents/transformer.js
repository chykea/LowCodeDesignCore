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

const useTransformer = () => {
    provide(
        '__useTransformer',
        new Map([
            ['Button', UserButton],
            ['LayoutContent', UserLayoutContent]
        ])
    )
}
export default useTransformer