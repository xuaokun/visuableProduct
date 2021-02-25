<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-18 16:31:28
 * @LastEditors: ak
 * @LastEditTime: 2021-02-23 15:42:29
-->

<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="false">
        <el-submenu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>系统状态</span>
            </template>
            <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>数据报表</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <template #title>趋势统计</template>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>实时状态</template>
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <template #title>数据接入</template>
        </el-menu-item>
        <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <template #title>异常报警</template>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'AsideMenu',
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>