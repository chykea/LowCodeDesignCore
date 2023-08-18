/*
 * @Author: chykea
 * @Date: 2023-08-10 17:54:46
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-18 15:44:20
 * @Description: 控制器类
 */

// 模拟数据
import template from '../template.json';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const fileNameNew = fileURLToPath(import.meta.url)
const dirNameNew = path.dirname(fileNameNew)

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
        const path = '../template.json'
        fs.writeFile(path, JSON.stringify(params, undefined, 4), (err) => {
            if (!err) {
                console.log('写入成功');
                fs.readFile(path, (err, data) => {
                    if (!err) {
                        console.log(data.toString());
                    }
                    else {
                        console.log('读取失败');
                    }
                })
            }
            else {
                console.log('写入失败');
            }
        })


        ctx.body = {
            code: '200',
            msg: '保存成功',
            data: params
        }
    }

    getTemplate(ctx) {
        ctx.body = {
            code: '200',
            msg: '成功',
            data: template
        }
    }

    tip(ctx) {
        ctx.body = {
            code: '404',
            msg: '暂无请求接口~',
        }
    }

}
export default new Controller()