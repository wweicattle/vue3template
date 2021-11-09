<template>
  <div class="left-container">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>首页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>仪表盘</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>引导</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>复制文本</span>
      </el-menu-item>

      <el-menu-item index="5">
        <el-icon><setting /></el-icon>
        <span>导出zip</span>
      </el-menu-item>

      <el-menu-item index="6">
        <el-icon><setting /></el-icon>
        <span>角色管理</span>
      </el-menu-item>
      <el-menu-item index="7">
        <el-icon><setting /></el-icon>
        <span>菜单管理</span>
      </el-menu-item>

      <el-menu-item index="8">
        <el-icon><setting /></el-icon>
        <span>项目看板</span>
      </el-menu-item>

      <el-menu-item index="9">
        <el-icon><setting /></el-icon>
        <span>Excel</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const isCollapse = ref(true);
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style lang="scss" scoped>
.left-container {
  border: 1px solid red;
  //   height: 100%;

  //   overflow: hidden;
}
</style>
