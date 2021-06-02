import axios from "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App);
//全局配置
app.use(store).use(router).use(ElementUI);
app.config.globalProperties.$http = axios;
app.mount("#app");
