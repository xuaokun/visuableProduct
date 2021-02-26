<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-23 13:39:18
 * @LastEditors: ak
 * @LastEditTime: 2021-02-26 16:35:30
-->

<template>
  <el-table :header-row-class-name="tableHeadRowClassName" :data="tableData" :rowClassName="tableRowClassName" style="width: 100%">
    <el-table-column prop="name" :label="title">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'BaseEnvironment',
    props: {
      title: {
        type: String,
        default: '类型'
      },
      tableData: {
        type: Array,
        default: [{

          name: 'Mongo1',
          status: 'ok',
        }, {
          name: 'Mongo2',
          status: 'err'
        }, {
          name: 'Redis1',
          status: 'ok',
        }, {
          name: 'Redis2',
          status: 'err'
        }]
      }
    },
    methods: {
      tableRowClassName({ row, rowIndex }) {
        if (row.status === 'err') {
          return 'warning-row';
        } else if (row.status === 'ok') {
          return 'success-row';
        }
        return '';
      },
      tableHeadRowClassName(){
        return 'head-row';
      }
    },
  }
</script>

<style scoped lang="scss">
  .el-table{
    font-size: 12px;
    background-color: #000;
    color: rgb(7, 94, 138);
  }
  .el-table ::v-deep(.cell){
    height: 20px;
  }

  .el-table ::v-deep(td),.el-table ::v-deep(.el-table th){
    padding: 2px 0;
  }
  
  .el-table ::v-deep(.warning-row) {
    background:  #eeaeb3;
    opacity: 0.8;
  }

  .el-table ::v-deep(.success-row ){
    background: #8ac28a;
  }

  .el-table ::v-deep(th){
    color: gold;
    text-align: center;
    background-color: #000;
  }

  .el-table::before {
    content: "";
    position: absolute;
    background-color: #000;
    z-index: 1;
  }

  .el-table ::v-deep(td),.el-table ::v-deep(th){
    border-bottom: 2px solid #000;
}
</style>