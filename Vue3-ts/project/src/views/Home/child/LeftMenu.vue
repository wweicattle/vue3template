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
          <span>首页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1" @click="routepush">item one</el-menu-item>
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
      <el-menu-item index="2" @click="routepushs">
        <span>仪表盘</span>
      </el-menu-item>
      <el-menu-item index="3" @click="routepushss">
        <span>引导</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>复制文本</span>
      </el-menu-item>

      <el-menu-item index="4">
        <span>导出zip</span>
      </el-menu-item>

      <el-menu-item index="4">
        <span>角色管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>菜单管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>项目看板</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouteLocationMatched, useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    // 自己维护的一个路由
    // const routesArr = [{}, {}];
    const useRouters = useRouter();
    const isCollapse = ref(true);
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };

    const routepush = () => {
      useRouters.push("/home/homes");
    };
    const routepushs = () => {
      useRouters.push("/home/table");
    };
     const routepushss = () => {
      useRouters.push("/home/sort");
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      routepush,
      routepushs,
      routepushss,

    };
  },
});
</script>

<style lang="scss" scoped>
.left-container {
  // border: 1px solid red;
  //   height: 100%;

  //   overflow: hidden;
}
</style>
