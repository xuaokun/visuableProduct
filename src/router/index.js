/*
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-01-27 14:41:34
 * @LastEditors: ak
 * @LastEditTime: 2021-03-03 11:04:32
 */
import { createRouter, createWebHistory } from 'vue-router'
import systemRouter from './system'


const routes = [
  {
	  path:'',
	  redirect: '/system'
  },
  systemRouter,
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/visuable-product'),
  routes
})

export default router
