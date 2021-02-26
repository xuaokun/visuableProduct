/*
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-25 09:55:30
 * @LastEditors: ak
 * @LastEditTime: 2021-02-26 12:53:24
 */
module.exports = {
	devServer:{
		proxy:{
			'/api':{
				target:'http://192.168.0.103:4006',
				changeOrigin: true
			}
		}
	}
}