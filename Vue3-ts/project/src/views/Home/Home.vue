<template>
  <div class="home">
    <!-- 在这里进行布局得设计 -->
    <!--  -->
    <el-container>
      <el-aside width="200px">
        <left-menu />
      </el-aside>
      <el-main>
        <el-header height="50px">
          <div class="content">
            <div class="left">
              <span>
                <i class="iconfont icon-maoshapen"></i>
              </span>

              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                  >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="right">
              <el-input placeholder="请输入关键字搜索"> </el-input>
              <div class="language">
                <span class="active">中文</span>
                <span>/</span>
                <span>En</span>
              </div>
              <span class="icon">
                <i class="iconfont icon-maoshachan"></i>
              </span>
              <span class="icon"> <i class="iconfont icon-maowan"></i> </span>
              <div class="actor">
                <img src="@/assets/img/actor.jpg" alt="" />
              </div>
              <div>诺颜</div>
            </div>
          </div>
        </el-header>
        <div class="tabs">
          <NavItem :navlist="obj" @addNavs="addNavBtn"></NavItem>
        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { ref, reactive, onMounted, watch, computed, watchEffect } from "vue";
import NavItem from "./child/Tabs.vue";
import LeftMenu from "./child/LeftMenu.vue";
export default defineComponent({
  name: "Home",
  components: {
    LeftMenu,
    NavItem,
  },
  setup() {
    let index = 0;
    let obj = reactive([
      {
        title: "1",
        name: "1",
        content: "Tab 1 content",
      },
      {
        title: "2",
        name: "2",
        content: "Tab 2 content",
      },
      {
        title: "3",
        name: "3",
        content: "Tab 3content",
      },
      {
        title: "4",
        name: "4",
        content: "Tab 4 content",
      },
    ]);
    let num = 4;
    const addNavBtn = (params:any) => {
      console.log(params);
      let g = num++;
      obj.push({
        title: (Number(g) + 1).toString(),
        name: (Number(g) + 1).toString(),
        content: Date.now() + "Tab",
      });
    };
    return { obj, addNavBtn };
  },
});
</script>

<style lang="scss">
.home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      background-color: #545c64;
      color: #fff;
    }
    .el-main {
      // border: 1px solid red;
      padding: 0;
      .el-header {
        box-shadow: 0 1px 4px rgb(0 21 41 / 28%);
        padding: 0 20px;
      }
      .tabs {
        height: calc(100% - 50px);
      }
    }
  }
  .el-main {
    .content {
      height: 100%;
      & > div {
        height: 100%;
        align-items: center;
        display: flex;
        white-space: nowrap;
      }
      .language {
        padding: 0 20px;
        cursor: pointer;
        .active {
          color: var(--sle-text-color);
        }
      }
      .icon {
        padding: 0 5px;
      }
      .right {
        .actor {
          height: 40px;
          img {
            border-radius: 50%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
