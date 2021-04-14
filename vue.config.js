/*
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-25 09:55:30
 * @LastEditors: ak
 * @LastEditTime: 2021-03-03 11:08:29
 */
module.exports = {
	devServer:{
		proxy:{
			'/api':{
				target:'http://122.14.231.165:7001/',
				changeOrigin: true
			}
		}
	},
	// chainWebpack: config => {
    //     config
    //         .plugin('webpack-bundle-analyzer')
    //         .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // },
	publicPath: '/visuable-product'
}