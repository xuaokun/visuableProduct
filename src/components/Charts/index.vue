<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-26 17:03:15
 * @LastEditors: ak
 * @LastEditTime: 2021-03-01 13:42:10
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
        name: "Charts",
        props: {
            puvData: {
                type: Array,
                default: [],
            },
            userData: {
                type: Array,
                default: [],
            },
            processStatistic: {
                type: Array,
                default: [],
            },
            scenesShowData: {
                type: Array,
                default: [],
            },
        },
        data() {
            return {};
        },
        watch: {
            // whenever question changes, this function will run
            userData(newUserData, oldUserData) {
                if (newUserData.length > 0) {
                    this.initUserDataEchart()
                }
            },
            processStatistic(newProcessStatistic, oldProcessStatistic){
                if (newProcessStatistic.length > 0) {
                    this.initprocessStatisticEchart()
                }
            },
            puvData(newpuvData, oldpuvData){
                if (newpuvData.length > 0) {
                    this.initPuvData()
                }
            },
            scenesShowData(newScenesShowData, oldScenesShowData){
                if (newScenesShowData.length > 0) {
                    this.initScenesShowData()
                }
            },
        },
        mounted() {
            this.init();
        },
        methods: {
            init(){
                this.myChart1 = this.echarts.init(document.getElementById("myChart1"));
                this.myChart2 = this.echarts.init(document.getElementById("myChart2"));
                this.myChart3 = this.echarts.init(document.getElementById("myChart3"));
                this.myChart4 = this.echarts.init(document.getElementById("myChart4"));
            },
            initUserDataEchart() {
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                //用户活跃数据
                let oneDayNumberList = [];
                let MonthNumberList = [];
                let oneDayRemainingNumberList = [];
                let days7RemainingNumberList = [];
                for (let item of this.userData) {
                    oneDayNumberList.push(item.oneDayNumber);
                    MonthNumberList.push(item.MonthNumber);
                    oneDayRemainingNumberList.push(item.oneDayRemainingNumber);
                    days7RemainingNumberList.push(item.days7RemainingNumber);
                }

                let option = {
                    // title: {
                    //     text: '折线图堆叠'
                    // },
                    tooltip: {
                        trigger: "axis",
                    },
                    legend: {
                        textStyle: {
                            color: "rgb(7, 94, 138)",
                        },
                        icon: "triangle",
                        data: ["日活", "月活", "日留存", "7日留存"],
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    toolbox: {
                        feature: {
                            // saveAsImage: {},
                        },
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        // nameTextStyle: {
                        //     color: "rgb(7, 94, 138)"
                        // },
                        axisLine: {
                            lineStyle: {
                                color: "rgb(7, 94, 138)",
                            },
                        },
                        data: ["7天前", "6天前", "5天前", "4天前", "3天前", "2天前", "1天前"],
                    },
                    yAxis: {
                        type: "value",
                    },
                    series: [
                        {
                            name: "日活",
                            type: "line",
                            stack: "总量",
                            data: oneDayNumberList,
                        },
                        {
                            name: "月活",
                            type: "line",
                            stack: "总量",
                            data: MonthNumberList,
                        },
                        {
                            name: "日留存",
                            type: "line",
                            stack: "总量",
                            data: oneDayRemainingNumberList,
                        },
                        {
                            name: "7日留存",
                            type: "line",
                            stack: "总量",
                            data: days7RemainingNumberList,
                        },
                    ],
                };
                this.myChart1.setOption(option);
            },
            initprocessStatisticEchart() {
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                //同步脚本数据统计
                let dataLenList = [];
                let profileLenList = [];
                let recallLenList = [];
                for (let item of this.processStatistic) {
                    dataLenList.push(item.dataLen);
                    profileLenList.push(item.profileLen);
                    recallLenList.push(item.recallLen);
                }
                
                let option = {
                    // title: {
                    //     text: '折线图堆叠'
                    // },
                    tooltip: {
                        trigger: "axis",
                    },
                    legend: {
                        textStyle: {
                            color: "rgb(7, 94, 138)",
                        },
                        icon: "triangle",
                        data: ["数据量", "内容画像数量", "召回数量"],
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    toolbox: {
                        feature: {
                            // saveAsImage: {},
                        },
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        // nameTextStyle: {
                        //     color: "rgb(7, 94, 138)"
                        // },
                        axisLine: {
                            lineStyle: {
                                color: "rgb(7, 94, 138)",
                            },
                        },
                        data: ["7天前", "6天前", "5天前", "4天前", "3天前", "2天前", "1天前"],
                    },
                    yAxis: {
                        type: "value",
                    },
                    series: [
                        {
                            name: "数据量",
                            type: "line",
                            stack: "总量",
                            data: dataLenList,
                        },
                        {
                            name: "内容画像数量",
                            type: "line",
                            stack: "总量",
                            data: profileLenList,
                        },
                        {
                            name: "召回数量",
                            type: "line",
                            stack: "总量",
                            data: recallLenList,
                        },
                    ],
                };

                this.myChart2.setOption(option);
            },
            initPuvData(){
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                //同步脚本数据统计
                let puvData = {
                    show: [],
                    detailPageShow: [],
                    share: [],
                    showUV: [],
                    detailPageShowUV: [],
                    shareUV: [],
                    createdTime: []
                };

                for (let item of this.puvData) {
                    puvData.show.push(item.show);
                    puvData.detailPageShow.push(item.detailPageShow);
                    puvData.share.push(item.share);
                    puvData.showUV.push(item.showUV);
                    puvData.detailPageShowUV.push(item.detailPageShowUV);
                    puvData.shareUV.push(item.shareUV);
                    puvData.createdTime.push(item.createdTime);
                }
                console.log(puvData)
                let option = {
                    // title: {
                    //     text: '折线图堆叠'
                    // },
                    tooltip: {
                        trigger: "axis",
                    },
                    legend: {
                        textStyle: {
                            color: "rgb(7, 94, 138)",
                        },
                        icon: "triangle",
                        data: ["曝光PV", "点击PV", "分享PV", "曝光UV", "点击UV", "分享UV"],
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    toolbox: {
                        feature: {
                            // saveAsImage: {},
                        },
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        // nameTextStyle: {
                        //     color: "rgb(7, 94, 138)"
                        // },
                        axisLine: {
                            lineStyle: {
                                color: "rgb(7, 94, 138)",
                            },
                        },
                        data: ["7天前", "6天前", "5天前", "4天前", "3天前", "2天前", "1天前"],
                    },
                    yAxis: {
                        type: "value",
                    },
                    series: [
                        {
                            name: "曝光PV",
                            type: "line",
                            stack: "总量",
                            data: puvData.show,
                        },
                        {
                            name: "点击PV",
                            type: "line",
                            stack: "总量",
                            data: puvData.detailPageShow,
                        },
                        {
                            name: "分享PV",
                            type: "line",
                            stack: "总量",
                            data: puvData.share,
                        },
                        {
                            name: "曝光UV",
                            type: "line",
                            stack: "总量",
                            data: puvData.showUV,
                        },
                        {
                            name: "点击UV",
                            type: "line",
                            stack: "总量",
                            data:  puvData.detailPageShowUV,
                        },
                        {
                            name: "分享UV",
                            type: "line",
                            stack: "总量",
                            data: puvData.shareUV,
                        },
                    ],
                };

                this.myChart3.setOption(option);
            },
            initScenesShowData(){
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                //同步脚本数据统计
                let sceneData = {
                };
                let nameList = [];
                for (let item of this.scenesShowData) {
                    for(let iitem of item){
                        if(sceneData[iitem.name]){
                            sceneData[iitem.name].push(iitem.show);
                        }else{
                            nameList.push(iitem.name);
                            sceneData[iitem.name] = [iitem.show];
                        }
                    }
                }
                
                let option = {
                    // title: {
                    //     text: '折线图堆叠'
                    // },
                    tooltip: {
                        trigger: "axis",
                    },
                    // legend: {
                    //     textStyle: {
                    //         color: "rgb(7, 94, 138)",
                    //     },
                    //     icon: "triangle",
                    //     data: nameList,
                    // },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    toolbox: {
                        feature: {
                            // saveAsImage: {},
                        },
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        // nameTextStyle: {
                        //     color: "rgb(7, 94, 138)"
                        // },
                        axisLine: {
                            lineStyle: {
                                color: "rgb(7, 94, 138)",
                            },
                        },
                        data: ["7天前", "6天前", "5天前", "4天前", "3天前", "2天前", "1天前"],
                    },
                    yAxis: {
                        type: "value",
                    },
                    series: [],
                };
                console.log(sceneData)
                for(let key in sceneData){
                    if(key != 'undefined'){
                        console.log(key)
                        option.series.push(
                            {
                                name: key,
                                type: "line",
                                stack: "总量",
                                data: sceneData[key],
                            }
                        )
                    }
                }
                console.log(option);
                this.myChart4.setOption(option);
            }

        },
    };
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