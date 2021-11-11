import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./assets/css/base.css"
import 'element-plus/dist/index.css'

// mock
import "./Mock"
import installPlugins from "./Plugin/element"
let app=createApp(App);
console.log(app);
// 遍历ui组件
installPlugins(app)
app.use(store).use(router).mount('#app');
