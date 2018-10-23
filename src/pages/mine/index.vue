<template>
  <div class="mine">
    我的
    <router-link to='/'>home</router-link>
  </div>
</template>

<script>
const LENGTH = 5;
console.log("global", LENGTH); // 这段代码只会执行一次
export default {
  name: "VMine",
  mounted() {
    console.log("mounted", LENGTH); // mounted钩子函数会在每次页面渲染的时候执行
  }
};
</script>

<style lang="less" scoped>
</style>
