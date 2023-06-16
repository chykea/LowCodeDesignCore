import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
// import 'highlight.js/lib/common'
// 代码编辑器
// import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'
// import highlightPlugin from '@highlightjs/vue-plugin'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
const pinia = createPinia();

const app = createApp(App);
// app.directive('highlight', function (el) {
//     const blocks = el.querySelectorAll('pre code');
//     blocks.forEach((block) => {
//         hljs.highlightBlock(block)
//     })
// })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(pinia).use(router).mount('#app')
