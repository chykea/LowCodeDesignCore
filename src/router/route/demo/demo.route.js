const demoRoutes = [{
    path: '/demo1',
    component: () => import('../../../components/common/demo/Demo.vue'),
    beforeEnter: (to, from, next) => {
        console.log('Demo1 beforeEnter');
        next()
    }
}, {
    path: '/demo2',
    component: () => import('../../../components/common/demo/Demo2.vue'),
    beforeEnter: (to, from, next) => {
        console.log('Demo2 beforeEnter');
        next()
    }
}]
export default demoRoutes