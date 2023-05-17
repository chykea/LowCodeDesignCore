import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
// import 'highlight.js/lib/common'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
// import highlightPlugin from '@highlightjs/vue-plugin'
const app = createApp(App);
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
}

)
app.use(router).mount('#app')
