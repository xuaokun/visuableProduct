<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-23 10:37:50
 * @LastEditors: ak
 * @LastEditTime: 2021-03-02 13:59:19
-->

<template>
    <div class="main-container">
        <el-row type="flex" class="row-bg page-top">
            <el-col :span="3">
                <div class="grid-content coreIndicator">
                    <CoreIndicator :items="userData[userData.length - 1]"/>
                </div>
            </el-col>
            <el-col :span="21">
                <div class="grid-content statistic">
                    <Charts :puvData="puvData" :userData="userData" :processStatistic="processStatistic" :scenesShowData="scenesShowData"/>
                </div>
            </el-col>
            <!-- <el-col :span="6">
                <div class="grid-content info-import">
                    warn
                </div>
            </el-col> -->
        </el-row>
        <div class="my-divider">
            <el-row class="divider">
                <el-divider content-position="left"><i class="el-icon-loading"></i>基础环境</el-divider>
            </el-row>
        </div>
        <el-row type="flex" class="row-bg page-bottom">
            <el-col :span="2" v-for="(item, index) in statusDict.processStatus" :key="item.name">
                <div class="grid-content">
                    <BaseEnvironment title="离线脚本" :tableData="item"></BaseEnvironment>
                </div>
            </el-col>
            <el-col :span="2" v-for="(item, index) in statusDict.sceneStatus" :key="item.name">
                <div class="grid-content">
                    <BaseEnvironment title="同步脚本" :tableData="item"></BaseEnvironment>
                </div>
            </el-col>
            <el-col :span="2" v-for="(item, index) in statusDict.serverStatus" :key="item.name">
                <div class="grid-content">
                    <BaseEnvironment title="服务状态" :tableData="item"></BaseEnvironment>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import BaseEnvironment from '@/components/BaseEnvironment';
    import CoreIndicator from '@/components/CoreIndicator';
    import Charts from '@/components/Charts';
    export default {
        name: 'SystemStatus',
        data() {
            return {
                statusDict: {
                    processStatus: [],
                    sceneStatus: [],
                    serverStatus: [],
                },
                puvData: [],
                userData: [],
                processStatistic: [],
                scenesShowData: [],
            }
        },
        components: {
            BaseEnvironment,
            CoreIndicator,
            Charts
        },
        mounted() {
            this.getData();
            this.timer = setInterval(this.getData, 1000);
            this.getPUV();
            this.getChartsData();
        },
        methods: {
            //axios异步请求
            getData:function () {
                let that = this;
                that.axios.get('/api/systemStatus').then(res => {
                    let msg = res.data.msg;
                    if (msg == 'ok') {
                        // console.log(res.data.data);
                        let statusDict = {
                            processStatus: [],
                            sceneStatus: [],
                            serverStatus: []
                        };
                        let data = res.data.data;
                        for (let key in data) {//遍历一种状态
                            let list = [];
                            for (let item of data[key]) {//遍历每一条记录
                                if (list.length == 4) {
                                    statusDict[key].push(list);
                                    list = [];
                                }
                                list.push(item);
                            }
                            if (list.length > 0) {
                                statusDict[key].push(list);
                            }
                        }
                        // console.log(statusDict)
                        that.statusDict = statusDict;
                    }
                })
            },

            //axios异步请求获取PV、UV
            getPUV:function () {
                let that = this;
                that.axios.get('/api/getReportData').then(res => {
                    let msg = res.data.msg;
                    if (msg == 'ok') {
                        that.puvData = res.data.data;
                        // console.log(that.puvData)
                    }
                })
            },

            //axios异步请求获取其他图表趋势数据
            getChartsData:function () {
                let that = this;
                that.axios.get('/api/getChartsData').then(res => {
                    let msg = res.data.msg;
                    if (msg == 'ok') {
                        that.userData =  res.data.data.userData;
                        that.processStatistic = res.data.data.processStatistic;
                        that.scenesShowData = res.data.data.scenesShowData;
                        // console.log(res.data.data)
                    }
                })
            }
        },
        beforeUnmount() {
            clearInterval(this.timer);
        }
    }
</script>

<style lang="scss" scoped>
    .main-container {
        height: 100%;
    }

    .el-row {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }
    
    .el-divider{
        background-color: rgb(7, 94, 138);
    }

    ::v-deep(.el-divider__text){
        background-color: #000;
        font-size: 20px;
        color: rgb(7, 94, 138);
    }

    .el-col {
        border-radius: 4px;
    }

    .grid-content {
        border-radius: 4px;
        padding-right: 5px;
        height: 100%;
    }

    .row-bg {
        padding: 10px 0;
        /* background-color: #f9fafc; */
    }
    
    .coreIndicator {

    }

    .statistic {
        
    }

    .info-import {
        background-color: burlywood;
    }

    .el-row ::v-deep(.page-top) {
        height: 40%;
    }

</style>