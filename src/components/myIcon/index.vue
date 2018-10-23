<template>
  <div class="base-icon" @click="$emit('click')">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#elem-${icon}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: { type: String, required: true } // 传入icon对应的字符串
  }
};
</script>

<style lang="less" scoped>
.base-icon {
  display: inline-block;
  vertical-align: top;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: top;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
