/*
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-01-27 14:41:33
 * @LastEditors: ak
 * @LastEditTime: 2021-02-23 10:08:06
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as echarts from 'echarts'

const app = createApp(App)
app.config.globalProperties.axios = axios;
app.config.globalProperties.echarts = echarts;

app.use(ElementPlus)
app.use(store).use(router).mount('#app')
// createApp(App).use(store).use(router).mount('#app')