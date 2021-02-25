/*
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-23 10:48:04
 * @LastEditors: ak
 * @LastEditTime: 2021-02-23 10:54:10
 */

export default{
	path: '/system',
	component: ()=> import('@/views/Layout'),//@为src路径
	children:[
		{
			path: 'status',
			component: ()=> import('@/components/SystemStatus')
		},
		{
			path: '/system',
			redirect: '/system/status'
		}
	]
}