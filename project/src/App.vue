<template>
  <div class="contain">
    <div class="test">test</div>
    <img src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script >
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.contain {
  .test {
    color: red;
  }
}
img {
  width: 200px;
  height: 200px;
}
</style>
