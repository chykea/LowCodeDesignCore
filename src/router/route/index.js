import userRoutes from "./user/user.route";
import homeRoutes from "./home/home.route";
import demoRoutes from "./demo/demo.route";

const defaultRoute = {
    path: "/",
    component: () => import('../../App.vue')
}
class Routes {
    constructor(routes = []) {
        this.routes = [defaultRoute, ...routes]
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