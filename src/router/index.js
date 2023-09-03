import { createRouter, createWebHistory } from 'vue-router'
import routes from './route'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
// router.beforeEach((to, from, next) => {
//     console.log('beforeEach');
//     next()
// })
// // 在导航确定前,所有组件以及异步组件解析完成时调用
// router.beforeResolve((to, from, next) => {
//     console.log('beforeResolve');
//     next()
// })

// router.afterEach((to, from) => {
//     console.log('afterEach');
// })
export default router;