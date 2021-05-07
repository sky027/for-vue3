// import Plugin from "./plugins/axios";
import axios from "./plugins/http";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(router).mount("#app");
//全局配置
app.config.globalProperties.$http = axios;
