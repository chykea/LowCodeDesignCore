/*
 * @Author: chykea
 * @Date: 2023-08-10 17:54:46
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-11 18:05:10
 * @Description: 控制器类
 */
// 模拟数据
const data = {
    template: {
        root: {
            id: 1,
            tag: 'LayoutContent',
            props: {
                style: {
                    width: '100%',
                    height: '100%',
                }
            },
            childrens: [],
            values: {}
        }
    }
}


class Controller {
    test(ctx) {
        ctx.body = {
            code: '200',
            msg: '测试连接',
            data: null
        }
    }

    getContent(ctx) {
        ctx.body = {
            code: '200',
            msg: '成功',
            data
        }
    }

    postContent(ctx) {
        const params = ctx.request.body
        console.log(params);
        ctx.body = {
            code: '200',
            msg: '保存成功',
            data: params
        }
    }

    tip() {
        ctx.body = {
            code: '404',
            msg: '暂无请求接口~',
        }
    }

}
export default new Controller()