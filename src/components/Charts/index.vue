<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-26 17:03:15
 * @LastEditors: ak
 * @LastEditTime: 2021-02-26 17:56:16
-->
<template>
    <div class="chartsBox">
        <el-row type="flex">
            <el-col :span="12">
                <div id="myChart1">1</div>
            </el-col>
            <el-col :span="12">
                <div id="myChart2">2</div>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="12">
                <div id="myChart3">3</div>
            </el-col>
            <el-col :span="12">
                <div id="myChart4">4</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Charts',
        props: {
            puvData: {
                type: Array,
                default: []
            },
            userData: {
                type: Array,
                default: []
            },
            processStatistic: {
                type: Array,
                default: []
            },
            scenesShowData: {
                type: Array,
                default: []
            },
        },
        data() {
            return {

            }
        },
        mounted() {
            this.initEchart()
        },
        methods: {
            initEchart() {
                console.log(this.puvData)
                // 基于准备好的dom，初始化echarts实例
                let myChart1 = this.echarts.init(document.getElementById('myChart1'));
                let myChart2 = this.echarts.init(document.getElementById('myChart2'))
                let myChart3 = this.echarts.init(document.getElementById('myChart3'))
                let myChart4 = this.echarts.init(document.getElementById('myChart4'))
                // 绘制图表
                let oneDayNumberList = [];
                for(let item of this.userData){
                    oneDayNumberList.push(item.oneDayNumber)
                } 
                let MonthNumberList = [];
                for(let item of this.userData){
                    MonthNumberList.push(item.MonthNumber)
                } 
                let oneDayRemainingNumberList = [];
                for(let item of this.userData){
                    oneDayRemainingNumberList.push(item.oneDayRemainingNumber)
                } 
                let days7RemainingNumberList = [];
                for(let item of this.userData){
                    days7RemainingNumberList.push(item.days7RemainingNumber)
                } 
                let option = {
                    // title: {
                    //     text: '折线图堆叠'
                    // },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ["日活","月活","日留存","7日留存"]
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['7天前', '6天前', '5天前', '4天前', '3天前', '2天前', '1天前']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '日活',
                            type: 'line',
                            stack: '总量',
                            data: oneDayNumberList
                        },
                        {
                            name: '月活',
                            type: 'line',
                            stack: '总量',
                            data: MonthNumberList
                        },
                        {
                            name: '日留存',
                            type: 'line',
                            stack: '总量',
                            data: oneDayRemainingNumberList
                        },
                        {
                            name: '7日留存',
                            type: 'line',
                            stack: '总量',
                            data: days7RemainingNumberList
                        },
                    ]
                };
                myChart1.setOption(option);
                myChart2.setOption(option);
                myChart3.setOption(option);
                myChart4.setOption(option);
            }
        },
    }
</script>

<style scoped>
    .chartsBox {
        height: 100%;
    }

    .el-row {
        height: 50%;
    }

    #myChart1 {
        width: 100%;
        height: 100%;
    }

    #myChart2 {
        width: 100%;
        height: 100%;
    }

    #myChart3 {
        width: 100%;
        height: 100%;
    }

    #myChart4 {
        width: 100%;
        height: 100%;
    }
</style>