<!--
 * @Descripttion: 
 * @version: 
 * @Author: ak
 * @Date: 2021-02-26 16:03:00
 * @LastEditors: ak
 * @LastEditTime: 2021-03-01 14:20:57
-->

<template>
  <div class="tag-group">
    <span class="tag-group__title">日活</span>
    <el-tag type="" effect="plain">
      {{ items.oneDayNumber }}
    </el-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">月活</span>
    <el-tag type="" effect="plain">
      {{ items.MonthNumber }}
    </el-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">日留存</span>
    <el-tag type="" effect="plain">
      {{ items.oneDayRemainingNumber }}
    </el-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">7日留存</span>
    <el-tag type="" effect="plain">
      {{ items.days7RemainingNumber }}
    </el-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">新增</span>
    <el-tag type="" effect="plain">
      {{ items.newNum ? items.newNum : '-'}}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "CoreIndicator",
  props: {
    items: {
      type: Object,
      default: {
        oneDayNumber: 99,
        MonthNumber: 9999,
        oneDayRemainingNumber: 77,
        days7RemainingNumber: 66,
        newNum: 66,
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.tag-group {
  display: flex;
  height: 60px;
  line-height: 60px;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.el-tag {
  display: inline-block;
  /* width: 80px; */
  font-size: 36px;
  height: 60px;
  line-height: 60px;
  background: none;
}

.tag-group__title {
  display: inline-block;
  width: 60px;
  margin-right: 5px;
}

::v-deep(.el-tag--plain) {
  background-color: rgba(7, 94, 138, 0.3);
  border-color: rgb(7, 94, 138);
  color: #409eff;
}
</style>