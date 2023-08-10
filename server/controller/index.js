class Controller {
    test(ctx) {
        ctx.body = {
            code: '200',
            msg: '测试',
            data: null
        }
    }
}
export default new Controller()