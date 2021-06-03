import axios from "./plugins/axios";
import 'element3/lib/theme-chalk/index.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI3 from 'element3';
import VueI18n from './language/index.js';


const app = createApp(App);
//全局配置
app.use(store).use(router).use(ElementUI3).use(VueI18n);
app.config.globalProperties.$http = axios;
app.mount("#app");
