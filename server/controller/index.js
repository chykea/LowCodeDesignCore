/*
 * @Author: chykea
 * @Date: 2023-08-10 17:54:46
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-11 09:28:31
 * @Description: 控制器类
 */
const data = {}


class Controller {
    test(ctx) {
        ctx.body = {
            code: '200',
            msg: '测试',
            data: null
        }
    }

    getContent(ctx) {

    }
}
export default new Controller()