import { provide } from "vue";


const UserButton = (raw) => {
    return {
        text: raw.text,
    }
}
const UserLayoutContent = (raw) => {
    return {
        componentId: raw.id,
        myChildren: raw.childrens,
        width: raw.props.style.width,
        height: raw.props.style.height,
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