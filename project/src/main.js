import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from './plugins/element'
import 'lib-flexible';
let app=createApp(App).use(store).use(router);
installElementPlus(app);
app.mount("#app");
