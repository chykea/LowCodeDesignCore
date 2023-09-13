/*
 * @Author: chykea
 * @Date: 2023-08-10 17:54:46
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-21 10:30:29
 * @Description: 控制器类
 */

// 模拟数据
import template from '../template.json';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const fileNameNew = fileURLToPath(import.meta.url)
const dirNameNew = path.dirname(fileNameNew)
const server = path.resolve(fileNameNew, '../../')




class Controller {
    test(ctx) {
        ctx.body = {
            code: '200',
            msg: '测试连接',
            data: null
        }
    }

    // 保存文件
    postContent(ctx) {
        const params = ctx.request.body
        fs.writeFile(server + '/data/index.json', JSON.stringify(params, undefined, 4), (err) => {
            if (!err) {
                console.log('写入成功');
            }
            else {
                console.log('写入失败', err.message);
            }
        })


        ctx.body = {
            code: '200',
            msg: '保存成功',
            data: params
        }
    }

    async getTemplate(ctx) {
        const file = await import('../data/index.json')
        if (JSON.stringify(file.default) === '{}') {
            // 没有保存过的，就使用初始模板
            ctx.body = {
                code: '200',
                msg: '成功',
                data: template
            }
        } else {
            ctx.body = {
                code: '200',
                msg: '成功',
                data: file.default
            }
        }

    }

    async getComponentPanel(ctx) {

    }
    tip(ctx) {
        ctx.body = {
            code: '404',
            msg: '暂无请求接口~',
        }
    }

}
export default new Controller()