import axios from "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);
//全局配置
app.use(store).use(router);
app.config.globalProperties.$http = axios;
app.mount("#app");
