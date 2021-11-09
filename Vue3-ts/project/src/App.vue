<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref, reactive, onMounted } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    let data = ref();
    console.log("App");
    onMounted(() => {
      console.log("onmounted");
    });
    return { data };
  },
});
</script>

<style lang="scss">
#app {
  height: 100%;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
</style>
