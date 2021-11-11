<template>
  <div class="container">
    <!-- 进行拖拽的 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    let data = ref();
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>

