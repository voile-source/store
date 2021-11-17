import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import installElementPlus from './plugins/element.js'

import axios from 'axios'
axios.defaults.baseURL='http://localhost';  //设置一个类似base_url的请求路径


const app = createApp(App)
app.use(store).use(router).use(ElementPlus).use(installElementPlus).mount('#app');