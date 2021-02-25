<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-23 10:37:50
 * @LastEditors: ak
 * @LastEditTime: 2021-02-25 15:46:29
-->

<template>
    <div class="main-container">
        <el-row type="flex" class="row-bg page-top">
            <el-col :span="6">
                <div class="grid-content coreIndicator">
    
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content statistic">
    
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content info-import">
    
                </div>
            </el-col>
        </el-row>
        <el-row class="divider">
            <el-divider content-position="left">基础环境</el-divider>
        </el-row>
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
    export default {
        name: 'SystemStatus',
        data(){
            return{
                statusDict: {
                    processStatus: [],
                    sceneStatus: [],
                    serverStatus: []
                }
            }
        },
        components: {
            BaseEnvironment
        },
        mounted() {
            this.axios.get('/api/systemStatus').then(res => {
                let msg = res.data.msg;
                if(msg == 'ok'){
                    console.log(res.data.data);
                    let data = res.data.data;
                    for(let key in data){//遍历一种状态
                        let list = [];
                        for(let item of data[key]){//遍历每一条记录
                            if(list.length == 4){
                                this.statusDict[key].push(list);
                                list = [];
                            }
                            list.push(item);
                        }
                        if(list.length > 0){
                            this.statusDict[key].push(list);
                        }
                    }
                    console.log(this.statusDict)
                }
            })
        },
    }
</script>

<style scoped lang="scss">
    .main-container{
        height: 100%;
    }
    
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .divider{
        margin-bottom: 0;
    }
    .el-divider__text{
        background-color: #f9fafc;
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

    .el-el-divider{
        height: auto;
    }

    .coreIndicator{
        background-color: bisque;
    }

    .statistic{
        background-color: blueviolet;
    }
    
    .info-import{
        background-color: burlywood;
    }

    .page-bottom{
        /* height: 200px; */
    }
    .el-scrollbar__view{
        height: 100%;
    }
</style>