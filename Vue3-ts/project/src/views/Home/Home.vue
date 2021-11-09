<template>
  <div class="home">
    <!-- 在这里进行布局得设计 -->
    <!--  -->
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <el-header height="50px"> header </el-header>
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          closable
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { ref, reactive, onMounted, watch, computed, watchEffect } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    console.log(32323);
    const editableTabsValue = ref("2");
    const editableTabs = reactive([
      {
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content",
      },
      {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content",
      },
      {
        title: "Tab 2",
        name: "3",
        content: "Tab 2 content",
      },
      {
        title: "Tab 2",
        name: "4",
        content: "Tab 2 content",
      },

      {
        title: "Tab 2",
        name: "5",
        content: "Tab 2 content",
      },
       {
        title: "Tab 2",
        name: "6",
        content: "Tab 2 content",
      },

       {
        title: "Tab 2",
        name: "7",
        content: "Tab 2 content",
      }, {
        title: "Tab 2",
        name: "8",
        content: "Tab 2 content",
      },

    ]);
    const removeTab = () => {};
    return { editableTabsValue, removeTab, editableTabs };
  },
});
</script>




<style lang="scss" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      background-color: #545c64;
      color: #fff;
    }
    .el-main {
      border: 1px solid red;
      padding: 0;
      .el-header {
        box-shadow: 0 1px 4px rgb(0 21 41 / 28%);
        padding: 0 20px;
      }
    }
  }
}
</style>
