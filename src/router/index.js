/*
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-01-27 14:41:34
 * @LastEditors: ak
 * @LastEditTime: 2021-02-23 11:08:07
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
