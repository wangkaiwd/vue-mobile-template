<template>
  <div class="index" v-cloak>
    <button @click="handleClick">click</button>
    <router-view></router-view>
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
  },
  methods: {
    handleClick() {
      this.$api.Element.fetchSeller().then(res => {
        console.log(res);
      });
    }
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
