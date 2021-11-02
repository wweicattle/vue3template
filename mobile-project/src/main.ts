import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installVant from './plugins'
import 'lib-flexible';
const app=createApp(App).use(store).use(router);
installVant(app)
app.mount('#app')
