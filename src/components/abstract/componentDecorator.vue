

<script>
import { computed, createBlock, h, inject } from 'vue';
import { mainStore } from '../../store';

// 抽象组件，用于合并组件以及被选中时的样式
export default {
    name: 'componentDecorator',
    abstract: true,
    props: {
        id: {
            type: Number,
            require: true
        },
        transformer: {
            type: Function,
            default: (rawData) => rawData
        }
    },

    setup(props, { emit, slots }) {
        if (!slots.default) return () => 'null'
        const rawData = computed(() => store.components.get(props.id) ?? null);

        const store = mainStore()
        const transformers = inject('__useTransformer', null)
        const transformer = computed(() => transformers.get(rawData.value.tag) ?? props.transformer)

        const data = computed(() => transformer.value(rawData.value))
        const clickActive = (cb) => (e) => {
            emit('click', e)
            store.activeComponentId = props.id
            if (cb) cb(e)
        }
        console.log(data.value);
        return () => slots.default({ data: data.value })
            .map(
                comp => {
                    return h(
                        comp.type,
                        {
                            ...comp.props,
                            // onClick: clickActive(comp.props && comp.props.onClick)
                        },
                        comp.children
                    )
                }
            )

    },



}
</script>
