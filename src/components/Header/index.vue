<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-19 15:42:16
 * @LastEditors: ak
 * @LastEditTime: 2021-02-23 17:50:56
-->

<template>
    <!-- <div class="line"></div> -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">系统状态</el-menu-item>
      <el-submenu index="2">
        <template #title>我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template #title>选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    </template>
    
    <script>
      export default {
        name: 'Header',
        data() {
          return {
            activeIndex: '1',
            routerMenu:{
              '1': '/'
            }
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
            if(this.routerMenu[key]){
              this.$router.push(this.routerMenu[key])
            }
          }
        }
      }
    </script>
    
    <style scoped>

    </style>
    