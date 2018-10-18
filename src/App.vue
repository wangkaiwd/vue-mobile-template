<template>
  <div class="index" v-cloak>
    App
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {},
  components: {},
  mounted() {
    this.$api.Element.fetchSeller().then(res => {
      console.log(res);
    });
  }
};
</script>

<style lang="less" scoped>
.index {
  -webkit-overflow-scrolling: touch;
}

[v-cloak] {
  display: none;
}
</style>
