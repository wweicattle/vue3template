<template>
  <div class="container">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="item in options"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <div class="content-tab">
          <div @click="changeOpe">lorem</div>
          <el-button @click="addNavBtn">{{ope}}add nav</el-button>
          <router-view></router-view>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import vLoading from "element-plus/es/components/loading/src/directive";
import { defineComponent } from "vue";
import { ref, reactive, toRefs, watch } from "vue";
import navOpr from "./useTabs";
import findData from "./useDatas";

export default defineComponent({
  name: "Home",
  components: {},
  props: {
    navlist: {
      type: Array,
    },
  },
  emits: ["addNavs"],
  setup(props, { emit }) {



    let sa=ref("32323");
    sa.value.split("3")
    // console.log(sa.split(","));

    
    
    // nav-tab 操作
    let g = navOpr(props, emit);
    let gf=findData();
    return Object.assign({},g,{...gf});
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  ::v-deep .el-tabs {
    height: 100%;
    .el-tabs__content {
      height: calc(100% - 60px);
    }
    .el-tab-pane {
      height: calc(100%);
      .content-tab {
        border: 1px solid red;
        height: 100%;
      }
    }
  }
}
</style>
