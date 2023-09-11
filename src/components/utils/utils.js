/*
 * @Author: chykea
 * @Date: 2023-08-10 10:54:11
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-30 10:42:13
 * @Description: 工具库
 */

/**
 * @description: 简易防抖函数
 * @param {Function} fn
 * @return {Function}
 */
export function debounce(fn, delay = 1000) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this)
        }, delay)
    }
}

/**
 * @description: 节流函数throttle
 * @param {Function} fn
 * @return {Function}
 */
export function throttle(fun) {
    let canRun = true;
    return function (...args) {
        if (canRun) {
            fun.apply(this, args)
            canRun = false;
            requestAnimationFrame(() => canRun = true)
        }
    }
}
/**
 * 判断url
 * @param {String} url 
 * @returns {Boolean} 
 */
export function isUrl(url) {
    return /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url)
}

/**
 * 判断ip地址
 * @param {String} url 
 * @returns 
 */
export function isIp(url) {
    return /^(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]):([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(url);
}

export function isUrlOrIp(url) {
    return /^(http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:\d{0,5})?(\/.*)?$/.test(url)
}