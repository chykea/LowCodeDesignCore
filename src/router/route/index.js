import userRoutes from "./user/user.route";
import homeRoutes from "./home/home.route";
import demoRoutes from "./demo/demo.route";

const defaultRoute = {
    path: "/",
    component: () => import('../../View.vue'),
}
const tesRoute = {
    path: "/test",
    component: () => import('../../components/testComponent/test.vue')
}

class Routes {
    constructor(routes = []) {
        this.routes = [defaultRoute, tesRoute, ...routes]
    }
    push(route) {
        this.routes = [...this.routes, ...route]
    }
}
const routes = new Routes()
// routes.push(userRoutes)
// routes.push(homeRoutes)
// routes.push(demoRoutes)
export default routes.routes;