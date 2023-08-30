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