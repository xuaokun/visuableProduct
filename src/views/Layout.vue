<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-18 15:55:25
 * @LastEditors: ak
 * @LastEditTime: 2021-02-26 17:42:26
-->
<template>
    <div class="home-box">
        <el-container>
            <!-- <el-header><Header></Header></el-header> -->
            <!-- <el-container> -->
                <!-- <el-aside style="width: 201px;"><AsideMenu></AsideMenu></el-aside> -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            <!-- </el-container> -->
        </el-container>
    </div>
</template>
<script>
    import Header from '@/components/Header';
    import AsideMenu from '@/components/AsideMenu';
    import Footer from '@/components/Footer';
    export default {
        name: 'Layout',
        components: {
            Header,
            AsideMenu,
            Footer
        }
    };
</script>
<style>
    html,
    body,
    #app,
    .home-box,
    .el-container:nth-child(1){
        padding: 0;
        margin: 0;
        height: 100%;
        /* background-color: #f9fafc; */
        background-image: url('../assets/background.png');
        color: rgb(7, 94, 138);
    }
    .el-header{
        padding: 0;
    }
</style>