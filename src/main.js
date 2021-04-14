/*
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-01-27 14:41:33
 * @LastEditors: ak
 * @LastEditTime: 2021-03-03 10:59:50
 */
import { createApp } from 'vue'
import {
    ElAside,
    ElCol,
    ElContainer,
    ElDivider,
    ElFooter,
    ElHeader,
    ElIcon,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElTable,
    ElTableColumn,
    ElTag,
} from 'element-plus';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import * as echarts from 'echarts'
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
    LineChart
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
    CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
);
const app = createApp(App)
app.config.globalProperties.axios = axios;
app.config.globalProperties.echarts = echarts;

// app.use(ElementPlus)
const components = [
    ElAside,
    ElCol,
    ElContainer,
    ElDivider,
    ElFooter,
    ElHeader,
    ElIcon,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElTable,
    ElTableColumn,
    ElTag,
];

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
// createApp(App).use(store).use(router).mount('#app')