const homeRoutes = [{
    path: '/',
    component: () => import('../../../views/home/pages/index.vue')
}, {
    path: '/home',
    redirect: '/'
}]
export default homeRoutes