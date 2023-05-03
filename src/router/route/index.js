import userRoutes from "./user/user.route";
import homeRoutes from "./home/home.route";
class Routes {
    constructor(routes = []) {
        this.routes = [...routes]
    }
    push(route) {
        this.routes = [...this.routes, ...route]
    }
}
const routes = new Routes()
routes.push(userRoutes)
routes.push(homeRoutes)
export default routes.routes;