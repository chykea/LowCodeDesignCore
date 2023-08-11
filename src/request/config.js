import axios from 'axios'
import { ElMessage } from 'element-plus'
const instance = axios.create({
    baseURL: 'http://localhost:5174',
    timeout: 6000
})

// 请求配置
instance.interceptors.request.use(config => {
    return config
})

instance.interceptors.response.use(res => {
    const res = res.data;
    if (res.code !== '200') {
        ElMessage({
            message: '接口请求有误',
            type: "danger",
            duration: 2000
        })
        return null
    }
    return res;
}, err => {
    ElMessage({
        message: '接口请求有误' + err,
        type: "danger",
        duration: 2000
    })
})

export default instance