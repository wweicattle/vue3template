<template>
  <div class="container">help {{ props.sa }}</div>
  <div>{{ sa }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const a = ref(2121);
const props = defineProps({
  sa: String
})
console.log(22222222222);
console.log(props.sa);
</script>

  <style lang = "scss" scoped >
</style>
