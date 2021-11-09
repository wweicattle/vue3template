
<template>
  <div class="table-container">
      <div>
        tabl
      </div>
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
