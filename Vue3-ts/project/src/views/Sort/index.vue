<template>
  <div class="container">
    sotr
    <div>{{ a }}</div>
    <div @click="++a">{{ a }}</div>
    <div>
      props
      {{ props }}
    </div>>
    <!-- <help sa="dsdsdsd"></help> -->
  </div>
</template>

<script lang="ts" setup>
import help from "./help.vue"
import { ref } from "vue"
const a = ref(2121);

const props = defineProps({
  foo: String
})
const emit = defineEmits(['change', 'delete'])
// 函数
function log() {
  console.log(a.value)
}
</script>

  <style lang = "scss" scoped >
</style>
