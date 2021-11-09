import {
    createApp
} from 'vue'
import App from './App.vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/theme-chalk/index.css';
import ElementPlus from 'element-plus';

// import installPlugins from "./Plugin/element"
let app = createApp(App);
// console.log(app);
// // 遍历ui组件
// installPlugins(app)
app.use(ElementPlus, {
    locale
})
app.mount('#app');