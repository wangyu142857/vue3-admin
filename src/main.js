import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from "@/router";
import store from "@/store";
import "@/assets/styles/index.scss";

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(store)
  .mount('#app')
